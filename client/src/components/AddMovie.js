import React, { useState } from 'react'
import { TextField, Select, MenuItem, Button, Grid, requirePropFactory } from '@material-ui/core'
import axios from 'axios'
import '../Styles.css'
import MovieCard from './MovieCard.js'
require('dotenv').config();


const AddMovie = () => {
    const [movieObj, setMovieObj] = useState([
        {id: Date.now(), title: "Braveheart", creator: "JT", priority: "Low"},
        {id: Date.now(), title: "Saturday Night Fever", creator: "Christian", priority: "High"},
        {id: Date.now(), title: "Perks of Being a Wallflower", creator: "Nicholas", priority: "Medium"}
    ]);

    const API_KEY = process.env.REACT_APP_TMDB_KEY;

    const [title, setTitle] = useState("");
    const [query, setQuery] = useState([])
    const [creator, setCreator] = useState("");
    const [priority, setPriority] = useState("");

    const searchChange = e => {
        e.preventDefault();
        setTitle(e.target.value)

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`;

        //WORK ON THE AXIOS PULL
        axios.get(url)
            .then(res => {
                console.log("***", res.data.results, '***')
                return setQuery(res.data.results)
            });
    }

    const creatorChange = e => {
        e.preventDefault();
        setCreator(e.target.value)
        console.log(creator)
    }

    const priorityChange = e => {
        e.preventDefault();
        setPriority(e.target.value)
        console.log(priority)
    }

    const addMovieToDB = e => {
        e.preventDefault();   
        setMovieObj(movieOjb => [...movieObj, {id: Date.now(), title: title, creator: creator, priority: priority}])
        console.log(movieObj)
    }

    const submitMovie = () => {

    }

    var gridStyle = {
        width: '300px',
        flexGrow: 1
    }

    return (
        <div className='add-movie-form'>
            <form onSubmit={e => addMovieToDB(e)}>
                <input size="medium" label='Search Movie' value={title} onChange={e => searchChange(e)}/>
                <input label='Listed by' value={creator} onChange={e => creatorChange(e)}/>
                <select value={priority} onChange={e => priorityChange(e)}>
                    <option color='secondary' value='Low'>Low</option>
                    <option color='secondary' value='Medium'>Medium</option>
                    <option color='secondary' value='High'>High</option>
                </select>
                <Button variant='contained' color="secondary" type='Submit'>Submit</Button>
            </form>

            <Grid container spacing={1} direction='row' justify='center' alignItems='flex-start'>
                {query.map(item => (
                    <Grid item style={gridStyle} xs={8} sm={6} md={4} lg={3} xl={2} key={item.id} >
                        <MovieCard data={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default AddMovie
