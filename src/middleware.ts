import { defineMiddleware } from 'astro:middleware'
import { detectDevice } from '@/lib/device'
import { parseLocale, parseTheme } from '@/lib/preferences'

export const onRequest = defineMiddleware((context, next) => {
  const userAgent = context.request.headers.get('user-agent') ?? ''
  context.locals.device = detectDevice(userAgent)
  const requestLocale = context.url.searchParams.get('lang')
  const cookieLocale = context.cookies.get('lang')?.value
  const cookieTheme = context.cookies.get('theme')?.value

  const locale = parseLocale(requestLocale ?? cookieLocale)
  const theme = parseTheme(cookieTheme)

  context.locals.locale = locale
  context.locals.theme = theme

  if (requestLocale && requestLocale !== cookieLocale) {
    context.cookies.set('lang', locale, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365
    })
  }

  return next()
})
