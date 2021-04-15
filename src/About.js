import React from 'react';

import Image from '../src/images/7.svg';

import Common from './Common';

const About = () => {

    return(

        <>

            <Common name='Welcome To About Page' link="/contact" btnname="Contact Now" image={Image} />

        </>

    );

}

export default  About;