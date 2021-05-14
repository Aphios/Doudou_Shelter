import React from 'react';
import Banner from '../components/Banner';
import Intro from '../components/Intro';
import GiveForm from '../components/GiveForm';

const Give = () => {
    return (
        <div className="give">
            <Banner />
            <Intro>
                <h2>Give a doudou</h2>
                <p>You are the lucky owner of a doudou and wish to donate it so that someone in need may adopt it ?</p>
                <p>Fill in the form belown to donate your doudou and we will be happy to take it in the shelter 🥰🏠</p>
            </Intro>
            <GiveForm />
        </div>
    );
};

export default Give;