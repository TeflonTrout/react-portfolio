import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navbar">
            <ul>
                <Link to='/' class="navbar-links">Home</Link>
                <Link to='/resume' class="navbar-links">Resume</Link>
                <Link to='/projects' class="navbar-links">Projects</Link>
                <Link to='contact' class="navbar-links">Contact</Link>
            </ul>
        </div>
    )
}

export default Nav 
