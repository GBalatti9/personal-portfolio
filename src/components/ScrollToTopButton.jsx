import { KeyboardArrowUp } from "@mui/icons-material";
import { Button } from "@mui/material"
import { useEffect, useState } from "react"


export const ScrollToTopButton = () => {

    const [ isVisible, setIsVisible ] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 200); 
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <Button
            color="primary"
            variant="contained"
            startIcon={<KeyboardArrowUp />}
            onClick={ scrollToTop }
            sx={{ display: isVisible ? 'flex' : 'none', width: 'fit-content', position: 'fixed', bottom: '50px', right: '50px', zIndex: 10 }}>
            Scroll To Top
        </Button>
    )
}
