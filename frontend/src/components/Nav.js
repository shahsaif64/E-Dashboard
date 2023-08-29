import React from "react";
import { Link } from "react-router-dom";
const Nav =()=>{
    return(
    <div className="navbar">
        
        <div className="nav-links">
            <div><Link to="/">Products</Link></div>
            <div><Link to="/add">Add</Link></div>
            <div><Link to="/update">Update</Link></div>
            <div><Link to="/delete">Delete</Link></div>
            <div><Link to="/profile">Profile</Link></div>
            <div><Link to="/logout">Logout</Link></div>
            <div><Link to="/signup">Register</Link></div>
         </div>
         <div>E-Dashboard</div>
    </div>
    );
}
 export default Nav;