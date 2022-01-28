import React from 'react';
import './index.css';
const NavbarStyle = {
    display: 'flex',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid grey',
    marginBottom:'0px'
}

const Navbar = () => {


    return (
        <>
            <div className="navbar" style={NavbarStyle}>
                <div id="searchBar">
                    <input type="text" placeholder='Search' />
                </div>
                <div id="login">
                    <button id="btn">Login</button>
                    <button id="btn">SignUp</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;