"use client";
import { Text } from '@chakra-ui/react';

export function TrendMini({ value }: { value: number }) {
    const positive = value >= 0;
    const color = positive ? 'green.500' : 'red.500';
    const sign = positive ? '+' : '';
    return (
        <Text fontSize="xs" color={color}>
            {sign}{value.toFixed(1)}%
        </Text>
    );
}


