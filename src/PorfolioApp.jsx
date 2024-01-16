import { useTheme } from "@emotion/react"
import { IconButton, Typography } from "@mui/material"
import { useContext } from "react";
import { ColorContext } from "./theme/context/ColorContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";


export const PorfolioApp = () => {

    const { toggleColorMode } = useContext( ColorContext );
    const theme = useTheme();

    return (
        <IconButton sx={{ ml: 1 }} onClick={ toggleColorMode } color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    )
}
