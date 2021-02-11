import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails , Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../Styles.css'


const Home = () => {
    const [accordion, setAccordion] = useState([
        {
            title: "Alpha",
            creator: "mike",
            priority: "Low"
        },
        {
            title: "Bravo",
            creator: "Christian",
            priority: "Medium"
        },
        {
            title: "Zulu",
            creator: "Chris",
            priority: "High"
        },

    ]);
    
    return (

        //MAPPING DATA TO EXPANSION PANEL
        (accordion.map((item, i) => (
            <div className='list-container' key={i}>
                <Accordion className="list-item" >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                        <Typography>Listed by: {item.creator}</Typography>
                        <Typography>Priority Level: {item.priority}</Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        )))
    )
}

export default Home
