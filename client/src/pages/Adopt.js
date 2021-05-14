import React from 'react';
import Banner from '../components/Banner';
import Intro from '../components/Intro';
import BrowseDoudous from '../components/BrowseDoudous';

const Adopt = () => {
    return (
        <div className="adopt">
            <Banner />
            <Intro>
                <h2>Adopt a doudou</h2>
                <p>Browse available doudous. You can filter your search by age, sex, species and softness.</p>
                <p>To adopt one or more doudous, simply put them in your cart and click "adopt" when you're ready.</p>
            </Intro>
            <BrowseDoudous />
        </div>
    );
};

export default Adopt;