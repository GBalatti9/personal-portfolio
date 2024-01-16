
import { Box } from "@mui/material";
import { NavBar, ScrollToTopButton } from "./components";
import { AboutPage, HomePage } from "./pages";
import { ParticlesBackground } from "./particles/ParticlesBackground";


export const PorfolioApp = () => {

    return (
        <>
            <ParticlesBackground />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <ScrollToTopButton />
                <NavBar />
                <HomePage />
                <AboutPage />
            </Box>
        </>
    )
}
