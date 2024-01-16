import { Avatar, Box, IconButton, Link, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typewriter } from "react-simple-typewriter";

export const HomePage = () => {

    const icons = [ 
    { icon: <GitHubIcon />, link: 'https://github.com/GBalatti9' }, 
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/gast%C3%B3n-balatti-8b5b441ba/' }, 
    { icon: <TwitterIcon />, link: 'https://twitter.com/Gaston_Balatti'},
    { icon: <InstagramIcon />, link: 'https://www.instagram.com/gaston.balatti?igsh=Mjdpa3N0MDdrMHNn&utm_source=qr' }  
]

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Avatar
                alt="Gaston Balatti"
                src="/GastonCvImage.jpg"
                sx={{ width: 200, height: 200 }} />
            <Box sx={{ ml: 2 }}>
                <Box>
                    <Typography variant="h2"> Gaston Balatti</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
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
                            <Link key={ i } color="inherit" href={ icon.link } target="_blank" sx={{ '&:hover': { color: 'orange' } }} >
                                { icon.icon }
                            </Link>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
