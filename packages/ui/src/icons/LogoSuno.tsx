import { Box } from '@chakra-ui/react';

export function LogoSuno({ size = 20 }: { size?: 16 | 20 | 24 }) {
    return (
        <Box as="span" display="inline-block" width={size} height={size} aria-label="Suno" title="Suno">
            <svg viewBox="0 0 24 24" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="#D42126" strokeWidth="3" fill="none" />
                <circle cx="12" cy="12" r="2" fill="#D42126" />
            </svg>
        </Box>
    );
}


