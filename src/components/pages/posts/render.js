import React, { useState, useEffect } from 'react'
import { CustomCards } from '../../styling'
import { Grid, makeStyles, CircularProgress, Typography } from '@material-ui/core'
import Axios from 'axios';
import ErrorImage from '../../../assets/icons/044-error.png'

const useStyles = makeStyles((theme) => ({
	articleCards: {
		paddingBottom: theme.spacing(2),
		paddingRight: theme.spacing(2),
	}
}));

const RenderArticles = () => {

    const [articles, setArticles] = useState([])
    const [isError, setisError] = useState(false)
    const [articleLoading, setarticleLoading] = useState(true)
    const [elementPos, setElementPos] = useState('center')

    useEffect(() => {

        var getData = Axios('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return {
                success:1,
                data:response.data
            }
        })
        .catch(error => {
            return {
                success:0,
                error:error
            }
        })


        getData.then(api => {
            if (api.success) {
                setArticles(api.data)
                setarticleLoading(false)
                setElementPos('flex-start')
            } else {
                setisError(true)
                setarticleLoading(false)
            }
        })
    }, [])

    const classes = useStyles();
    return (
        <Grid container direction="row" justify={elementPos} alignItems="center">
            {articleLoading ? <CircularProgress color="inherit" style={{marginTop:30}} size={100}/> : ''}
            {isError ?
                <div> 
                    <img src={ErrorImage} title="Error" alt="Error" style={{maxWidth:'300px'}}/>
                    <Typography variant="h5">
                        Error: Gagal memuat data
                    </Typography>
                </div>
            : ''}
            {articles.map(item => {
                return(
                    <Grid key={item.id} item className={classes.articleCards} lg={4} sm={6}>
                        <CustomCards title={item.name} imageMedia=""/>
                    </Grid>
                )    
            })}
        </Grid>
    )
}

export default RenderArticles
