import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import EmailIcon from '@mui/icons-material/Email';


export const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ width: { xs: '80%', md: '50%' }, mx: 'auto', mb: 4 }} id='contact'>
        <Typography variant='h3' sx={{ textAlign: 'center', textDecoration: 'underline' }}> { t('contactTitle') } </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}> Let's chat! <Typography variant="span"> <EmailIcon /> gas.balatti@gmail.com </Typography> </Typography>
        </Box>
    )
}
