import React from 'react'
import { Grid, Typography, Container, useTheme } from '@material-ui/core'
import CustomDivider from '../../nano/customDivider'
import mainStyles from './styles'

import { CustomButton } from '../../styling';
import { ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import CustomTitle from '../../nano/customTitle';

const About = () => {

    const classes = mainStyles()
    const theme = useTheme()

    return(
        <Grid container className={classes.aboutBG}>
            <CustomDivider variant="zigzag" className={classes.customBottomDivider} fill={theme.palette.background.default}/>
                <Grid item xs={12} className="wow animate__zoomInDown" data-wow-offset="150">
                    <Container maxWidth="lg">
                        <CustomTitle>Tentang Sekolah</CustomTitle>
                        <Typography style={{fontFamily:'InterNormal'}} align="center">
                            SMK Bina taruna adalah Sekolah Menengah Kejuruan yang berada di Kota Subang. Sekolah yang berdiri pada tahun 2001 ini memiliki 5 Bidang Kompetensi Keahlian, diantaranya: Teknik Kendaraan Ringan(TKR), Teknik Komputer dan Jaringan(TKJ), Jasa Boga(JB), Teknik dan Bisnis Sepeda Motor(TBSM) dan Akomodasi Perhotelan(APH).<br/>	
                            <Link to="/About" style={{textDecoration:'none'}}>
                                <CustomButton className={classes.aboutReadMore} lefticon={<ArrowForward/>}>Baca Selengkapnya</CustomButton>
                            </Link>
                        </Typography>
                    </Container>
                </Grid>
        </Grid>
    )
}

export default About
