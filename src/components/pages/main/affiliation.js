import React from 'react'
import { Grid, Typography, Paper, Container, useTheme } from '@material-ui/core'
import CustomDivider from '../../nano/customDivider'
import mainStyles from './styles'
import CustomTitle from '../../nano/customTitle'

const Affiliation = () => {

    const classes = mainStyles()
    const theme = useTheme()

    return(
        <Grid container className={classes.boxAffiliation} style={{position:'relative'}}>
            <CustomDivider variant="line" className={classes.customTopDivider} fill={theme.palette.background.default}/>
            <Grid item xs={12} style={{marginBottom:30}} className="wow animate__backInUp" data-wow-offset="350">
                        <CustomTitle childrenStyle={{textShadow:'none'}}>Kerjasama Industri</CustomTitle>
                        <Typography style={{fontFamily:'InterNormal'}} align="center">
                            Kami juga bekerja sama dengan beberapa industri besar
                        </Typography>
                    </Grid>
            <Container className="wow animate__backInUp" data-wow-delay=".7s" data-wow-offset="250">
                <Paper className={classes.paperPadding}>
                    <Grid item xs={12} style={{margin:3}}>
                        <Typography align="center">
                            <a href="https://auto2000.co.id" target="_blank" rel="noopener noreferrer" title="Toyota Auto2000">
                                <img src="/auto2000.png" width="150" height="140" alt="" className="wp-image-640 alignnone size-thumbnail" />
                            </a>
                            <a href="https://www.yamaha-motor.co.id" target="_blank" rel="noopener noreferrer" title="Yamaha">
                                <img src="/yamaha.png" width="150" height="140" alt="Yamaha" className="wp-image-697 alignnone size-thumbnail" />
                            </a>
                            <a href="https://www.telkom.co.id/" target="_blank" rel="noopener noreferrer" title="Telkom Indonesia">
                                <img src="/telkom.png" width="150" height="140" alt="" className="wp-image-646 alignnone size-thumbnail" />
                            </a>
                            <a href="https://aqua.co.id/" target="_blank" rel="noopener noreferrer" title="Aqua Danone">
                                <img src="/aqua.png" width="150" height="140" alt="Aqua Danone" className="wp-image-702 alignnone size-thumbnail" />
                            </a>
                            <a href="https://graciaspa.com/" target="_blank" rel="noopener noreferrer" title="Gracia Spa Resort">
                                <img src="/gracia.png" width="150" height="140" alt="" className="wp-image-641 alignnone size-thumbnail" />
                                </a>
                            <a href="http://prama-grand-preanger.bandung-hotels.com/en/" target="_blank" rel="noopener noreferrer" title="Prama Grand Preanger Bandung">
                                <img src="/prama.png" width="150" height="140" alt="Prama Grand Preanger Bandung" className="wp-image-698 alignnone size-thumbnail" />
                            </a>
                            <img src="/perkakas-rekadaya-nusantara.png" width="150" height="140" alt="PT. Perkakas Rekadaya Nusantara" className="wp-image-701 alignnone size-thumbnail" />
                            <a href="http://bandung.jayakartahotelsresorts.com" target="_blank" rel="noopener noreferrer" title="Jayakarta Hotel Bandung">
                                <img src="/jayakarta.png" width="150" height="140" alt="Jayakarta Hotel Bandung" className="wp-image-703 alignnone size-thumbnail" />
                            </a>
                        </Typography>
                    </Grid>
                </Paper>
            </Container>
        </Grid>
    )
}

export default Affiliation