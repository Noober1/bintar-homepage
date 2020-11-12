import React from 'react'
import { Grid, CssBaseline } from '@material-ui/core'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import RenderArticles from '../articles';

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

const Main = () => {

	const classes = useStyles();

	return (
        <>
		<Grid item lg={8} md={8} sm={12}>
            <RenderArticles/>
        </Grid>
        <Grid item lg={4} md={4} sm={12}>
            mana saya tau
        </Grid>
        </>
	)
}

export default Main