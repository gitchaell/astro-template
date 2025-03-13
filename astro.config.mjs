// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		locales: ['en', 'es', 'de', 'ja', 'ko'],
		defaultLocale: 'en',
		fallback: {
			es: 'en',
			de: 'en',
			ja: 'en',
			ko: 'en',
		},
		routing: {
			fallbackType: 'rewrite',
		},
	},
})
