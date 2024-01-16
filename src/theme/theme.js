import { createTheme } from "@mui/material";
import { teal, orange, grey } from "@mui/material/colors";

export const themeCreator = ( mode ) => {
    return createTheme({
        palette: {
            mode,
            ...( mode === 'light'
                ? {
                    primary: teal,
                    secondary: orange,
                    text: {
                        primary: grey[900],
                        secondary: grey[800],
                    },
                }
                : {
                    primary: orange,
                    secondary: teal,
                    background: {
                        default: '#121212', 
                        paper: '#1E1E1E', 
                    },
                    text: {
                        primary: '#fff', 
                        secondary: grey[500],
                    },
                }),
        },
    });
};
