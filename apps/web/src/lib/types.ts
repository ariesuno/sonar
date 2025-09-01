export type Role = 'GESTAO' | 'TEAM_LEADER' | 'CONSULTOR' | 'ALOCADOR' | 'DAILY_BANKER';

export interface Scope {
    role: Role;
    userId: string;
    teamId?: string;
}

export interface MeResponse {
    id: string;
    name: string;
    role: Role;
    teamId?: string;
}


