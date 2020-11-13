import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import RenderArticles from './render';

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

const Posts = () => {

	useEffect(() => {
		document.title = 'Postingan';
	}, [])

	const classes = useStyles();

	return (
		<Grid container className={classes.paper}>
			<Grid item lg={8} md={8} sm={12}>
				<RenderArticles/>
			</Grid>
			<Grid item lg={4} md={4} sm={12}>
				mana saya tau
			</Grid>
		</Grid>
	)
}

export default Posts