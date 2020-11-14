import React, { useEffect } from 'react'

const About = () => {
    
    useEffect(() => {
		document.title = 'Tentang Kami';
    }, [])
    
    return (
        <div>
            about page here
        </div>
    )
}

export default About
