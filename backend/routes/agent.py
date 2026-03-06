from fastapi import APIRouter
from schemas.agent_schema import AgentRequest
from services.agent_service import run_agent

# Crear el router para las rutas del agente
router = APIRouter()

# Endpoint POST para analizar datos con el agente
@router.post("/agente")
def analyze(request: AgentRequest):
    return run_agent(request.results_json)