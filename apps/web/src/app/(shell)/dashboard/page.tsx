'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Route } from 'next';
import { api } from '@/lib/api';
import type { MeResponse } from '@/lib/types';

export default function DashboardIndex() {
    const router = useRouter();

    useEffect(() => {
        async function run() {
            try {
                const res = await api.get<MeResponse>('/me');
                const me = res.data;
                window.localStorage.setItem('me', JSON.stringify(me));
                switch (me.role) {
                    case 'CONSULTOR':
                        router.replace('/dashboard/consultant' as Route);
                        break;
                    case 'TEAM_LEADER':
                        router.replace('/dashboard/team-leader' as Route);
                        break;
                    case 'ALOCADOR':
                        router.replace('/dashboard/allocator' as Route);
                        break;
                    case 'DAILY_BANKER':
                        router.replace('/dashboard/daily-banker' as Route);
                        break;
                    default:
                        router.replace('/dashboard/management' as Route);
                }
            } catch {
                router.replace('/dashboard/management' as Route);
            }
        }
        run();
    }, [router]);

    return null;
}


