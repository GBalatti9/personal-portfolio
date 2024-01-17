import { Box, CardActions, Drawer, IconButton, List, ListItem, ListItemText, Link, ListItemButton } from "@mui/material"
import { ThemeToggleBtn } from "./ThemeToggleBtn"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from "react";
import { useTheme } from "@emotion/react";
import { LanguageToggleBtn } from "./LanguageToggleBtn";


export const NavBarMobile = ({ navItems }) => {

    const theme = useTheme();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };
    
    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };
    return (
        <>
            <ThemeToggleBtn />
            <LanguageToggleBtn />
                    <IconButton onClick={ handleDrawerOpen }>
                        <MenuIcon sx={{ fontSize: '2rem' }}/>
                    </IconButton>

                    <Drawer anchor="right" open={isDrawerOpen} sx={{ opacity: '0.95' }}>
                        <Box sx={{ width: '100vw', height: '100%', backgroundColor: theme.palette.primary.main }}>
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <IconButton onClick={handleDrawerClose} >
                                    <CloseIcon sx={{ fontSize: '3rem' }}/>
                                </IconButton>
                            </CardActions>
                            <List sx={{ display: 'flex', flexDirection: 'column', height: '70%', justifyContent: 'space-around' }}>
                                {navItems.map((item) => (
                                    <ListItem key={item} onClick={ handleDrawerClose } sx={{ justifyContent: 'center'  }}>
                                        <Link underline='none' color='inherit' sx={{ cursor: 'pointer' }} href={`#${item.toLowerCase()}`}>
                                                <ListItemText
                                                    primaryTypographyProps={{fontSize: '40px'}} 
                                                >{item}</ListItemText>
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
        </>
    )
}
