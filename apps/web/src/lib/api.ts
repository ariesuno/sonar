import axios, { AxiosHeaders } from 'axios';
import type { Scope } from './types';
import { encodeScope } from './scope';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(config => {
    const scopeJson = typeof window !== 'undefined' ? window.localStorage.getItem('scope') : null;
    if (scopeJson) {
        try {
            const scope = JSON.parse(scopeJson) as Scope;
            const headers = new AxiosHeaders(config.headers);
            headers.set('x-scope', encodeScope(scope));
            config.headers = headers;
        } catch { }
    }
    return config;
});


