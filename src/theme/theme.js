import { createTheme } from "@mui/material"

export const themeCreator = ( mode ) => {
    return createTheme({
        palette: {
            mode,
        },
    })}