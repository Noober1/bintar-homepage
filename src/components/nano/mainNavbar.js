import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Toolbar, IconButton, Typography, Tooltip, AppBar, Zoom, Avatar, Link, Container, Box, List, ListItem, Divider, ListItemIcon, ListItemText, Drawer, Button, useScrollTrigger, Slide,  } from '@material-ui/core'
import { Menu as MenuIcon, Star, Brightness4, Brightness7 } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { useGlobal } from 'reactn';

import IconImage from '../../assets/icons/icon.png'
import { NavLink, Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	root: {
        boxShadow:'none',
        transition: 'all .3s ease-in-out!important'
    },
	title: {
	  	flexGrow: 1,
    },
    withBackground:{
        // backgroundColor:theme.palette.primary.main
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logoNav: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: theme.spacing(5)
    },
    customLink:{
        '&:hover': {
            textDecoration:'none'
        }
    },
    topNavLink:{
        marginRight:theme.spacing(2)
    }

}));

const HideOnScroll = (props) =>{
	const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
		{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired
};

const MainNavbar = (props) => {

    const { window } = props;

    const elevationTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 20,
        target: window ? window() : undefined,
    });

    const classes = useStyles();

    const links = [
        {
            text:"Beranda",
            to:"/"
        },
        {
            text:"Ekstrakurikuler",
            to:"/Extracurricular"
        },
        {
            text:"Bidang Studi",
            to:"/Majors"
        },
        {
            text:"Artikel",
            to:"/Posts"
        },
        {
            text:"Tentang",
            to:"/About"
        }
    ]

    const [ darkMode, setDarkMode ] = useGlobal('darkMode');
    const [ indicator, setIndicator ] = useGlobal('navBarIndicator');

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleToogleDarkMode = () => {
		localStorage.setItem('darkMode',!darkMode)
        setDarkMode(!darkMode)
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const MenuDrawer = (anchor) => (

        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
            {links.map((item, index) => (
                <Link color="inherit" component={RouterLink} to={item.to} className={classes.customLink}>
                    <ListItem button key={item.to}>
                    <ListItemIcon><Star /></ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                </Link>
            ))}
            </List>
        </div>
    );
    
    const CustomLink = (props) => {
        return(
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                <Link color="inherit" component={RouterLink} to={props.to} className={classes.customLink}>
                    <Typography variant="h6" className={classes.title}>
                    {props.content}
                    </Typography>
                </Link>
            </Box>
        )
    }

    return (
        <>
        <Drawer anchor="top" open={state["top"]} onClose={toggleDrawer("top", false)}>
            {MenuDrawer("top")}
        </Drawer>
        <Box display={{ xs: 'none', sm: 'none', md: 'block' }} >
            <AppBar position="static" className={classes.roox} color="primary">
                <Toolbar variant="dense">
                    <Link className={classes.topNavLink} color="inherit" href="http://sas.smkbintarjalancagak.sch.id/">
                        SAS
                    </Link>
                    <Link className={classes.topNavLink} color="inherit" href="http://psb.smkbintarjalancagak.sch.id/">
                        Pendaftaran Siswa Baru
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
        <HideOnScroll {...props}>
            <AppBar id="mainNavbar" position={elevationTrigger ? 'sticky' : 'static'} color={elevationTrigger ? 'default' : 'transparent'} className={classes.root} style={{
                padding: elevationTrigger ? '0rem' : '1.5rem 0rem 1.5rem 0rem',
            }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <NavLink to="/">
                            <Avatar edge="start" variant="square" alt="Logo" src={IconImage} className={classes.logoNav}/>
                        </NavLink>
                        <Box display={{ xs: 'none', sm: 'none', md: 'block' }} style={{width:'100%'}}>
                            <ul className={clsx('PrimaryNav',(elevationTrigger ? 'with-indicator-scrolled' : 'with-indicator'))}>
                                {links.map((item,index) => {
                                    return(
                                        <li className={clsx(classes.navLink,"Nav-item",(elevationTrigger ? classes.withBackground : ''),(item.to == indicator ? 'is-active' : ''))}>
                                            <CustomLink key={item.text} content={item.text} to={item.to}/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Box>
                        <Typography variant="h6" className={classes.title}/>
                        <Box display={{ xs: 'block', sm: 'block', md: 'none' }} >
                            <IconButton onClick={toggleDrawer("top", true)} className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Tooltip TransitionComponent={Zoom} placement="left" title={darkMode ? 'Matikan Mode Gelap' : 'Aktifkan Mode Gelap'} aria-label="Mode Gelap">
                            <IconButton color="inherit" onClick={handleToogleDarkMode}>
                                {darkMode ? <Brightness7/> : <Brightness4/>}
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
        </>
    )
}

export default MainNavbar
