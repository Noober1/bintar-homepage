import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	cardHeader: {
		padding:theme.spacing(1)
	},
	cardContent: {
		padding:theme.spacing(1)
	},
	cardAction: {
		padding:theme.spacing(0, .5, .5, .5)
	}
}));

export default function CustomCards(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
		<CardMedia
			className={classes.media}
			image="https://www.robinwieruch.de/static/0216e3228bb8c39f7e4ea01b629f1ec2/9842e/banner.jpg"
			title="Paella dish"
		/>
		<CardHeader className={classes.cardHeader}
			title={props.title}
			subheader={props.subheader ? props.subheader : ''}
		/>
		<CardContent className={classes.cardContent}>
			<Typography variant="body2" color="textSecondary" component="p">
			This impressive paella is a perfect party dish and a fun meal to cook together with your
			guests. Add 1 cup of frozen peas along with the mussels, if you like.
			</Typography>
		</CardContent>
		<CardActions disableSpacing className={classes.cardAction}>
			<IconButton aria-label="add to favorites">
			<FavoriteIcon />
			</IconButton>
			<IconButton aria-label="share">
			<ShareIcon />
			</IconButton>
		</CardActions>
		</Card>
	);
}