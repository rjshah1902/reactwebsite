import React from 'react';

import Sdata from './Sdata';

import Card from './Card';

const Services = () => {

    return(

        <>
    
        <div className="my-5">

            <h1 className="text-center"> Our Services</h1>

        </div>

        <div className="container-fluid">

            <div className="row">

                <div className="col-10 mx-auto">

                    <div className="row gy-4">

                        {

                            Sdata.map((val, index) => {

                                return(

                                    <Card  imagesrc={val.imgsrc} imgname={val.imgname} key={index} />

                                )

                            })

                        }

                    </div>

                </div>

            </div>

        </div>

        </>

    );

}

export default  Services;