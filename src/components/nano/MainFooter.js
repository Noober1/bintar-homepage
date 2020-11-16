import React from 'react'
import clsx from 'clsx'
import { Container, Box, makeStyles, Grid, Typography, Chip, Link, IconButton, useScrollTrigger, Zoom, Fab, Tooltip } from '@material-ui/core'
import { Facebook, Twitter, Mail, Room, Phone, AlternateEmail, KeyboardArrowUp } from '@material-ui/icons'


import SMKBisa from '../../assets/images/smkbisa.png'

const useStyles = makeStyles((theme) => ({
    backToTop:{
        position:'fixed',
        bottom:theme.spacing(3),
        right:theme.spacing(3)
    },
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
        marginBottom:theme.spacing(1),
        height:'auto',
        '& span':{
            whiteSpace:'break-spaces'
        }
	},
	noMargin:{
		margin:'0!important'
    },
    socialMedia:{
        marginTop:theme.spacing(2)
    },
    iconSocialMedia:{
        [theme.breakpoints.up('xs')]: {
            textAlign:'center'
        },
        [theme.breakpoints.up('sm')]: {
            textAlign:'center'
        },
        [theme.breakpoints.up('md')]: {
            textAlign:'right'
        },
        [theme.breakpoints.up('lg')]: {
            textAlign:'right'
        },
    }
}))

const ScrollTop = (props) => {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#subNavbar');
  
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.backToTop}>
          {children}
        </div>
      </Zoom>
    );
}

const MainFooter = (props) => {

    const classes = useStyles()

    const SocialMedia = () =>{
    
        return(
            <div className={classes.socialMedia}>
            <Typography className={classes.iconSocialMedia} style={{marginBottom:4}}>
                <Link color="inherit" className={clsx(classes.textBold, classes.textUppercase)} href="/About">About</Link>
            </Typography>
            <Typography className={classes.iconSocialMedia}>
                <IconButton href="http://fb.me/binatarunasubang">
                    <Facebook fontSize="large"/>
                </IconButton>
                <IconButton href="#">
                    <Twitter fontSize="large"/>
                </IconButton>
                <IconButton href="mailto:info@smkbintarjalacagak.sch.id">
                    <Mail fontSize="large"/>
                </IconButton>
            </Typography>
            </div>
        )
    }

    return (
        <footer id="main-footer" className={classes.root}>
            <Container maxWidth="lg">
                <Grid container className={classes.mainFooter}>
                    <Grid item xs={12} md={8} lg={8}>
                        <Typography variant="h4" className={classes.mainFooterTitle}>
                            SMK Bina Taruna Jalancagak
                        </Typography>
                        <Chip
                            className={classes.chips}
                            avatar={<Room className={classes.noMargin}/>}
                            label="Jl. Bunihayu No. 76 RT.18 / RW.03 Desa. Jalancagak, Kabupaten Subang Jawa Barat 41281"/><br/>
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
                    <Grid item xs={12} md={4} lg={4}>
                        <Box display={{xs:'none',md:'block',lg:'block'}}>
                            <Link href="http://psmk.kemdikbud.go.id/">
                                <img src={SMKBisa} alt="SMK Bisa" title="SMK Bisa" width="100%"/>
                            </Link>
                        </Box>
                        <SocialMedia/>
                    </Grid>
                </Grid>
            </Container>
            <Container fixed className={classes.subFooter}>
                <Typography align="center">
                    &copy;{new Date().getFullYear()} - SMK Bina Taruna Jalancagak - This page was designed by <Link href="http://fb.me/ruhiyatna.cucu" color="inherit">Cucu Ruhiyatna</Link>
                </Typography>
            </Container>
            <ScrollTop {...props}>
                <Tooltip arrow={true} TransitionComponent={Zoom} placement="left" title="Kembali ke atas" aria-label="Mode Gelap">
                    <Fab color="primary" size="large" aria-label="Klik untuk kembali ke atas">
                        <KeyboardArrowUp style={{fontSize:40}}/>
                    </Fab>
                </Tooltip>
            </ScrollTop>
        </footer>
    )
}

export default MainFooter
