import { ColorContext } from './ColorContext'
import { useToggleColorMode } from '../hooks/useToggleColorMode';
import { CustomThemeProvider } from './CustomThemeProvider';

export const ColorProvider = ({ children }) => {

    const { mode, toggleColorMode } = useToggleColorMode();

    return (
        <ColorContext.Provider value={{ mode, toggleColorMode }}>
            <CustomThemeProvider mode={ mode } >
                { children }
            </CustomThemeProvider>
        </ColorContext.Provider>
    )
}
