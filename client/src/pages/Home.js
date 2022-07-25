import React, { useState } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';

const Home = () => {
    const [menuShowing, setMenuShowing] = useState(false);

    return (
        <div>
            <Header menuShowing={menuShowing} setMenuShowing={setMenuShowing} />
            <Hero />
            <Gallery />
            <Navigation menuShowing={menuShowing} />
        </div>
    );
};

export default Home;