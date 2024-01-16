import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <Box sx={{ width: { xs: '80%', md: '50%' }, mx: 'auto', mb: 4 }} id='about'>
            <Typography variant='h3' sx={{ textAlign: 'center', textDecoration: 'underline' }}> { t('aboutMe') } </Typography>
            <Typography variant='body1' sx={{ textAlign: { xs: 'center', sm: 'left'}, mt: 4 }}>
                { t('sayHi') } <Typography component='span' color='primary'>{ t('passionateProgrammer') } </Typography> 
                { t('philosophy') }<Typography component='span' color='primary'> { t('invitation') } </Typography>
            </Typography>
            <Typography variant='body1' sx={{ textAlign: { xs: 'center', sm: 'left'}, mt: 1 }}>
                { t('enjoy') }
                <Typography component='span' color='primary'>
                    { t('problems') } </Typography>
                    { t('challenges') }
                    <Typography component='span' color='primary'>{ t('positivity') }</Typography> {t('team')}
            </Typography>
            <Typography variant='body1' sx={{ textAlign: { xs: 'center', sm: 'left'}, mt: 1 }}>
                {t('eager')}<Typography component='span' color='primary'>{t('cool')}</Typography>
                {t('reachOut')}
            </Typography>

        </Box>
    )
}
