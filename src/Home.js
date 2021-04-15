import React from 'react';
import { NavLink } from 'react-router-dom';

import Image from '../src/images/1.jpg';

import Common from './Common';

const Home = () => {

    return(

        <>

            <Common name='Grow your business with'  link="/services" btnname="Get Started"  image={Image} />

        </>

    );

}
export default  Home;