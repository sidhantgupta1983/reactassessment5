import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css'

const Header = () => {
    return (
        <div>
            <div className="topnav">
                <Link to='/' href="#" className="navMenu">Home</Link>
                <Link to='/students' href="#" className="navMenu">Students</Link>
                <Link to='/contact' href="#" className="navMenu">Contact Us</Link>
            </div>  
        </div>
    )
}

export default Header;
