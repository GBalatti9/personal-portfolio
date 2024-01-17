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
        img: '/projects/ArgentinaProject.png',
    },
    {
        id: '2',
        title: 'Real State Home Page',
        category: 'Front-end project',
        description: 'This is a landing page for a real estate agency created with React and Node. Its main goal is to capture leads, and both the frontend and backend are deployed on onrender.',
        frontEndDesign: 'React',
        backEndArchitecture: 'Node',
        googleSheets: 'The project uses the Google API to store lead information in a Google Sheets document',
        link: 'https://github.com/GBalatti9/ek-landing-page',
        img: '/projects/LandingEK.png',
    },
    {
        id: '3',
        title: 'URL Shortener',
        category: 'Backend project',
        description: 'This is a project that leverages Node.js, Express, Sequelize, and MySQL. Users can input a long URL through a form and receive a "newUrl" in return, serving as the shortened link. It also integrates Express Validator, follows the MVC pattern, and utilizes shortId and bcrypt libraries.',
        frontEndDesign: 'EJS',
        backEndArchitecture: 'Node',
        relationalDataBase: 'MySQL',
        orm: 'Sequelize',
        link: 'https://github.com/GBalatti9/short_url_project?tab=readme-ov-file',
        img: '/projects/ShortURL.png'
    },
]

export const ProjectsList = () => {

    const theme = useTheme();

    return (
        <List>
            {
                projects.map((project) => (
                    <Link href={ project.link } color='inherit' target='_blank' sx={{ textDecoration: 'none'}} key={project.id}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: `${ theme.palette.primary.main === '#ff9800' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(201, 197, 199, 0.8)' }`, borderRadius: '5px', mb: 2, p: 3, '&:hover': { boxShadow: `0px 0px 2px ${theme.palette.primary.main}`}  }}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h4"> {project.title} </Typography>
                                <Typography variant="h6" color={theme.palette.primary.main}> {project.category} </Typography>
                            </Box>

                            <Box sx={{ mt: 2, display: {sm: 'flex'} }}>
                                <Box sx={{ width: '100%', pr: 2 }}>
                                    <Box>
                                    {project.description}
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <ListItem>
                                            <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                            <Typography variant="body1">Front-end design: {project.frontEndDesign}</Typography>
                                        </ListItem>
                                        {
                                            project.backEndArchitecture && 
                                                <ListItem>
                                                    <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                                    <Typography variant="body1">Backend-end architecture: {project.backEndArchitecture}</Typography>
                                                </ListItem>
                                        }
                                        {
                                            project.relationalDataBase && 
                                                <ListItem>
                                                    <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                                    <Typography variant="body1">Relational Database: {project.relationalDataBase}</Typography>
                                                </ListItem>
                                        }
                                        {
                                            project.orm && 
                                                <ListItem>
                                                    <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                                    <Typography variant="body1">ORM: {project.orm}</Typography>
                                                </ListItem>
                                        }
                                        {
                                            project.googleSheets && 
                                                <ListItem>
                                                    <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                                    <Typography variant="body1">{project.googleSheets}</Typography>
                                                </ListItem>
                                        }
                                    </Box>
                                </Box>


                                <Box sx={{ width: '100%', height: '210px' }}>
                                    <img src={ project.img } style={{ width: '100%', height: '100%' }} />
                                </Box>
                            </Box>
                        </Box>
                    </Link>
                ))
            }

        </List>
    )
}
