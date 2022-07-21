import React from 'react';

const Navigation = ({ menuShowing, setMenuShowing }) => {
    return (
        <nav className={`nav-menu ${menuShowing && 'show'}`}>
            <div className={`nav-list ${menuShowing && 'show'}`}>
                <h2 className='nav-list-title'>The <span className='txt-secondary-color'>Steak</span> Center</h2>
            </div>
        </nav>
    );
};

export default Navigation;