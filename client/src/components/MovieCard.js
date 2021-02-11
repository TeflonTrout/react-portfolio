import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardActions, Button, CardMedia, Grid } from '@material-ui/core'
import Image from './img/placeholder.png'

const MovieCard = (props) => {
    const [positiveRating, setPositiveRating] = useState(false);

    var cardStyle = {
        display: 'flex',
        height: '800px',
        justifyContent: 'center',
        position: 'relative',
        width: '100%'
    }

    var cardActionsStyle = {
        bottom: 0,
        marginBottom: '20px',
        position: 'absolute',
    }

    useEffect(() => {
        var rating = props.data.vote_average;

        if ( rating >= 7) {
            setPositiveRating(true)
        }
    }, [])

    return (
        <div className='card-container'>
            <Card style={cardStyle} variant='outlined' >
                <CardContent>
                    <div className='card-poster'>
                        <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt={Image}/>
                    </div>
                    <h2>{props.data.title}</h2>
                    <h6>Released: {props.data.release_date}</h6>
                    <p className={'rating ' + (positiveRating ? 'positive' : '')}>Rating: {props.data.vote_average}</p>
                    <div className='description-box'>
                        <p className='description-true'>{props.data.overview}</p>
                    </div>
                    <CardActions style={cardActionsStyle}>
                        <Button color='primary' variant='contained'>Add</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}

export default MovieCard
