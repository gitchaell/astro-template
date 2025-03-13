import Index from '@/pages/index.astro'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'

test('Index page contains title', async () => {
	const container = await AstroContainer.create()
	const result = await container.renderToString(Index)
	expect(result).toContain('Astro Template')
})
