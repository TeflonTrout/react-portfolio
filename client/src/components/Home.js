import React, { useState, useEffect } from 'react'
import { Accordion, AccordionSummary, AccordionDetails , Typography } from '@material-ui/core'
import axios from 'axios';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import '../Styles.css'


const Home = () => {
    const [dataPull, setDataPull] = useState([]);
    
    useEffect(() => {
        axios.get('/posts')
            .then(results => setDataPull(results.data))
    }, []);

    const handleDelete = (e, item) => {
        e.preventDefault();
        var id = item._id
        axios.delete(`/posts/${id}`, {
            params: {id}
        })
            .then(response => console.log(response))
    }
    
    return (
        <div>
        {/* MAPPING DATA TO EXPANSION PANEL */}
            {dataPull.map(item => {
                return(
                    <div className="list-container" key={item.id}>
                        <Accordion 
                            className={"list-item " + item.priority}
                            >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>{item.movieTitle}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <Typography>Listed by: {item.creator}</Typography>
                                    <Typography>Priority Level: {item.priority}</Typography>
                                </div>
                                <div className="delete-icon">
                                    <DeleteIcon onClick={e => handleDelete(e, item)}/>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
        </div>
    )
}

export default Home
