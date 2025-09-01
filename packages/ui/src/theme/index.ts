import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { colors, radii, shadows, space, fonts, fontSizes, motion } from './tokens';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

export const sunoTheme = extendTheme({
    config,
    fonts,
    fontSizes,
    colors,
    radii,
    shadows,
    space,
    styles: {
        global: {
            'html, body': {
                bg: '#F9F9F9',
                color: '#4B4B4B',
                fontSize: '14px',
            },
            '*:focus-visible': {
                outline: '2px solid #EBD6D7',
                outlineOffset: '1px',
            },
        },
    },
    semanticTokens: {
        colors: {
            'text.primary': '#4B4B4B',
            'bg.canvas': '#F9F9F9',
            'bg.card': '#FFFFFF',
            'border.color': '#E8E8E8',
            'primary.500': '#D42126',
            'primary.600': '#B81D21',
            'primary.700': '#98191C',
        },
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: '8px',
                transition: `all ${motion.durationBase} ${motion.easing}`,
            },
            sizes: {
                sm: { h: '28px', px: '8px' },
                md: { h: '36px', px: '12px' },
                lg: { h: '40px', px: '14px' },
            },
            variants: {
                solid: {
                    bg: 'primary.500',
                    color: 'white',
                    _hover: { bg: 'primary.600' },
                    _active: { bg: 'primary.700' },
                },
                outline: {
                    border: '1px solid',
                    borderColor: 'border.color',
                    color: 'text.primary',
                    bg: 'white',
                    _hover: { bg: 'blackAlpha.50' },
                },
                ghost: {
                    color: 'text.primary',
                    _hover: { bg: 'blackAlpha.50' },
                },
            },
            defaultProps: { size: 'md', variant: 'solid' },
        },
        Link: {
            baseStyle: {
                color: 'primary.500',
                textDecoration: 'none',
                transition: `color ${motion.durationFast} ${motion.easing}`,
                _hover: { textDecoration: 'underline' },
            },
        },
        Table: {
            defaultProps: { size: 'sm' },
            baseStyle: {
                th: { fontWeight: 600, bg: 'white' },
                tr: { _hover: { bg: 'blackAlpha.50' } },
                td: { borderColor: 'gray.300' },
            },
        },
        Tabs: {
            variants: {
                enclosed: {
                    tab: {
                        _selected: { bg: 'white', borderColor: 'border.color' },
                        transition: `all ${motion.durationBase} ${motion.easing}`,
                    },
                },
            },
        },
        Tooltip: {
            baseStyle: { px: '8px', py: '6px', fontSize: '12px' },
        },
        Modal: {
            baseStyle: {
                dialog: {
                    animation: 'fadeIn 140ms ease-out',
                    transform: 'scale(1) translateZ(0)',
                },
            },
        },
        Skeleton: {
            baseStyle: {
                startColor: 'blackAlpha.50',
                endColor: 'blackAlpha.100',
            },
        },
        Input: {
            sizes: { md: { field: { h: '36px' } } },
            variants: {
                outline: {
                    field: {
                        borderColor: 'border.color',
                        _focusVisible: {
                            boxShadow: '0 0 0 2px #EBD6D7',
                            borderColor: 'primary.500',
                        },
                    },
                },
            },
        },
        FormLabel: { baseStyle: { fontSize: '13px' } },
    },
});

export type SunoTheme = typeof sunoTheme;


