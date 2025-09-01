"use client";
import { Flex, Heading, Text, FlexProps } from '@chakra-ui/react';

export function SectionHeader({ title, subtitle, actions, ...rest }: FlexProps & { title: string; subtitle?: string; actions?: React.ReactNode }) {
    return (
        <Flex align="center" justify="space-between" gap={2} mb={3} {...rest}>
            <div>
                <Heading as="h2" size="sm" color="gray.800">{title}</Heading>
                {subtitle && <Text fontSize="xs" color="gray.700">{subtitle}</Text>}
            </div>
            {actions}
        </Flex>
    );
}


