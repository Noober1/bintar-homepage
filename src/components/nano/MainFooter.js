import React from 'react'
import clsx from 'clsx'
import { Container, Box, makeStyles, Grid, Typography, Chip, Link, IconButton } from '@material-ui/core'
import { Facebook, Twitter, Mail, Room, Phone, AlternateEmail } from '@material-ui/icons'

import SMKBisa from '../../assets/images/smkbisa.png'

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor:theme.palette.background.default
    },
    mainFooter:{
		padding:theme.spacing(3)
	},
	mainFooterTitle:{
		fontFamily:'VisbyBold',
		margin:theme.spacing(3,0,3,0)
	},
	subFooter:{
		padding:theme.spacing(1,3,1,3)
	},
	textBold:{
		fontFamily:'Inter'
	},
	textUppercase:{
		textTransform:'uppercase'
	},
	chips:{
		fontStyle:'italic',
		backgroundColor:'transparent',
		marginBottom:theme.spacing(.5)
	},
	noMargin:{
		margin:'0!important'
	}
}))

const MainFooter = () => {

    const classes = useStyles()

    const SocialMedia = (props) =>{

        const { align } = props;
    
        return(
            <>
            <Typography align={align} style={{marginBottom:4}}>
                <Link color="inherit" className={clsx(classes.textBold, classes.textUppercase)} href="/About">About</Link>
            </Typography>
            <Typography align={align}>
                <IconButton href="fb.me/binatarunasubang">
                    <Facebook fontSize="large"/>
                </IconButton>
                <IconButton href="#">
                    <Twitter fontSize="large"/>
                </IconButton>
                <IconButton href="mailto:info@smkbintarjalacagak.sch.id">
                    <Mail fontSize="large"/>
                </IconButton>
            </Typography>
            </>
        )
    }

    return (
        <footer id="main-footer" className={classes.root}>
            <Container maxWidth="lg">
                <Grid container spacing={5} className={classes.mainFooter}>
                    <Grid item xs={12} md={12} lg={8}>
                        <Typography variant="h4" className={classes.mainFooterTitle}>
                            SMK Bina Taruna Jalancagak
                        </Typography>
                        <Chip
                            className={classes.chips}
                            avatar={<Room className={classes.noMargin}/>}
                            label="Jl. Bunihayu No. 76 RT.18 / RW.03, Desa. Jalancagak, Kabupaten Subang, Jawa Barat 41281"
                        /><br/>
                        <Chip
                            className={classes.chips}
                            avatar={<Phone className={classes.noMargin}/>}
                            label="(0260) 472710"
                        /><br/>
                        <Chip
                            className={classes.chips}
                            avatar={<AlternateEmail className={classes.noMargin}/>}
                            label="info@smkbintarjalacagak.sch.id"
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <Box display={{xs:'none',md:'none',lg:'block'}}>
                            <Link href="http://psmk.kemdikbud.go.id/">
                                <img src={SMKBisa} alt="SMK Bisa" title="SMK Bisa" width="100%"/>
                            </Link>
                        </Box>
                        <Box display={{xs:'none',md:'none',lg:'block'}}>
                            <SocialMedia align="right"/>
                        </Box>
                        <Box display={{xs:'block',md:'block',lg:'none'}}>
                            <SocialMedia align="center"/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container fixed className={classes.subFooter}>
                <Typography align="center">
                    &copy;{new Date().getFullYear()} - SMK Bina Taruna Jalancagak - This page was designed by <Link href="http://fb.me/ruhiyatna.cucu" color="inherit">Cucu Ruhiyatna</Link>
                </Typography>
            </Container>
        </footer>
    )
}

export default MainFooter
