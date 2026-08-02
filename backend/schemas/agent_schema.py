from typing import List, Optional

from pydantic import BaseModel

class ProjectAnswers(BaseModel):
    app_type: str
    business_domain: str
    expected_growth: str
    expected_traffic: str
    team_size: str
    team_seniority: Optional[str] = None
    time_to_market: str
    infra_budget_usd: Optional[str] = None
    compliance_requirements: Optional[List[str]] = None
    deployment_environment: Optional[str] = None
    system_integrations: Optional[List[str]] = None
    performance_importance: str
    availability_sla: Optional[str] = None


class AgentRequest(BaseModel):
    results_json: ProjectAnswers