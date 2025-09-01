'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Role } from './types';

export function useRoleGuard(allowed: Role[]) {
    const router = useRouter();
    useEffect(() => {
        const meRaw = window.localStorage.getItem('me');
        if (!meRaw) {
            router.replace('/dashboard');
            return;
        }
        try {
            const me = JSON.parse(meRaw) as { role: Role };
            if (!allowed.includes(me.role)) {
                router.replace('/dashboard');
            }
        } catch {
            router.replace('/dashboard');
        }
    }, [allowed, router]);
}


