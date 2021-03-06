import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to='/home' className="navbar-brand">FoodMood</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/home' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/profile' className="nav-link">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/fooddiaries' className="nav-link">Food Diaries</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Sign In</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
