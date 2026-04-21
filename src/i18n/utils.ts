import es from './es.json';
import en from './en.json';

export const translations = { es, en };

export function getLangFromUrl(url: URL): keyof typeof translations {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return 'es';
}

export function useTranslations(lang: keyof typeof translations) {
  return translations[lang];
}