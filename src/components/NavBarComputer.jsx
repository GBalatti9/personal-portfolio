import { Link, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { ThemeToggleBtn } from "./ThemeToggleBtn"


export const NavBarComputer = ({ navItems }) => {
    return (
        <>
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
        </>
    )
}
