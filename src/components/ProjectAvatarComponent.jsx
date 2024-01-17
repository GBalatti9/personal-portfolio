import { useTheme } from "@emotion/react";
import { Box, Link, Typography } from "@mui/material"


export const ProjectAvatarComponent = ({ link, category, img, title }) => {
    const theme = useTheme();
    return (
        <Link color="inherit" sx={{ textDecoration: 'none' }} href={ link } target="_blank">
                <Box sx={{ backgroundColor: `${ theme.palette.primary.main === '#ff9800' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(201, 197, 199, 0.8)' }`, p: 2, borderRadius: '5px', '&:hover': { boxShadow: `0px 0px 2px ${theme.palette.primary.main}`}, mb: 2, width: { xs: '80%', sm: '100%' }, mx: 'auto' }} >
                <Typography variant="h5" sx={{ textAlign: 'center' }}>{ title }</Typography>
                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', color: theme.palette.primary.main }}>{ category }</Typography>
                <Box sx={{ width: '200px', mx: 'auto' }}>
                    <img src={ img } alt="" style={{ width: '100%', height: '100%' }} />
                </Box>
            </Box>
        </Link>
    )
}
