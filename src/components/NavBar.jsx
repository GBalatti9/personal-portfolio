import { Box,List} from '@mui/material';
import { NavBarMobile } from './NavBarMobile';
import { NavBarComputer } from './NavBarComputer';

const navItems = ['Home', 'About', 'Contact'];

export const NavBar = () => {

    return (
        <Box color="primary">
            <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <NavBarComputer navItems={ navItems } />
            </List>

            <Box sx={{ display: {xs: 'flex', sm: 'none' }, justifyContent: 'space-between', px: 1 }}>
                <NavBarMobile navItems={ navItems }/>
            </Box>
        </Box>
    )
}
