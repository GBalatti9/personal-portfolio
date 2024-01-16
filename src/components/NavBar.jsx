import { Box, Button, CardActionArea, CardActions, List} from '@mui/material';
import { NavBarMobile } from './NavBarMobile';
import { NavBarComputer } from './NavBarComputer';
import { ThemeToggleBtn } from './ThemeToggleBtn';

const navItems = ['About', 'Projects' , 'Contact'];

export const NavBar = () => {

    return (
        <Box color="primary">
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <NavBarComputer navItems={ navItems } />
            </Box>

            <Box sx={{ display: {xs: 'flex', sm: 'none' }, justifyContent: 'space-between', px: 1 }}>
                <NavBarMobile navItems={ navItems }/>
            </Box>
        </Box>
    )
}
