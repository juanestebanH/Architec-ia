from fastapi import APIRouter
from fastapi.concurrency import run_in_threadpool
from schemas.agent_schema import AgentRequest
from services.agent_service import run_agent

# Crear el router para las rutas del agente
router = APIRouter()

# Endpoint POST para analizar datos con el agente
@router.post("/agente")
async def analyze(request: AgentRequest):
    resultado = await run_in_threadpool(run_agent, request.results_json)
    return resultado