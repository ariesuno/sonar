import { http, HttpResponse } from 'msw';

function decodeScope(header: string | null) {
    if (!header) return null;
    try {
        const json = atob(header);
        return JSON.parse(json) as { role: string; userId: string; teamId?: string };
    } catch {
        return null;
    }
}

// Minimal seed inline to keep files short
const users = [
    { id: 'u-mgmt', name: 'Gestora', role: 'GESTAO' },
    { id: 'u-tl-1', name: 'TL Norte', role: 'TEAM_LEADER', teamId: 't-norte' },
    { id: 'u-tl-2', name: 'TL Sul', role: 'TEAM_LEADER', teamId: 't-sul' },
    ...Array.from({ length: 6 }).map((_, i) => ({
        id: `u-cons-${i + 1}`,
        name: `Consultor ${i + 1}`,
        role: 'CONSULTOR',
        teamId: i < 3 ? 't-norte' : 't-sul',
    })),
];

const clients = Array.from({ length: 30 }).map((_, i) => ({
    id: `c-${i + 1}`,
    name: `Cliente ${i + 1}`,
    ownerId: `u-cons-${(i % 6) + 1}`,
}));

export const handlers = [
    http.get('/me', ({ request }) => {
        const scope = decodeScope(request.headers.get('x-scope'));
        const found = users.find(u => (scope?.userId ? u.id === scope.userId : u.role === 'GESTAO'));
        return HttpResponse.json(found || users[0]);
    }),

    http.get('/kpis', ({ request }) => {
        const scope = decodeScope(request.headers.get('x-scope'));
        const base = scope?.role === 'CONSULTOR' ? 1 : scope?.role === 'TEAM_LEADER' ? 3 : 6;
        return HttpResponse.json({
            nps: 70 + base,
            csat: 82 + base,
            auc: 65 + base,
        });
    }),

    http.get('/clients', ({ request }) => {
        const scope = decodeScope(request.headers.get('x-scope'));
        if (scope?.role === 'CONSULTOR') {
            return HttpResponse.json(clients.filter(c => c.ownerId === scope.userId));
        }
        if (scope?.role === 'TEAM_LEADER') {
            const teamOwners = users.filter(u => u.role === 'CONSULTOR' && u.teamId === scope.teamId).map(u => u.id);
            return HttpResponse.json(clients.filter(c => teamOwners.includes(c.ownerId)));
        }
        return HttpResponse.json(clients);
    }),

    http.get('/renewals', () => {
        return HttpResponse.json([
            { id: 'r-1', clientId: 'c-1', dueInDays: 15 },
            { id: 'r-2', clientId: 'c-2', dueInDays: 35 },
        ]);
    }),

    http.get('/alerts', () => {
        return HttpResponse.json([
            { id: 'a-1', message: 'Cliente 3 com risco elevado' },
            { id: 'a-2', message: 'Renovação atrasada para Cliente 5' },
        ]);
    }),
];


