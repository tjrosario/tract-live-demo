import {
    theme 
} from '@chakra-ui/core';

const customTheme = {
    ...theme,
    fonts: {
        body: '"Montserrat", system-ui, sans-serif',
        heading: '"Didact Gothic", sans-serif',
        mono: 'Menlo, monospace'
    }
};

export default customTheme;
