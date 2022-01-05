import { useState, useEffect } from 'react'

const useClientWith = () => {
    
    const [ currentWidth, setCurrentWidth ] = useState(0);

    useEffect(() => {
        const width = window.screen.width;

        setCurrentWidth(width)
    }, [])

    return currentWidth
}

export default useClientWith
