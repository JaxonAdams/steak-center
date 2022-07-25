import React from 'react';

const Gallery = () => {
    return (
        <>
            <h2 className='gallery-title'>Something for everyone...</h2>
            <div className='gallery'>
                <img className='food-img food-img-one' src={require('../assets/images/steak.jpg')} alt='A delicious steak' />
                <img className='food-img food-img-two' src={require('../assets/images/chicken.jpg')} alt='A delicious chicken' />
                <img className='food-img food-img-three' src={require('../assets/images/fish.jpg')} alt='A delicious fish' />
            </div>
        </>
    );
};

export default Gallery;