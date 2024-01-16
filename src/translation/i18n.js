import i18next from 'i18next';
import global_en from './en/global.json';
import global_es from './es/global.json';

i18next.init({
    interpolation: { escapeValue: true },
    lng: 'en',
    resources: {
        en: {
            translation: global_en,
        },
        es: {
            translation: global_es,
        }
    }
})

export default i18next;
