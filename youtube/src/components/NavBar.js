import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    
    return(
        <nav>
            <NavLink exact to={"/video"}>YouTube</NavLink>
            <NavLink exact to={"/"}>Home</NavLink>
            <NavLink exact to={"/about"}>About</NavLink>
          
        </nav>
    )
}

export default NavBar; 