import { Avatar, Box, IconButton, Link, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "@emotion/react";

export const HomePage = () => {
    const theme = useTheme();

    const icons = [ 
    { icon: <GitHubIcon />, link: 'https://github.com/GBalatti9' }, 
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/gast%C3%B3n-balatti-8b5b441ba/' }, 
    { icon: <TwitterIcon />, link: 'https://twitter.com/Gaston_Balatti'},
    { icon: <InstagramIcon />, link: 'https://www.instagram.com/gaston.balatti?igsh=Mjdpa3N0MDdrMHNn&utm_source=qr' }  
]

    return (
        <Box sx={{ 
                display: { xs: 'flex'}, 
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center' }, 
                alignItems: { xs: 'center' }, 
                height: '90vh' }}>
            <Avatar
                alt="Gaston Balatti"
                src="/GastonCvImage.jpg"
                sx={{ width: 200, height: 200, border: `3px solid ${ theme.palette.primary.main }` }} />
            <Box sx={{ ml: 2 }}>
                <Box>
                    <Typography variant="h2" sx={{ fontSize: { xs: '3rem', sm: '4rem'} }}> Gastón Balatti</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1, justifyContent: { xs: 'center' } }}>
                        <Typography variant="h4" color="primary">
                            <Typewriter words={['Full-stack', 'Front-end', 'Back-end']} cursor loop={5}/>
                        </Typography>
                        <Typography variant="h4">
                            Dev
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', mx: 'auto', mt: 1 }}>
                    {
                        icons.map(( icon, i ) => (
                            <Link 
                                key = { i } 
                                color = "inherit" 
                                href = { icon.link } 
                                target = "_blank" 
                                sx = {{ 
                                    '&:hover': 
                                    { color: theme.palette.primary.main } 
                                    }} >
                                { icon.icon }
                            </Link>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
