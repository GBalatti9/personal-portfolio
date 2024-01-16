import { Avatar, Box, IconButton, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typewriter } from "react-simple-typewriter";

export const HomePage = () => {

    

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Avatar
                alt="Gaston Balatti"
                src="/GastonCvImage.jpg"
                sx={{ width: 200, height: 200 }} />
            <Box>
                <Box sx={{ ml: 2 }}>
                    <Typography variant="h3">Gaston Balatti</Typography>
                    <Typography variant="h5" color='primary'> 
                            <Typewriter words={['Full-stack', 'Front-end', 'Back-end']} cursor loop={5} />
                        <span style={{ color: 'white' }}>
                            Dev
                        </span>
                        </Typography>
                </Box>
                <Box>
                    <IconButton>
                        <GitHubIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}
