import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";


export const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ width: { xs: '80%', md: '50%' }, mx: 'auto', mb: 4 }} id='contact'>
        <Typography variant='h3' sx={{ textAlign: 'center', textDecoration: 'underline' }}> { t('contactTitle') } </Typography>

    </Box>
    )
}
