import { AppBar, Box, CardActions, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { ThemeToggleBtn } from './ThemeToggleBtn';

const navItems = ['Home', 'About', 'Contact'];

export const NavBar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };
    
    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <Box color="primary">
            <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    {
                    navItems.map(( item ) => (
                        <ListItem key={ item } disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Link underline='none' color='inherit' sx={{ cursor: 'pointer' }}>
                                <ListItemButton sx={{ borderRadius: '5px' }}>
                                    <ListItemText
                                        primaryTypographyProps={{fontSize: '20px'}} 
                                        >
                                        { item }
                                    </ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>        
                        ))
                    }
                <ThemeToggleBtn />
                </List>

                <Box sx={{ display: {xs: 'flex', sm: 'none' }, justifyContent: 'space-between', px: 1 }}>
                    <ThemeToggleBtn />
                    <IconButton onClick={ handleDrawerOpen }>
                        <MenuIcon sx={{ fontSize: '2rem' }}/>
                    </IconButton>

                    <Drawer anchor="right" open={isDrawerOpen} sx={{ opacity: '0.9' }}>
                        <Box sx={{ width: '100vw', height: '100%', backgroundColor: 'black' }}>
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <IconButton onClick={handleDrawerClose} >
                                    <CloseIcon sx={{ fontSize: '3rem' }}/>
                                </IconButton>
                            </CardActions>
                            <List sx={{ display: 'flex', flexDirection: 'column', height: '70%', justifyContent: 'space-around' }}>
                                {navItems.map((item) => (
                                    <ListItem key={item} onClick={ handleDrawerClose } sx={{ textAlign: 'center' }}>
                                        <ListItemText
                                        primaryTypographyProps={{fontSize: '40px'}} 
                                        >{item}</ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Box>
        </Box>
    )
}
