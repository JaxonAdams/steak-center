import React from 'react';

const Map = () => {
    return (
        <div className='map-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12169.453446577016!2d-112.01185530000001!3d40.3120926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4cbe86ff15754d98!2sEagle%20Mountain%204th%20Ward!5e0!3m2!1sen!2sus!4v1658786027976!5m2!1sen!2sus" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='our-location'></iframe>
            <h3 className='map-info'>Come check us out!</h3>
        </div>
    );
};

export default Map;