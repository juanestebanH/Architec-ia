from agents.architect_agent import ArchitectAgent

# Función para ejecutar el agente con los datos proporcionados
def run_agent(data: dict):
    agent = ArchitectAgent()
    return agent.run(data)