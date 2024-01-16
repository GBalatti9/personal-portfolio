import { useState } from "react";


export const useToggleColorMode = () => {

    const [ mode, setMode ] = useState('dark');

    const toggleColorMode = () => {
        setMode(( prevMode ) => ( prevMode === 'dark' ? 'light' : 'dark' ));
    }

    return {
        mode,
        toggleColorMode,
    }
}
