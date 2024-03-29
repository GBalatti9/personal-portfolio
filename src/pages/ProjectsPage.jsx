import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { ProjectsAvatar, ProjectsList } from "../components";


export const ProjectsPage = () => {
    const { t } = useTranslation();
    return (
        <Box sx={{ width: { xs: '100%', md: '70%', lg: '60%' }, mx: 'auto', mb: 4 }} id='projects'>
            <Typography variant='h3' sx={{ textAlign: 'center', textDecoration: 'underline', mb: 4 }}> { t('projectsTitle') } </Typography>
            <ProjectsList />
            <ProjectsAvatar />
        </Box>

    )
}
