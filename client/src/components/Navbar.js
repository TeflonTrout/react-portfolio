import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Grid, Toolbar, IconButton, Typography, Button, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import '../Styles.css'

const Navbar = () => {

    return (
        <AppBar position="static" >
            <Toolbar>
                <Grid
                container
                justify='space-evenly' 
                spacing={4}>
                    <Link to='/'>
                        <Button color="inherit">
                            <h2 className='navbar-link'>Home</h2>
                        </Button>
                    </Link>
                    <Link to="/add">
                        <Button color="inherit">
                            <AddCircleIcon className="icon" color='inherit' />
                            <h2 className='navbar-link'>Add Movie</h2>
                        </Button>
                    </Link>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
