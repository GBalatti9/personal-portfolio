import { Button } from "@mui/material"
import { useTranslation } from "react-i18next";


export const LanguageToggleBtn = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = ( actualLanguage ) => {
        const newLanguage = actualLanguage === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    }

    return (
        <>
        <Button onClick={ () => toggleLanguage(i18n.language) }>{ i18n.language === 'en' ? 'ES' : 'EN' }</Button>
        </>
    )
}
