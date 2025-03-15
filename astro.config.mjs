// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://amazing.app',
	integrations: [sitemap({
		i18n: {
			defaultLocale: 'en',
			locales: {
				en: 'en-US',
				es: 'es-ES',
				de: 'de-DE',
				ja: 'ja-JP',
				ko: 'ko-KR',
			},
		},
	})],

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
