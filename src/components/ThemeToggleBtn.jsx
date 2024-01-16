import { Brightness4, Brightness7 } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useContext } from "react";
import { ColorContext } from "../theme/context/ColorContext";
import { useTheme } from "@emotion/react";


export const ThemeToggleBtn = () => {
    
    const { toggleColorMode } = useContext( ColorContext );
    const theme = useTheme();

    return (
        <>
        <IconButton sx={{ p: 2, mr: 2 }} onClick={ toggleColorMode } color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        </>
    )
}
