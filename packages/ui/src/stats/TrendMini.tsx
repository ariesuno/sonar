import React from 'react';

export interface TrendMiniProps {
    value: number; // percentage -100..100
}

export function TrendMini({ value }: TrendMiniProps) {
    const positive = value >= 0;
    const color = positive ? '#16A34A' : '#DC2626';
    const sign = positive ? '+' : '';
    return (
        <span style={{ fontSize: 12, color }}>
            {sign}
            {value.toFixed(1)}%
        </span>
    );
}


