import { AppBar, Box, Link, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { ThemeToggleBtn } from './ThemeToggleBtn';

const navItems = ['Home', 'About', 'Contact'];

export const NavBar = () => {
    return (
        <Box color="primary" sx={{ boxShadow: '1px 1px 1px black' }}>
            <List sx={{ display: 'flex' }}>
                    {
                    navItems.map(( item ) => (
                        <ListItem key={ item } disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Link underline='none' color='inherit' sx={{ cursor: 'pointer' }}>
                                <ListItemText 
                                    primary = { item }/>
                            </Link>
                        </ListItem>        
                        ))
                    }
                <ThemeToggleBtn />
                </List>
        </Box>
    )
}
