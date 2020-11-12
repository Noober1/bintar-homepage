import React, { useState, useEffect } from 'react'
import { CustomCards } from '../styling'
import { Grid, makeStyles, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	articleCards: {
		paddingBottom: theme.spacing(2),
		paddingRight: theme.spacing(2),
	}
}));

const RenderArticles = () => {

    const [articles, setArticles] = useState([])
    const [articleLoading, setarticleLoading] = useState(true)
    const [elementPos, setElementPos] = useState('center')

    useEffect(() => {
        var getData = fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        getData.then(response => {
            setArticles(response)
            setarticleLoading(false)
            setElementPos('flex-start')
        })
    }, [])

    const classes = useStyles();
    return (
        <Grid container direction="row" justify={elementPos} alignItems="center">
            {articleLoading ? <CircularProgress style={{marginTop:30}} size={100}/> : ''}
            {articles.map(item => {
                return(
                    <Grid key={item.id} item className={classes.articleCards} lg={4} sm={6}>
                        <CustomCards title={item.name}/>
                    </Grid>
                )    
            })}
        </Grid>
    )
}

export default RenderArticles
