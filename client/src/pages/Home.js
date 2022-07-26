import React, { useState } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
    const [menuShowing, setMenuShowing] = useState(false);

    return (
        <div>
            <Header menuShowing={menuShowing} setMenuShowing={setMenuShowing} />
            <Hero />
            <Gallery />
            <Map />
            <Footer />
            <Navigation menuShowing={menuShowing} />
        </div>
    );
};

export default Home;