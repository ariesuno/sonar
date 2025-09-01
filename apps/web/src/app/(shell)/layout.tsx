"use client";
import type { ReactNode } from 'react';
import { Box, Flex, Link as CLink } from '@chakra-ui/react';
import { LogoSuno } from '@sonar/ui';

export default function ShellLayout({ children }: { children: ReactNode }) {
    return (
        <Flex minH="100vh">
            <Box as="aside" w="200px" bg="bg.card" borderRight="1px solid" borderColor="border.color">
                <Flex align="center" gap={2} px={3} py={3}>
                    <LogoSuno size={20} />
                    <Box as="span" fontWeight={700} color="gray.800">Suno</Box>
                </Flex>
                <Box as="nav" px={2} display="grid" gap={1}>
                    <CLink href="/dashboard" fontSize="md">Dashboard</CLink>
                    <CLink href="#" color="gray.700">Clientes</CLink>
                    <CLink href="#" color="gray.700">Renovações</CLink>
                </Box>
            </Box>
            <Box as="main" flex={1}>
                <Box as="header" px={3} py={3} borderBottom="1px solid" borderColor="border.color" bg="bg.card">
                    <Box fontSize="xs" color="gray.700">Home / Dashboard</Box>
                </Box>
                <Box px={3} py={3}>{children}</Box>
            </Box>
        </Flex>
    );
}


