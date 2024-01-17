import { List } from "@mui/material";
import { ProjectListComponent } from "./ProjectListComponent";
import { useTranslation } from "react-i18next";


const projects = [
    {
        id: '1',
        frontEndDesign: 'React',
        backEndArchitecture: 'Node',
        relationalDataBase: 'MySQL',
        orm: 'Sequelize',
        link: 'https://argentina-world-cup.onrender.com/players',
        img: '/projects/ArgentinaProject.png',
    },
    {
        id: '2',
        frontEndDesign: 'React',
        backEndArchitecture: 'Node',
        link: 'https://landing-page-ek-front.onrender.com/',
        img: '/projects/LandingEK.png',
    },
    {
        id: '3',
        frontEndDesign: 'EJS',
        backEndArchitecture: 'Node',
        relationalDataBase: 'MySQL',
        orm: 'Sequelize',
        link: 'https://shorturl-r33a.onrender.com/',
        img: '/projects/ShortURL.png'
    },
]

export const ProjectsList = () => {
    const { t } = useTranslation();
    const translation = t('projectsListComponent.1.title')
    console.log({translation});

    return (
        <List>
            {
                projects.map((project) => (
                    <ProjectListComponent 
                        key = { project.id }
                        title = { t(`projectsListComponent.${project.id}.title`) } 
                        category = { t(`projectsListComponent.${project.id}.category`) }
                        description = { t(`projectsListComponent.${project.id}.description`) }
                        frontEnd = { t(`projectsListComponent.${project.id}.frontEnd`) }
                        backEnd = { t(`projectsListComponent.${project.id}.backEnd`) }
                        googleSheets = { t(`projectsListComponent.${project.id}.googleSheets`) }
                        { ...project }
                        
                        />
                ))
            }
        </List>
    )
}
