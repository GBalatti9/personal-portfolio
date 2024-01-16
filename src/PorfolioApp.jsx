
import { Box } from "@mui/material";
import { NavBar, ScrollToTopButton } from "./components";
import { AboutPage, HomePage } from "./pages";


export const PorfolioApp = () => {

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <ScrollToTopButton />
                <NavBar />
                <HomePage />
                <AboutPage />
            </Box>
        </>
    )
}
