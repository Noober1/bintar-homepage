import React from 'react'
import { Grid, CssBaseline, Container, Typography, IconButton, Link, Box, Chip } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Facebook, Twitter, Mail, Room, Phone, AlternateEmail } from '@material-ui/icons'
import { MainNavbar } from './components/nano'
import { useGlobal } from 'reactn'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SMKBisa from './assets/images/smkbisa.png'

import Main from './components/main';
import About from './components/about';
import Posts from './components/posts';
import clsx from 'clsx'

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
		},
		background:{
			default:'#f5f5f1'
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
	},
	mainFooter:{
		padding:theme.spacing(3)
	},
	mainFooterTitle:{
		fontFamily:'VisbyBold',
		margin:theme.spacing(3,0,3,0)
	},
	subFooter:{
		background:'red',
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
}));

const App = () => {

	const classes = useStyles();
	
	const [ darkMode, setDarkMode ] = useGlobal('darkMode');

	const theme = createMuiTheme(darkMode ? darkTheme : lightTheme)

	const SocialMedia = (props) =>{

		const { align } = props;

		return(
			<>
			<Typography align={align} style={{marginBottom:4}}>
				<Link color="inherit" className={clsx(classes.textBold, classes.textUppercase)} href="/About">About</Link>
			</Typography>
			<Typography align={align}>
				<IconButton href="/test">
					<Facebook fontSize="large"/>
				</IconButton>
				<IconButton href="/test">
					<Twitter fontSize="large"/>
				</IconButton>
				<IconButton href="mailto:smks.binataruna.jlcgk@gmail.com">
					<Mail fontSize="large"/>
				</IconButton>
			</Typography>
			</>
		)
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<div id="main-content" className={classes.root}>
				<BrowserRouter>
					<MainNavbar/>
					<Switch>
						<Route path="/" exact={true}>
							<Main />	
						</Route>
						<Route path="/posts">
							<Posts />
						</Route>
						<Route path="/about">
							<About />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
			<footer id="main-footer">
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
								label="smks.binataruna.jlcgk@gmail.com"
							/>
						</Grid>
						<Grid item xs={12} md={12} lg={4}>
							<Box display={{xs:'none',md:'none',lg:'block'}}>
								<img src={SMKBisa} alt="SMK Bisa" title="SMK Bisa" width="100%"/>
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
				<Grid container className={classes.subFooter}>
					<Grid item xs={12}>
						xxxx
					</Grid>	
				</Grid>
			</footer>
		</ThemeProvider>
	)
}

export default App