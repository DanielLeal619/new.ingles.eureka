import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Courses from '../components/Courses';
import Ebook from '../components/Ebook';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            {/* Methodology is now on a separate page */}
            <Courses />
            <Ebook />
            <FAQ />
        </>
    );
};

export default Home;
