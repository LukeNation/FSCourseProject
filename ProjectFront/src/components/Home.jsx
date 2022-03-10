import React from 'react';
import Instructions from './Home/Instructions';
import Header from './Home/Header';
import Features from './Home/Features';
import Navbar from './Navbar';


const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <Instructions />
        </>
    )
}

export default Home;