import { theme } from '@chakra-ui/core'

const customTheme = {
	...theme,
	fonts: {
		heading: '"Didact Gothic", sans-serif',
		body: '"Montserrat", system-ui, sans-serif',
		mono: 'Menlo, monospace',
	},
}

export default customTheme
