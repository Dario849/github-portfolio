import type { APIRoute } from 'astro'
import { renderToBuffer } from '@react-pdf/renderer'
import { getPortfolioContent } from '@/features/portfolio/content'
import { parseLocale, parseTheme } from '@/lib/preferences'
import { createPortfolioPdfDocument } from '@/features/portfolio/pdf/PortfolioPdfDocument'

export const prerender = false

export const GET: APIRoute = async ({ url, locals }) => {
  const locale = parseLocale(url.searchParams.get('lang') ?? locals.locale)
  const theme = parseTheme(url.searchParams.get('theme') ?? locals.theme)
  const copy = getPortfolioContent(locale)
  const buffer = await renderToBuffer(createPortfolioPdfDocument(copy, locale, theme))

  return new Response(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="portfolio-${locale}.pdf"`,
      'Cache-Control': 'no-store'
    }
  })
}
