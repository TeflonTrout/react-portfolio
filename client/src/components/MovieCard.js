import React from 'react'
import { Card, CardContent, CardActions, Button } from '@material-ui/core'

const MovieCard = (props) => {
    return (
        <div className='card-container'>
            <Card variant='outlined' className='movieCard'>
                <CardContent>
                    <div className='card-poster'>
                        <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt=""/>
                    </div>
                    {props.data.title}
                </CardContent>
                <CardActions>
                    <Button color='primary' variant='contained'>Add</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default MovieCard
