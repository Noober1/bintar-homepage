import React from 'react'
import clsx from 'clsx'
import { Grid, Typography, Paper, Container, useTheme } from '@material-ui/core'
import CustomDivider from '../../nano/customDivider'
import mainStyles from './styles'
import CustomTitle from '../../nano/customTitle'

const Maps = () => {

    const classes = mainStyles()
    const theme = useTheme()

    return(
        <Grid container className={clsx(classes.boxMaps)}>
            <Grid item xs={12} style={{marginBottom:'3rem'}}>
                <CustomTitle childrenStyle={{color:theme.palette.background.default,textShadow:'none'}}>Temukan Kami</CustomTitle>
                <Typography variant="subtitle1" align="center" className={classes.titleMaps}>
                    Silahkan kunjungi kami di alamat yang tertera pada peta di bawah ini
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <Container>
                    <Paper className={classes.iframeMaps}>
                        {/* <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.102152796583!2d107.67534712538159!3d-6.6752864233826825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69226e7a838ddb%3A0x35c5aa1b9dfb3a2c!2sSMK%20Bina%20Taruna%20Jalancagak!5e0!3m2!1sen!2sid!4v1605629983244!5m2!1sen!2sid" width="100%" frameBorder="0" className={classes.iframeMaps} style={{border:0,minHeight:'500px'}} allowFullScreen></iframe> */}
                    </Paper>
                </Container>
            </Grid>
            <CustomDivider variant="zigzag" className={classes.customBottomDivider} fill={theme.palette.background.default}/>
        </Grid>
    )
}

export default Maps
