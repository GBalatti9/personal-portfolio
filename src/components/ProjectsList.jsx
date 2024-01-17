import { useTheme } from "@emotion/react";
import { Box, IconButton, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';


const projects = [
    {
        id: '1',
        title: 'Argentina World Cup Champion 2022',
        category: 'Full-stack project',
        description: 'This is a web application that shows detailed information about the players and staff of the Argentine Soccer Team. It combines a nice front-end design and a robust backend login and registration system with a combination of cookies and localStorage to give the user a better experience.',
        frontEndDesign: 'React',
        backEndArchitecture: 'Node',
        relationalDataBase: 'MySQL',
        orm: 'Sequelize',
        link: 'https://github.com/GBalatti9/argentina-world-cup',
    },
    {
        id: '2',
        title: 'Argentina World Cup Champion 2022',
        category: 'Front-end project',
        description: 'This is a web application that shows detailed information about the players and staff of the Argentine Soccer Team. It combines a nice front-end design and a robust backend login and registration system with a combination of cookies and localStorage to give the user a better experience.',
        frontEndDesign: 'React',
        backEndArchitecture: 'Node',
        relationalDataBase: 'MySQL',
        orm: 'Sequelize',
        link: 'https://github.com/GBalatti9/argentina-world-cup',
    },
    {
        id: '3',
        title: 'Argentina World Cup Champion 2022',
        category: 'Backend project',
        description: 'This is a web application that shows detailed information about the players and staff of the Argentine Soccer Team. It combines a nice front-end design and a robust backend login and registration system with a combination of cookies and localStorage to give the user a better experience.',
        frontEndDesign: 'React',
        backEndArchitecture: 'Node',
        relationalDataBase: 'MySQL',
        orm: 'Sequelize',
        link: 'https://github.com/GBalatti9/argentina-world-cup',
    },
]

export const ProjectsList = () => {

    const theme = useTheme();

    return (
        <List>
            {
                projects.map((project) => (
                    <Link href={ project.link } color='inherit' target='_blank' sx={{ textDecoration: 'none' }}>
                    <ListItem sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '5px', mb: 2, p: 3, '&:hover': { boxShadow: `0px 0px 2px ${theme.palette.primary.main}` } }} key={project.id}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ mx: 'auto' }}>
                                <Typography variant="h4"> {project.title} </Typography>
                                <Typography variant="h6" color={theme.palette.primary.main}> {project.category} </Typography>
                            </Box>

                            <Box sx={{ mt: 2, display: 'flex' }}>
                                <Box sx={{ width: '100%', pl: 1 }}>
                                    {project.description}
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <ListItem>
                                            <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                            <Typography variant="body1">Front-end design: {project.frontEndDesign}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                            <Typography variant="body1">Backend-end architecture: {project.backEndArchitecture}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                            <Typography variant="body1">Relational Database: {project.relationalDataBase}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                            <Typography variant="body1">ORM: {project.orm}</Typography>
                                        </ListItem>
                                    </Box>
                                </Box>


                                <Box sx={{ width: '100%' }}>
                                    <img src="/projects/ArgentinaProject.png" style={{ width: '100%', height: '70%' }} />
                                </Box>
                            </Box>
                        </Box>
                    </ListItem>
                    </Link>
                ))
            }

        </List>
    )
}
