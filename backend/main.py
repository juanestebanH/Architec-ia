from fastapi import FastAPI
from routes.agent import router as agent_router
from fastapi.middleware.cors import CORSMiddleware


# Inicialización de la aplicación FastAPI
app = FastAPI()

# Configurar CORS para permitir solicitudes desde cualquier origen
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Incluir las rutas del agente en la aplicación
app.include_router(agent_router)