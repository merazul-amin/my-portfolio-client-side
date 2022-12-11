import React from 'react';
import './Contact.css';
const Contact = () => {
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
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control"
                                            type='text' placeholder="NAME" />
                                    </div>
                                    <div className="app-form-group">
                                        <input type='email' className="app-form-control" placeholder="EMAIL" />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control"
                                            type='number' placeholder="CONTACT NO" />
                                    </div>
                                    <div className="app-form-group message">
                                        <textarea className="app-form-control" placeholder="MESSAGE" />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className='btn btn-error btn-sm'>CANCEL</button>
                                        <button className='btn btn-success btn-sm ml-2'>SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;