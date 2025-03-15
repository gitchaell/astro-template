// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro'
import astrobook from 'astrobook'

// https://astro.build/config
export default defineConfig({
	site: 'https://amazing.app',
	integrations: [
		sitemap({
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
		}),
		AstroPWA({
			mode: 'development',
			base: '/',
			scope: '/',
			includeAssets: ['favicon.svg'],
			registerType: 'autoUpdate',
			manifest: {
				name: 'Astro Template',
				short_name: 'Astro Template',
				theme_color: '#000000',
			},
			pwaAssets: {
				config: true,
			},
			workbox: {
				navigateFallback: '/404',
				globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
			},
			devOptions: {
				enabled: false,
				navigateFallbackAllowlist: [/^\//],
			},
			experimental: {
				directoryAndTrailingSlashHandler: true,
			}
		}),
		astrobook({
			subpath: 'stories',
			directory: 'src/components',
			head: 'src/components/Head.astro',
			title: 'Astrobook'
		})
	],

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
