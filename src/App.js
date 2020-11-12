import React from 'react'
import { Grid, CssBaseline } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MainNavbar } from './components/nano';
import { useGlobal } from 'reactn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/main';
import About from './components/about';

const darkTheme = {
	palette: {
		type: 'dark',
		primary:{
			main:'#000'
		},
		primary1: '#1a1a2e'
	}
};

const lightTheme = {
	palette: {
		type:'light',
		primary1: '#fff'
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
	
	const [ darkMode, setDarkMode ] = useGlobal('darkMode');

	const theme = createMuiTheme(darkMode ? darkTheme : lightTheme)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<div className={classes.root}>
				<BrowserRouter>
					<MainNavbar/>
					<Grid container className={classes.container}>	
							<Switch>
								<Route path="/" exact={true}>
									<Main />	
								</Route>
								<Route path="/about">
									<About />
								</Route>
							</Switch>
					</Grid>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	)
}

export default App