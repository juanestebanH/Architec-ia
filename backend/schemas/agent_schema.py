from pydantic import BaseModel

# Esquema de solicitud para el agente, valida que answers_json sea un diccionario
class AgentRequest(BaseModel):
    results_json: dict