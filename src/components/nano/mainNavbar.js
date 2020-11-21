import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Toolbar, IconButton, Typography, Tooltip, AppBar, Zoom, Avatar, Link, Container, Box, List, ListItem, Divider, ListItemIcon, ListItemText, Drawer, Button, useScrollTrigger, Slide,  } from '@material-ui/core'
import { Menu as MenuIcon, Star, Brightness4, Brightness7 } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { useGlobal } from 'reactn';

import IconImage from '../../assets/icons/icon.png'
import { NavLink, Link as RouterLink } from 'react-router-dom';
import CustomTooltip from './customTooltip';


const useStyles = makeStyles((theme) => ({
	root: {
        boxShadow:'none',
        transition: 'all .3s ease-in-out!important'
    },
    primaryNav:{
        '& .Nav-item':{
            textShadow:`1px 1px 0px ${theme.palette.background.default}`
        },
        '&.with-indicator .Nav-item':{
            '&:last-child::before':{
                borderTopColor:theme.palette.borderNav
            },
            '&:last-child::after':{
                backgroundColor:theme.palette.borderNav,
            }
    
        }
    },
    subNavbar:{
        borderBottom:`2px solid ${theme.palette.borderNav}`,
        boxShadow:`0 0 45px 45px ${theme.palette.background.default}`,
    },
	title: {
	  	flexGrow: 1,
    },
    boxNav:{
        width:`calc(100% - ${theme.spacing(5)}px)`
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

    const [subHeaderState, setsubHeaderState] = useState(0)

    const elevationTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: subHeaderState,
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

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleToggleDarkMode = () => {
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
                <Link color="inherit" key={item.to} component={RouterLink} to={item.to} className={classes.customLink}>
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

    useEffect(() => {
        let getSubHeader = document.querySelector('#subNavbar');
        if (getSubHeader) {
            setsubHeaderState(getSubHeader.clientHeight)
        }
    }, [])

    return (
        <>
        <Drawer anchor="top" open={state["top"]} onClose={toggleDrawer("top", false)}>
            {MenuDrawer("top")}
        </Drawer>
        <Box display={{ xs: 'none', sm: 'none', md: 'block' }} >
            <AppBar position="static" className={classes.subNavbar} id="subNavbar">
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
            <AppBar id="mainNavbar" position={elevationTrigger ? 'sticky' : 'static'} color={elevationTrigger ? 'inherit' : 'transparent'} className={classes.root} style={{
                padding: elevationTrigger ? '0rem' : '0rem 0rem 1.5rem 0rem',
            }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <NavLink to="/">
                            <Avatar edge="start" variant="square" alt="Logo" src={IconImage} className={classes.logoNav}/>
                        </NavLink>
                        <Box display={{ xs: 'none', sm: 'none', md: 'block' }} className={classes.boxNav}>
                            <ul className={clsx('PrimaryNav',(elevationTrigger ? 'with-indicator-scrolled' : 'with-indicator'), classes.primaryNav)}>
                                {links.map((item,index) => {
                                    return(
                                        <li key={item.to} className={clsx(classes.navLink,"Nav-item",(elevationTrigger ? classes.withBackground : ''),(item.to == indicator ? 'is-active' : ''))}>
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
                        <CustomTooltip title={<Typography color="inherit">{darkMode ? 'Matikan Mode Gelap' : 'Aktifkan Mode Gelap'}</Typography>} aria-label="Model Gelap">
                            <IconButton color="inherit" onClick={handleToggleDarkMode}>
                                {darkMode ? <Brightness7/> : <Brightness4/>}
                            </IconButton>
                        </CustomTooltip>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
        </>
    )
}

export default MainNavbar
