import React, { useState, useEffect } from 'react'
import { CustomCards } from '../styling'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	articleCards: {
		paddingBottom: theme.spacing(2),
		paddingRight: theme.spacing(2),
	}
}));

const RenderArticles = () => {

    const [articles, setArticles] = useState([])
    const [articleLoading, setarticleLoading] = useState(true)

    useEffect(() => {
        var getData = fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        getData.then(response => {
            setArticles(response)
            setarticleLoading(false)
        })
    }, [])

    const classes = useStyles();
    return (
        <Grid container>
            {articleLoading ? 'Loading' : ''}
            {articles.map(item => {
                return(
                    <Grid key={item.id} item className={classes.articleCards} lg={4} md={6}>
                        <CustomCards title={item.name}/>
                    </Grid>
                )    
            })}
        </Grid>
    )
}

export default RenderArticles
