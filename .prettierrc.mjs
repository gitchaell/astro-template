/** @type {import("prettier").Config} */

const config = {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	arrowParens: 'always',
	bracketSameLine: true,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	experimentalTernaries: true,
	jsxSingleQuote: true,
	printWidth: 100,
	proseWrap: 'always',
	quoteProps: 'consistent',
	semi: false,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
}

export default config
