import React from 'react';
import Hero from './hero';
import Award from './award';
import Stats from './stats';
import Pricing from './pricing';
import Education from './education';
import Openaccount from '../openaccount';

function Homepage() {
    return ( 
        <>
        <Hero></Hero>
        <Award></Award>
        <Stats></Stats>
        <Pricing></Pricing>
        <Education></Education>
        <Openaccount></Openaccount>
        </>
     );
}

export default Homepage;