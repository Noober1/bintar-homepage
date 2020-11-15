import { CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

var useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: theme.palette.background.default,
        padding:theme.spacing(15,0,15,0),
        minHeight:'100vh'
    },
    text:{
        marginTop:theme.spacing(2),
        fontFamily:'VisbyBold'
    }
}))

const Fallback = ({ type }) => {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <center>
                    <CircularProgress size={100} color="inherit"/>
                </center>
                <Typography variant="h4" align="center" className={classes.text}>
                    Memuat
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Fallback
