import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ menuShowing }) => {
    return (
        <nav className={`nav-menu ${menuShowing && 'show'}`}>
            <div className={`nav-list ${menuShowing && 'show'}`}>
                <h2 className='nav-list-title'>The <span className='txt-secondary-color'>Steak</span> Center</h2>
                <ul className={`nav-list-ul`}>
                    <li className={`nav-list-item`}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={`nav-list-item`}>
                        <Link to='/menu'>Menu</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;