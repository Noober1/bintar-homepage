import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { AppContainer, MainFooter, MainNavbar } from './components/nano'
import { useGlobal } from 'reactn'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './components/pages/main';
import About from './components/pages/about';
import Posts from './components/pages/posts';

const darkTheme = {
	overrides: {
		MuiAppBar: {
			colorDefault: {
				backgroundColor: '#1a1a2e',
			},
		},
	},
	palette: {
		type: 'dark',
		primary: {
			main:'#1a1a2e'
		}
	}
};

const lightTheme = {
	overrides: {
		MuiAppBar: {
			colorDefault: {
				backgroundColor: '#fff',
			},
			colorPrimary: {
				backgroundColor: '#e8e8e8'
			}
		},
	},
	palette: {
		type:'light',
		primary: {
			main:'#fff'
		}
	}
};

const useStyles = makeStyles((theme) => ({
	root:{
		flexGrow:1
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
			<div id="main-content" className={classes.root}>
				<BrowserRouter>
					<MainNavbar/>
					<Switch>
						<AppContainer>
							<Route path="/" exact={true}>
								<Main />	
							</Route>
							<Route path="/posts">
								<Posts />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route>
								
							</Route>
						</AppContainer>
					</Switch>
				</BrowserRouter>
			</div>
			<MainFooter/>
		</ThemeProvider>
	)
}

export default App