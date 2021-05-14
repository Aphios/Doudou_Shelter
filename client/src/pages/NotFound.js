import React from 'react';
import Banner from '../components/Banner';
import Intro from '../components/Intro';

const NotFound = () => {
    return (
        <div className="notfound">
            <Banner />
            <Intro><h1>404 Not Found</h1></Intro>
        </div>
    );
};

export default NotFound;