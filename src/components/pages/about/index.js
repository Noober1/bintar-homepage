import { Container, Grid } from '@material-ui/core';
import React, { useEffect } from 'react'

const About = () => {
    
    useEffect(() => {
        document.title = 'Tentang Kami';
        document.querySelector('#subNavbar').scrollIntoView({block: 'center' })
    }, [])
    
    return (
        <Grid>
            <Grid item xs={12}>
                <Container>
                    test
                </Container>
            </Grid>
        </Grid>
    )
}

export default About
