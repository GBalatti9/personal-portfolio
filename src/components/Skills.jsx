import React from 'react'
import Express from '/logos/icons8-express-js-32.png'
import { Box, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export const Skills = () => {

    const { t } = useTranslation();

    return (
        <>
        <Typography variant='h3' sx={{ textAlign: 'center', textDecoration: 'underline', mb: 2 }}> { t('skills') } </Typography>
            <Box sx={{ width: {xs: '90%', sm: '50%' }, mx:'auto' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', mb: 4 }}>
                <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: '4em', color: 'green' }} />
                <FontAwesomeIcon icon={faReact} style={{ fontSize: '4em', color: 'lightblue' }} />
                <FontAwesomeIcon icon={faDatabase} style={{ fontSize: '4em', color: 'lightblue' }} />
                <FontAwesomeIcon icon={faJs} style={{ fontSize: '4em', color: 'yellow' }} />
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', mb: 4 }}>
                <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '4em', color: 'darkorange' }} />
                <FontAwesomeIcon icon={faCss3} style={{ fontSize: '4em', color: 'blue' }} />
                <FontAwesomeIcon icon={faGitAlt} style={{ fontSize: '4em', color: 'orange' }} />
                <FontAwesomeIcon icon={faServer} style={{ fontSize: '4em' }} />
                </Box>
            </Box>
        </>
    )
}
