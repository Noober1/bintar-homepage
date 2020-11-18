import React from 'react'
import clsx from 'clsx'
import { Grid, Typography, Container } from '@material-ui/core'
import mainStyles from './styles'
import CustomTitle from '../../nano/customTitle'

const StudyList = () => {

    const classes = mainStyles()

    return(
        <Grid container className={classes.backgroundTheme}>
            <Grid item xs={12} className={clsx(classes.studyContent,"wow animate__bounceInUp")} data-wow-offset="150">
                <Container fixed>
                    <CustomTitle>Bidang Studi Keahlian</CustomTitle>
                    <Typography variant="subtitle1" align="center">
                        SMK Bina Taruna Jalancagak terdiri dari 5 bidang studi keahlian
                    </Typography>
                </Container>
            </Grid>
        </Grid>
    )
}

export default StudyList
