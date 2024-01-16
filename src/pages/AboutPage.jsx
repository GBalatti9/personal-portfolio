import { Box, Typography } from '@mui/material'
import React from 'react'

export const AboutPage = () => {
    return (
        <Box sx={{ width: '50%', mx: 'auto', mb: 4 }}>
            <Typography variant='h3' sx={{ textAlign: 'center', textDecoration: 'underline' }}> About Me </Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', mt: 4 }}>
                Hi there! I'm a passionate and dedicated programmer. My journey in the world of coding is characterized by a simple yet effective philosophy: with every new technology or concept I acquire, I embark on a creative journey to build meaningful projects. You can explore some of my endeavors on my GitHub profile; I invite you to take a look.
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', mt: 1 }}>
                I find joy in collaborating with multidisciplinary teams and learning from experienced individuals. Problem-solving is my forte, and I approach challenges with curiosity, proactivity, and responsibility. Beyond my technical skills, I bring a positive and collaborative spirit to any team or project.
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'center', mt: 1 }}>
                Eager to continue growing and learning, I'm always up for new opportunities and challenges. Let's not just code; let's build cool things together! Feel free to reach out, and let's create something amazing.
            </Typography>

        </Box>
    )
}
