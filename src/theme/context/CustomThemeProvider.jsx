import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { themeCreator } from "../theme";


export const CustomThemeProvider = ({ mode, children }) => {

    const theme = themeCreator( mode );

    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}
