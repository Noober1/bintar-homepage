import { Container, Link, makeStyles, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import Error404 from '../../../assets/icons/045-404 error.png'
import ErrorOther from '../../../assets/icons/044-error.png'
import React, { useEffect } from 'react'

var useStyles = makeStyles((theme) => ({
    image:{
        maxWidth:'300px'
    },
    text:{
        fontFamily:'VisbyBold'
    },
    link:{
        textDecoration:'none!important'
    }
}))

const ErrorPage = ({ type }) => {
    const classes = useStyles()
    var ErrorImage = type === '404' ? Error404 : ErrorOther;

    useEffect(() => {
        document.title = 'Halaman tidak ditemukan'
        document.querySelector('#subNavbar').scrollIntoView({block: 'center' })
    }, [])

    const CustomLink = ({to,children}) => {
        return(
            <Link color="inherit" className={classes.link} component={RouterLink} to={to}>{children}</Link>
        )
    }

    return (
        <Container maxWidth="lg">
            <Typography align="center">
                <CustomLink to="/">
                    <img className={classes.image} src={ErrorImage} title="Error" alt="Error"/>
                </CustomLink>
            </Typography>
            <CustomLink to="/">
                <Typography variant="h4" align="center" className={classes.text}>
                    {type === '404' &&
                        <>Halaman tidak ditemukan</>
                    }
                </Typography>
                <Typography variant="subtitle1" align="center" style={{margin:10}}>
                    Click untuk kembali ke halaman awal
                </Typography>
            </CustomLink>
        </Container>
    )
}

export default ErrorPage
