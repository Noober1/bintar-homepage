import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) => ({
	root:{
        cursor:'context-menu',
        marginBottom:theme.spacing(2),
        fontFamily:'VisbyBold',
        '& span':{
            transition:'all .2s ease-in-out',
            textShadow:`3px 3px 0px ${theme.palette.background.default}`,
            position:'relative',
            zIndex:1,
        },
        '& span:after':{
            transition:'all .2s ease-in-out',
            content: '""',
            backgroundColor:theme.palette.borderNav,
            position: 'absolute',
            zIndex: -1,
            bottom: theme.spacing(-.2),
            left: 0,
            width: '50%',
            height: '25%',
            opacity: 0.5,
            transform: 'skew(30deg)',
            boxShadow:`3px 3px 0px ${theme.palette.background.default}`
        },
        '&:hover span':{
            paddingLeft:20,
        },
        '&:hover span::after':{
            opacity:.7,
            left:'calc(25% + 10px)',
            width:'75%'
        }
    }
}))

const CustomTitle = ({children,variant,childrenStyle}) => {

    const classes = useStyle()

    return(
        <Typography variant={variant ? variant : "h3"} align="center" className={classes.root}>
            <span style={childrenStyle}>{children}</span>
        </Typography>
    )
}

export default CustomTitle
