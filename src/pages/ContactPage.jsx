import { Box, Link, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import EmailIcon from '@mui/icons-material/Email';


export const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ width: { xs: '80%', md: '50%' }, mx: 'auto', mb: 4 }} id='contact'>
        <Typography variant='h3' sx={{ textAlign: 'center', textDecoration: 'underline', mb: 2 }}> { t('contactTitle') } </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}> Let's chat! <br />
        <Typography variant="span" sx={{ mb: 4 }}> 
            <Link href='mailto:gas.balatti@gmail.com' sx={{ textDecoration: 'none' }}>
            gas.balatti@gmail.com 
            </Link>
            </Typography> </Typography>
        </Box>
    )
}
