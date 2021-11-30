import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            
            <div className="text-center p-3">
                © 2020 Copyright: <NavLink to='/home' className="text-dark" href="https://mdbootstrap.com/"> FoodMood </NavLink>
            </div>
        </footer>
    )
}

export default Footer
