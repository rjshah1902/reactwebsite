import React, { useState } from 'react';

const Contact = () => {

    const [old, newdata] = useState({
        name: '',
        contact: '',
        email: '',
        message: ''

    });

    const InputEvent = (event) => {

        const {name, value} = event.target;

        newdata((preval) => {
            return{ ...preval, [name]: value };
        });

    };

    const fomrSubmit = (e) => {
        e.preventDefault();

        alert(`My Name is ${old.name}, My Contact is ${old.contact}, My Email is ${old.email} And Message is ${old.message}`);
    }

    return(

        <>

            <div class="my-5">

                <h1 className="text-center">Contact Us</h1>

            </div>

            <div className="container-fluid">

                <div className="row">

                    <form onSubmit={fomrSubmit}>

                        <div className="col-4 mx-auto">

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" onChange={InputEvent} value={old.name} name="name" id="exampleFormControlInput1" placeholder="Enter your Name" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contact</label>
                                <input type="number" className="form-control" onChange={InputEvent} value={old.contact} name="contact" id="exampleFormControlInput1" placeholder="Enter your Contact" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" onChange={InputEvent} value={old.email} name="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" onChange={InputEvent} value={old.message} name="message" id="exampleFormControlTextarea1" placeholder="Enter your Message" rows="3"></textarea>
                            </div>

                            <button className="btn btn-outline-primary px-5">
                                Send Data
                            </button>

                        </div>
                    </form>

                </div>

            </div>

        </>

    );

}

export default  Contact;