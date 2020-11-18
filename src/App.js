import React, { Suspense } from 'react'
import { CssBaseline } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { AppContainer, MainFooter, MainNavbar, Fallback, ErrorBoundary } from './components/nano'
import { useGlobal } from 'reactn'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Main, About, Posts, ErrorPage } from './components/pages'

import { ThemeStyle } from './components/styling/'

const useStyles = makeStyles((theme) => ({
	root:{
		flexGrow:1,
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
	
	const [ darkMode ] = useGlobal('darkMode');

	const theme = createMuiTheme(darkMode ? ThemeStyle('dark') : ThemeStyle('light'))

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<div id="main-content" className={classes.root}>
				<BrowserRouter>
					<MainNavbar/>
					<AppContainer>
						<ErrorBoundary>
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
						</ErrorBoundary>
					</AppContainer>
				</BrowserRouter>
			</div>
			<MainFooter/>
		</ThemeProvider>
	)
}

export default App