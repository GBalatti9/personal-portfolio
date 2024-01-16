
import { Box } from "@mui/material";
import { NavBar } from "./components";
import { HomePage } from "./pages";


export const PorfolioApp = () => {

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <NavBar />
                <HomePage />
            </Box>
        </>
    )
}
