import React from 'react'
import { Toolbar, IconButton, Typography, Tooltip, AppBar, Zoom, Avatar, Link } from '@material-ui/core'
import { Menu as MenuIcon, Brightness4, Brightness7 } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { useGlobal } from 'reactn';

import IconImage from '../../assets/icons/icon.png'
import { NavLink, Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	root: {
        boxShadow: 'none'
	},
	menuButton: {
	  	marginRight: theme.spacing(2),
	},
	title: {
	  	flexGrow: 1,
    },
    logoNav: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: theme.spacing(2)
    },
    customLink: {
        marginRight:theme.spacing(2)
    }
}));

const MainNavbar = (props) => {

    const classes = useStyles();

    const [ darkMode, setDarkMode ] = useGlobal('darkMode');

    const handleToogleDarkMode = () => {
		localStorage.setItem('darkMode',!darkMode)
        setDarkMode(!darkMode)
    }
    
    const CustomLink = (props) => {
        return(
            <Link color="inherit" component={RouterLink} to={props.to} className={classes.customLink}>
                <Typography variant="h6" className={classes.title}>
                {props.content}
                </Typography>
            </Link>
        )
    }

    return (
        <AppBar position="static" color="primary1" className={classes.root}>
            <Toolbar>
                <NavLink to="/">
                    <Avatar edge="start" variant="square" alt="Logo" src={IconImage} className={classes.logoNav}/>
                </NavLink>
                <CustomLink content="Home" to="/"/>
                <CustomLink content="About" to="/About"/>
                <Typography variant="h6" className={classes.title}/>
                <Tooltip TransitionComponent={Zoom} placement="left" title={darkMode ? 'Matikan Mode Gelap' : 'Aktifkan Mode Gelap'} aria-label="Mode Gelap">
                    <IconButton color="inherit" onClick={handleToogleDarkMode}>
                        {darkMode ? <Brightness7/> : <Brightness4/>}
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

export default MainNavbar
