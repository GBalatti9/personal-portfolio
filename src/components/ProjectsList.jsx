import { List } from "@mui/material";
import { ProjectListComponent } from "./ProjectListComponent";


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

    return (
        <List>
            {
                projects.map((project) => (
                    <ProjectListComponent key={ project.id }  { ...project }/>
                ))
            }

        </List>
    )
}
