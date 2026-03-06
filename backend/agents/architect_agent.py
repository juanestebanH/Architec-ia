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
        Actúa como un Arquitecto de Software senior, con experiencia en sistemas reales,
        startups y entornos enterprise. Tu objetivo es proponer la arquitectura
        más adecuada al contexto, no la más compleja.

        REGLAS IMPORTANTES
        - Evita sobre-arquitectura
        - No recomiendes microservicios si no son estrictamente necesarios
        - Prioriza simplicidad, mantenibilidad y costo
        - Justifica cada decisión técnica
        - Usa lenguaje claro, profesional y didáctico
        - Si descartas una arquitectura, explica por qué
        - No asumas información que no esté presente
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
        1. Identifica las principales restricciones del proyecto
        2. Sugiere una arquitectura de software adecuada
        3. Describe el estilo arquitectónico elegido
        4. Explica por qué esta arquitectura es la más conveniente
        5. Menciona qué arquitecturas NO se recomiendan y por qué
        6. Propón un diagrama lógico de alto nivel, descrito en texto estructurado

        FORMATO DE SALIDA
        Devuelve EXCLUSIVAMENTE un objeto JSON válido, sin texto adicional, con la siguiente estructura:

        {{
            "recommended_architecture": string,
            "technical_justification": string,
            "benefits": [string],
            "limitations": [string],
            "logical_diagram": string,
            "future_recommendations": string 
            "rejected_architectures": [
                {{
                "name": string,
                "reason": string
                }}
            ],
        }}

        Reglas:
        - justificacion técnica debe ser clara y detallada
        - Incluye al menos 3 beneficios en "benefits" técnicos y operativos
        - Incluye al menos 3 elementos en "limitations" técnicos y operativos
        - El logical_diagram debe contener únicamente código Graphviz DOT en formato texto
        - El rejected_architectures debe incluir solo una arquitectura no recomendada, con una razón concreta
        - No incluyas markdown
        - No incluyas texto fuera del JSON

        IMPORTANTE
        No sugieras tecnologías específicas a menos que sea estrictamente necesario.
        Enfócate en principios arquitectónicos y decisiones de diseño.

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
