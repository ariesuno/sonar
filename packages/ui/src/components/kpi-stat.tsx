"use client";
import { Box, Text } from '@chakra-ui/react';

export function KPIStat({ label, value, helperText }: { label: string; value: string | number; helperText?: string }) {
    return (
        <Box bg="bg.card" border="1px solid" borderColor="border.color" borderRadius="md" boxShadow="card" p={4}>
            <Text fontSize="xs" color="gray.700">{label}</Text>
            <Text fontSize="2xl" fontWeight={700} color="primary.500">{value}</Text>
            {helperText && <Text fontSize="xs" color="gray.600">{helperText}</Text>}
        </Box>
    );
}


