import React, { useState } from 'react'
import { Grid, Toolbar, IconButton, Typography, CssBaseline, Tooltip, AppBar, Zoom } from '@material-ui/core'
import { Menu as MenuIcon, Brightness4, Brightness7 } from '@material-ui/icons'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CustomCards } from './components';
import RenderArticles from './components/articles';

const darkTheme = {
	palette: {
		type: 'dark',
		primary:{
			main:'#000'
		}
	}
};

const lightTheme = {
	palette: {
		type:'light'
	}
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
	  	marginRight: theme.spacing(2),
	},
	title: {
	  	flexGrow: 1,
	},
	container: {
		padding: theme.spacing(2),
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}
}));

const App = () => {
	const classes = useStyles();
	
	const [darkMode, setDarkMode] = useState(() => {
		let dataFromStorage = localStorage.getItem('darkMode')
		return dataFromStorage !== null ? (dataFromStorage == 'true' ? true : false) : false;
	})

	const handleToogleDarkMode = () => {
		let value = !darkMode
		localStorage.setItem('darkMode',value)
		setDarkMode(value)
	}

	const theme = createMuiTheme(darkMode ? darkTheme : lightTheme)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							News
						</Typography>
						<Tooltip TransitionComponent={Zoom} placement="left" title="Mode Gelap" aria-label="Mode Gelap">
							<IconButton color="inherit" onClick={handleToogleDarkMode}>
								{darkMode ? <Brightness7/> : <Brightness4/>}
							</IconButton>
						</Tooltip>
					</Toolbar>
				</AppBar>
				<Grid container className={classes.container}>	
					<Grid item xs={8}>
						<RenderArticles/>
					</Grid>
					<Grid item xs={4}>
						mana saya tau
					</Grid>
				</Grid>
			</div>
		</ThemeProvider>
	)
}

export default App