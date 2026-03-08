from huggingface_hub import InferenceClient
import json
import os
from dotenv import load_dotenv
load_dotenv()
api_key = os.getenv("TOKE_FACE")

# Clase principal del agente arquitecto que utiliza Hugging Face para generar recomendaciones de arquitectura
class ArchitectAgent:
    
    def __init__(self):
        # Inicializar el cliente de inferencia con el modelo Llama
        self.client = InferenceClient(
            model="meta-llama/Llama-3.1-8B-Instruct",
            token=api_key
        )

        # Prompt del sistema que define el rol del agente
        self.system_prompt = """
        ROL
        Actúa como un Arquitecto de Software senior con experiencia en startups,
        productos SaaS y sistemas enterprise. Tu objetivo es proponer la arquitectura
        más adecuada al contexto del proyecto, no la más compleja.

        Debes priorizar simplicidad, mantenibilidad, escalabilidad razonable
        y costo operativo.

        PRINCIPIOS
        - Evita sobre-arquitectura
        - Prefiere soluciones simples cuando el contexto lo permita
        - Justifica cada decisión técnica
        - Usa lenguaje claro, profesional y didáctico
        - No asumas información que no esté presente
        - Considera el tamaño del equipo y la complejidad del sistema
        - No recomiendes microservicios a menos que exista una razón clara

        ARQUITECTURAS DISPONIBLES

        Debes elegir la arquitectura más adecuada entre las siguientes:

        1. Monolithic Architecture
        2. Layered Architecture (N-Tier)
        3. Modular Monolith
        4. Microservices Architecture
        5. Event-Driven Architecture
        6. Hexagonal Architecture (Ports and Adapters)
        7. Clean Architecture
        8. Serverless Architecture
        9. Microkernel Architecture (Plugin-based)
        10. Service-Oriented Architecture (SOA)
        11. CQRS Architecture
        12. Space-Based Architecture
        13. Backend for Frontend (BFF)

        Selecciona SOLO una arquitectura como recomendación principal.

        Si ninguna encaja perfectamente, elige la más cercana y explica
        las adaptaciones necesarias.

        REGLAS DE DECISIÓN

        Antes de seleccionar la arquitectura final:

        1. Identifica las principales restricciones del proyecto
        2. Evalúa al menos 3 arquitecturas del catálogo
        3. Analiza cada una según:

        - escalabilidad
        - complejidad operativa
        - facilidad de mantenimiento
        - tamaño del equipo
        - costo de infraestructura

        4. Selecciona la arquitectura con mejor equilibrio.

        REGLAS DE VARIEDAD

        No repitas siempre las arquitecturas más comunes.

        - Usa Monolithic o Layered solo si el contexto lo justifica claramente.
        - Considera arquitecturas modernas cuando el sistema lo requiera.
        - Si el sistema necesita modularidad, considera Modular Monolith.
        - Si el sistema depende de eventos o procesamiento asíncrono, considera Event-Driven.
        - Si se requiere alta desacoplación del dominio, considera Hexagonal o Clean Architecture.
        - Si el sistema es pequeño o MVP, considera Monolithic o Modular Monolith.
        - Si el sistema es altamente distribuido, considera Microservices o Event-Driven.

        IMPORTANTE

        Tu objetivo no es elegir la arquitectura más avanzada,
        sino la más adecuada para el contexto real del proyecto.
        """

    # Método principal para ejecutar el agente con datos de entrada
    def run(self, answers_json):
        
        # Construir el prompt de usuario con el contexto proporcionado
        prompt = f"""
            CONTEXTO
            Un usuario respondió un cuestionario sobre su proyecto de software.
            Las respuestas representan restricciones reales del proyecto y deben tratarse como hechos.

            ENTRADAS DEL USUARIO (JSON)
            {json.dumps(answers_json, indent=2)}

            TAREAS

            1. Analiza las respuestas e identifica las principales restricciones del proyecto.
            Ejemplos:
            - tamaño del equipo
            - nivel de escalabilidad requerido
            - complejidad del sistema
            - integración con otros sistemas
            - necesidades de mantenimiento

            2. Evalúa al menos 3 arquitecturas posibles del catálogo disponible.

            3. Compara esas arquitecturas considerando:
            - escalabilidad
            - complejidad operativa
            - mantenibilidad
            - tamaño del equipo
            - costo de infraestructura

            4. Selecciona la arquitectura más adecuada para el proyecto.

            5. Explica claramente por qué esta arquitectura es la mejor opción.

            6. Menciona una arquitectura que NO sea recomendable y explica por qué.

            7. Propón un diagrama lógico de alto nivel describiendo los componentes principales y el flujo de datos.

            FORMATO DE SALIDA

            Devuelve EXCLUSIVAMENTE un objeto JSON válido, sin texto adicional, con la siguiente estructura:

            {{
                "recommended_architecture": string,
                "technical_justification": string,
                "benefits": [string],
                "limitations": [string],
                "logical_diagram": [string],
                "future_recommendations": string,
                "rejected_architectures": [
                    {{
                        "name": string,
                        "reason": string
                    }}
                ]
            }}

            REGLAS

            - La justificación técnica debe ser clara y detallada
            - Incluye al menos 3 beneficios en "benefits"
            - Incluye al menos 3 limitaciones en "limitations"
            - El "logical_diagram" debe describir componentes y flujo de datos usando texto estructurado
            - El "rejected_architectures" debe incluir solo una arquitectura no recomendada con una razón concreta
            - No incluyas texto fuera del JSON
            """

        # Realizar la llamada al modelo de chat
        response = self.client.chat_completion(
            messages=[
                {"role":"system","content":self.system_prompt},
                {"role":"user","content":prompt}
            ],
            temperature=0.3
        )

        text = response.choices[0].message.content

        try:
            # Intentar parsear la respuesta como JSON
            return json.loads(text)
        except:
            # Si falla, devolver la respuesta cruda
            return {"raw": text}
