import { register, init } from 'svelte-i18n'

register('en', () => import('./localizations/en.json'))
register('de', () => import('./localizations/de.json'))

init({
  fallbackLocale: 'en',
  initialLocale: 'de',
})
