import { Box, Typography } from '@mui/material'
import React from 'react'

export const AboutPage = () => {
    return (
        <Box sx={{ width: { xs: '80%', md: '50%' }, mx: 'auto', mb: 4 }} id='about'>
            <Typography variant='h3' sx={{ textAlign: 'center', textDecoration: 'underline' }}> About Me </Typography>
            <Typography variant='body1' sx={{ textAlign: { xs: 'center', sm: 'left'}, mt: 4 }}>
                Hi there! I'm a <Typography component='span' color='primary'>passionate and dedicated programmer. </Typography> My journey in the world of coding is characterized by a simple yet effective philosophy: with every new technology or concept I acquire, I embark on a creative journey to build meaningful projects. You can explore some of my endeavors on my GitHub profile;<Typography component='span' color='primary'> I invite you to take a look. </Typography>
            </Typography>
            <Typography variant='body1' sx={{ textAlign: { xs: 'center', sm: 'left'}, mt: 1 }}>
                I find joy in collaborating with multidisciplinary teams and learning from experienced individuals. <Typography component='span' color='primary'>Problem-solving is my forte, </Typography>and I approach challenges with curiosity, proactivity, and responsibility. Beyond my technical skills, I bring a <Typography component='span' color='primary'>positive and collaborative spirit</Typography> to any team or project.
            </Typography>
            <Typography variant='body1' sx={{ textAlign: { xs: 'center', sm: 'left'}, mt: 1 }}>
                Eager to continue growing and learning, I'm always up for new opportunities and challenges. Let's not just code; <Typography component='span' color='primary'> let's build cool things together! </Typography>
                Feel free to reach out, and let's create something amazing.
            </Typography>

        </Box>
    )
}
