import { useTheme } from "@emotion/react"
import { Box, Link, Typography } from "@mui/material"
import { ProjectAvatarComponent } from "./ProjectAvatarComponent";
import { useTranslation } from "react-i18next";

const smallProjects = [
    { id: 1,  img: '/projects/TragoAmargo.png', link: 'https://trago-amargo.onrender.com/' },
    { id: 2,  img: '/projects/Ecommerce.png', link: 'https://github.com/LCanasE/grupo_10_Eventicket' },
    { id: 3,  img: '/projects/Stocks.png', link: 'https://arg-stocks.onrender.com/' },
    { id: 4,  img: '/projects/Jason.png', link: 'https://www.jasondimequesi.com.ar/' },
]

export const ProjectsAvatar = () => {

    const { t } = useTranslation();
    return (
        <Box sx={{ display: { sm: 'flex' }, justifyContent: 'space-around', }}>
            {
                smallProjects.map(( project ) => (
                    <ProjectAvatarComponent key={ project.id } 
                    title = { t(`smallProjectsList.${project.id}.title`) }
                    category = { t(`smallProjectsList.${project.id}.category`) }
                    { ...project } />
                ))
            }
        </Box>
    )
}
