import { useTheme } from "@emotion/react"
import { Box, Link, Typography } from "@mui/material"

const smallProjects = [
    { id: 1, title: 'Band Home Page', category: 'Front-end project', img: '/projects/TragoAmargo.png', link: 'https://trago-amargo.onrender.com/' },
    { id: 2, title: 'Ecommerce', category: 'Full-stack project', img: '/projects/Ecommerce.png', link: 'https://github.com/LCanasE/grupo_10_Eventicket' },
    { id: 3, title: 'Stocks', category: 'Back-end project', img: '/projects/Stocks.png', link: 'https://arg-stocks.onrender.com/' },
]

export const ProjectsAvatar = () => {

    const theme = useTheme();
    console.log(theme.palette.primary.main);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            {
                smallProjects.map(( project ) => (
                    <Link color="inherit" sx={{ textDecoration: 'none' }} href={ project.link } target="_blank">
                    <Box sx={{ backgroundColor: `${ theme.palette.primary.main === '#ff9800' ? 'rgba(0, 0, 0, 0.8)' : '#fffff' }`, p: 2, borderRadius: '5px', '&:hover': { boxShadow: `0px 0px 2px ${theme.palette.primary.main}`} }} >
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>{ project.title }</Typography>
                        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', color: theme.palette.primary.main }}>{ project.category }</Typography>
                        <Box sx={{ width: '200px' }}>
                            <img src={project.img} alt="" style={{ width: '100%', height: '100%' }} />
                        </Box>
                    </Box>
                    </Link>
                ))
            }
        </Box>
    )
}
