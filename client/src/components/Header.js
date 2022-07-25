import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ menuShowing, setMenuShowing }) => {
    return (
        <>
            <header className='header'>
                <h1 className='header-title'>
                    <Link to='/'>
                    The <span className='txt-secondary-color'>Steak</span> Center
                    </Link>
                </h1>
                <div className={`menu-btn ${menuShowing && 'close'}`} onClick={() => setMenuShowing(!menuShowing)}>
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                </div>
            </header>
        </>
    );
};

export default Header;