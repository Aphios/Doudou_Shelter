import React from 'react';
import Banner from '../components/Banner';
import Intro from '../components/Intro';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Intro>
                <h1>Welcome to the Doudou Shelter</h1>
                <p>The Doudou Shelter is a place where soft toys ("doudous" in french) can rest and await a new owner.</p>
                <p>Here you will find all kinds of soft toys : dogs, cats, penguins, elephants, puppets, birds... Some are old, some are young. There are different genders. There are diffent levels of sotness as well.</p>
                <p>As a visitor, you can either give a doudou or adopt one.</p>
                <p>Giving and adopting a doudou is a FICTIONAL action, meaning you will only give or get digital information about a doudou, nothing more, sorry !</p>
                <p>But if you're willing to share informations about your soft toys or pull some from our database, you're at the right place 😉</p>
            </Intro>
            <Navigation />
        </div>
    );
};

export default Home;