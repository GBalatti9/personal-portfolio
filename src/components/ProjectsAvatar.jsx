import { useTheme } from "@emotion/react"
import { Box, Link, Typography } from "@mui/material"
import { ProjectAvatarComponent } from "./ProjectAvatarComponent";

const smallProjects = [
    { id: 1, title: 'Band Home Page', category: 'Front-end project', img: '/projects/TragoAmargo.png', link: 'https://trago-amargo.onrender.com/' },
    { id: 2, title: 'Ecommerce', category: 'Full-stack project', img: '/projects/Ecommerce.png', link: 'https://github.com/LCanasE/grupo_10_Eventicket' },
    { id: 3, title: 'Stocks', category: 'Back-end project', img: '/projects/Stocks.png', link: 'https://arg-stocks.onrender.com/' },
]

export const ProjectsAvatar = () => {

    return (
        <Box sx={{ display: { sm: 'flex' }, justifyContent: 'space-around', }}>
            {
                smallProjects.map(( project ) => (
                    <ProjectAvatarComponent key={ project.id } { ...project } />
                ))
            }
        </Box>
    )
}
