'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { createQueryClient } from '@/lib/query';
import { ChakraProvider } from '@chakra-ui/react';
import { sunoTheme } from '@sonar/ui';

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => createQueryClient());

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_SIM_MODE === 'true') {
            import('../mocks/browser').then(({ startMocks }) => startMocks());
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={sunoTheme}>
                {children}
            </ChakraProvider>
            {process.env.NODE_ENV === 'development' && (
                <ReactQueryDevtools initialIsOpen={false} />
            )}
        </QueryClientProvider>
    );
}


