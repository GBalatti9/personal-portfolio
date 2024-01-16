import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"


export const ProjectsPage = () => {
    const { t } = useTranslation();
    return (
        <Box sx={{ width: { xs: '80%', md: '50%' }, mx: 'auto', mb: 4 }} id='projects'>
            <Typography variant='h3' sx={{ textAlign: 'center', textDecoration: 'underline' }}> { t('projectsTitle') } </Typography>

        </Box>

    )
}
