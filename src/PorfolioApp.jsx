
import { Box } from "@mui/material";
import { NavBar } from "./components";
import { AboutPage, HomePage } from "./pages";


export const PorfolioApp = () => {

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <NavBar />
                <HomePage />
                <AboutPage />
            </Box>
        </>
    )
}
