import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {

    return(

        <>

            <section id="header" className="d-flex">

                <div className="container-fluid">

                    <div className="row">

                        <div className="col-10 mx-auto">

                            <div className="row">

                                <div className="col-md-6 pt-5 mt-lg-5 pt-lg-0 order-1 order-lg-1 " id="heading">

                                    <h1 className="mt-lg-5 pt-lg-5">{props.name} <strong className="brand-name">Rjshah</strong></h1>

                                    <h2 className="my-3 font-weight-light">We are the Team of the Talented Developer Making Website</h2>

                                    <div className="mt-3 float-left">

                                        <NavLink to={props.link} exact className="btn btn-outline-primary px-5 py-2">{props.btnname}</NavLink>

                                    </div>

                                </div>

                                <div className="col-md-6 order-lg-2 order-1">

                                    <img src={props.image} className="img-fluid animated" alt="Random Image" />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}

export default  Common;