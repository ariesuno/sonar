"use client";
import { Box, BoxProps } from '@chakra-ui/react';

export function Card(props: BoxProps & { title?: string }) {
    const { title, children, ...rest } = props;
    return (
        <Box bg="bg.card" border="1px solid" borderColor="border.color" borderRadius="md" boxShadow="card" p={4} {...rest}>
            {title && (
                <Box mb={3} fontSize="sm" fontWeight={600} color="gray.800">
                    {title}
                </Box>
            )}
            {children}
        </Box>
    );
}


