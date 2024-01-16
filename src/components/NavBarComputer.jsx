import { Box, Button, Link, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { ThemeToggleBtn } from "./ThemeToggleBtn"


export const NavBarComputer = ({ navItems }) => {

    const handleDownloadPdf = () => {
        const cv = '/Gaston_Balatti__CV.pdf';
        const link = document.createElement('a');
        link.href = cv;
        // process.env.PUBLIC_URL +
        link.download = 'Gaston_Balatti__CV.pdf';
        link.click();
        console.log('download');
    }

    return (
        <List sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex', width: '80%', justifyContent: 'space-around' }}>
                {
                    navItems.map(( item ) => (
                        <ListItem key={ item } disablePadding sx={{ width: 'fit-content' }}>
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
                </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" onClick={ handleDownloadPdf }>
                        Download CV
                    </Button>
                        <ThemeToggleBtn />
                    </Box>
        </List>
    )
}
