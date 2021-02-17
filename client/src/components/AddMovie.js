import React, { useState, useEffect } from 'react'
import { TextField, Select, MenuItem, Button, Grid, requirePropFactory } from '@material-ui/core'
import axios from 'axios'
import '../Styles.css'
import MovieCard from './MovieCard.js'
require('dotenv').config();


const AddMovie = () => {
    // const [movieObj, setMovieObj] = useState([
    //     {id: Date.now(), title: "Braveheart", creator: "JT", priority: "Low"},
    //     {id: Date.now(), title: "Saturday Night Fever", creator: "Christian", priority: "High"},
    //     {id: Date.now(), title: "Perks of Being a Wallflower", creator: "Nicholas", priority: "Medium"}
    // ]);

    const API_KEY = process.env.REACT_APP_TMDB_KEY;

    const [title, setTitle] = useState("");
    const [query, setQuery] = useState([])
    const [creator, setCreator] = useState("");
    const [priority, setPriority] = useState("");

    useEffect(()=> {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
        axios.get(url)
            .then(res => {
                return setQuery(res.data.results)
            });
    },[null])

    const searchChange = e => {
        e.preventDefault();
        setTitle(e.target.value)

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&include_adult=false&language=en-us`;

        //WORK ON THE AXIOS PULL
        axios.get(url)
            .then(res => {
                return setQuery(res.data.results)
            });
    }

    var gridStyle = {
        width: '300px',
        flexGrow: 1
    }

    return (
        <div className='add-movie-form'>
            <form>
                <input size="medium" label='Search Movie' placeholder="Enter Movie Title" value={title} onChange={e => searchChange(e)}/>
            </form>
            <Grid 
                container 
                className="grid"
                spacing={1} 
                direction='row' 
                justify='center' 
                alignItems='flex-start'>
                {query.slice(0,8).map(item => (
                    <Grid item style={gridStyle} xs={8} sm={4} md={4} lg={3} xl={2} key={item.id} >
                        <MovieCard data={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default AddMovie
