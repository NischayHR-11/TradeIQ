import React from 'react';
import Hero from './hero';
import Award from './award';
import Stats from './stats';
import Pricing from './pricing';
import Education from './education';
import Openaccount from '../openaccount';
import Navbar from '../navbar';
import Fotter from '../fotter';

function Homepage() {
    return ( 
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Award></Award>
        <Stats></Stats>
        <Pricing></Pricing>
        <Education></Education>
        <Openaccount></Openaccount>
        <Fotter></Fotter>
        </>
     );
}

export default Homepage;