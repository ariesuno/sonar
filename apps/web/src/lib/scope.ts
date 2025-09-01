import type { Scope } from './types';

export function encodeScope(scope: Scope): string {
    return Buffer.from(JSON.stringify(scope), 'utf-8').toString('base64');
}

export function decodeScope(header: string | null | undefined): Scope | null {
    if (!header) return null;
    try {
        const json = Buffer.from(header, 'base64').toString('utf-8');
        return JSON.parse(json) as Scope;
    } catch {
        return null;
    }
}


