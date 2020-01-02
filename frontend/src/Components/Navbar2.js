import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LogoRight from '../Images/wing-right.png'
import './Navbar2.css';

class Navbar extends Component {
    render() {
        const opacity =  .90
        return(
            <div>
                <nav style={{ opacity }} className="navbar-wrap">
                    <div className="nav-align">
                        <Link className="navbar blue" to="/">Home</Link>
                        <Link className="navbar blue" to="/about">About Us</Link>
                    </div>
                        <img src={ LogoRight } width="5%" alt="angel wing logo"/>
                    <div className="nav-align">
                        <Link className="navbar hotpink" to="/booking">Online Booking</Link>
                        <Link className="navbar hotpink" to="/products">Products</Link>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Navbar;