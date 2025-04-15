import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import uaTranslation from './locales/ua/translation.json';

i18n
  .use(initReactI18next) // Ініціалізація для React
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ua: {
        translation: uaTranslation
      }
    },
    lng: 'ua', // Початкова мова
    fallbackLng: 'ua', // Якщо немає перекладу для конкретної мови
    interpolation: {
      escapeValue: false // Не екранізуємо значення
    }
  });

export default i18n;
