import React, { useState } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Menu = () => {
    const [menuShowing, setMenuShowing] = useState(false);
    
    return (
        <div>
            <Header menuShowing={menuShowing} setMenuShowing={setMenuShowing} />
            <Navigation menuShowing={menuShowing} />
            Hello World
        </div>
    );
};

export default Menu;