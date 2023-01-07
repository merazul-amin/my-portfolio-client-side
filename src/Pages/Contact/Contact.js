import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const handleContact = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_sn1dq2j', 'template_044o7e7', form.current, 'WD1yDeLEk4zX9Kfb3')
            .then((result) => {
                toast.success('Message Sent.')
                e.target.reset();
            }, (error) => {
                toast.error('Message Not Sent.')
            });
    }
    return (
        <div>
            <div className="background">
                <div className="container">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACT</span>
                                    <span>Me</span>
                                </div>
                                <div className="app-contact">CONTACT INFO : +8801810476369</div>
                            </div>
                            <div className="screen-body-item">
                                <form ref={form} onSubmit={handleContact} className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control"
                                            type='text' name='from_name' placeholder="NAME" />
                                    </div>
                                    <div className="app-form-group">
                                        <input type='email'
                                            name='from_email' className="app-form-control" placeholder="EMAIL" />
                                    </div>

                                    <div className="app-form-group message">

                                        <textarea className="app-form-control"
                                            name='message' placeholder="MESSAGE" />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className='btn btn-error btn-sm'>CANCEL</button>
                                        <button type='submit' className='btn btn-success btn-sm ml-2'>SEND</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;