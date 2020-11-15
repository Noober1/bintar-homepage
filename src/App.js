import React, { Suspense, lazy } from 'react'
import { CssBaseline } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { AppContainer, MainFooter, MainNavbar, Fallback } from './components/nano'
import { useGlobal } from 'reactn'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const Main = lazy(() => import('./components/pages/main'));
const About = lazy(() => import('./components/pages/about'));
const Posts = lazy(() => import('./components/pages/posts'));
const ErrorPage = lazy(() => import('./components/pages/errors'));



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
					<AppContainer>
						<Suspense fallback={<Fallback />}>
							<Switch>
								<Route path="/" exact={true} component={Main}/>
								<Route path="/posts" component={Posts}/>
								<Route path="/about" component={About}/>
								<Route>
									<ErrorPage type="404"/>
								</Route>
							</Switch>
						</Suspense>
					</AppContainer>
				</BrowserRouter>
			</div>
			<MainFooter/>
		</ThemeProvider>
	)
}

export default App