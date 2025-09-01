import React from 'react';

export interface KPIStatProps {
    label: string;
    value: string | number;
    helperText?: string;
}

export function KPIStat({ label, value, helperText }: KPIStatProps) {
    return (
        <div
            style={{
                background: '#fff',
                borderRadius: 8,
                border: '1px solid #E6E6E6',
                padding: 12,
            }}
        >
            <div style={{ fontSize: 12, color: '#737373' }}>{label}</div>
            <div style={{ fontSize: 20, color: '#D42126', fontWeight: 700 }}>{value}</div>
            {helperText && (
                <div style={{ fontSize: 12, color: '#9E9E9E' }}>{helperText}</div>
            )}
        </div>
    );
}


