import { useTheme } from "@emotion/react";
import { Box, IconButton, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { useTranslation } from "react-i18next";

export const ProjectListComponent = ({ title, link, description, category, frontEndDesign, backEndArchitecture, relationalDataBase, orm, googleSheets, img, frontEnd, backEnd }) => {
    console.log(googleSheets);
    const theme = useTheme();
    console.log(description);

    return (
        <Link href={ link } color='inherit' target='_blank' sx={{ textDecoration: 'none' }} >
            <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    backgroundColor: `${theme.palette.primary.main === '#ff9800' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(201, 197, 199, 0.8)'}`, 
                    borderRadius: '5px', 
                    mb: 2, p: 3, 
                    '&:hover': { boxShadow: `0px 0px 2px ${theme.palette.primary.main}` } }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4"> { title } </Typography>
                    <Typography variant="h6" color={theme.palette.primary.main}> { category } </Typography>
                </Box>

                <Box sx={{ mt: 2, display: { sm: 'flex' }, alignItems: 'center' }}>
                    <Box sx={{ width: '100%', pr: 2 }}>
                        <Box>
                            { description }
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <ListItem>
                                <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                <Typography variant="body1">{ frontEnd }: { frontEndDesign }</Typography>
                            </ListItem>
                            {
                                backEndArchitecture &&
                                <ListItem>
                                    <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                    <Typography variant="body1">{ backEnd }: { backEndArchitecture }</Typography>
                                </ListItem>
                            }
                            {
                                relationalDataBase &&
                                <ListItem>
                                    <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                    <Typography variant="body1">Relational Database: { relationalDataBase }</Typography>
                                </ListItem>
                            }
                            {
                                orm &&
                                <ListItem>
                                    <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                    <Typography variant="body1">ORM: { orm }</Typography>
                                </ListItem>
                            }
                            {
                                googleSheets !== 'projectsListComponent.1.googleSheets' && googleSheets !== 'projectsListComponent.3.googleSheets' &&
                                <ListItem>
                                    <CircleIcon sx={{ fontSize: 'small', mr: 2 }} />
                                    <Typography variant="body1">{ googleSheets }</Typography>
                                </ListItem>
                            }
                        </Box>
                    </Box>


                    <Box sx={{ width: {xs: '100%', sm: '750px'}, height: {xs: '100%', sm: '250px'}, overflow: 'hidden' }}>
                        <img src={ img } style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}
