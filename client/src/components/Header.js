import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header-title'>
                <Link to='/'>
                The <span className='txt-secondary-color'>Steak</span> Center
                </Link>
            </h1>
        </header>
    );
};

export default Header;