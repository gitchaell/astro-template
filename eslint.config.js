import globals from 'globals'
import jslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import astrolint from 'eslint-plugin-astro'
import prettierlint from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.astro/**'],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	jslint.configs.recommended,
	...tseslint.configs.recommended,
	...astrolint.configs.recommended,
	prettierlint,
	{
		rules: {
			'@typescript-eslint/triple-slash-reference': 'off',
			'no-undef': 'error',
		},
	},
]
