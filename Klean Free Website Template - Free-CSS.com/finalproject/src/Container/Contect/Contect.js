import * as yup from 'yup';
import { useFormik } from 'formik';

import React from 'react';
import { Form } from 'formik';
import { Formik } from 'formik';
import { Container } from 'reactstrap';
import { useState } from 'react';

function Contect(props) {


    const [userType, setUserType] = useState('Login')
    const [Reset, setReset] = useState(false)

    const Login = {
        name: yup.string().required("enter your name"),
        email: yup.string().email("enter valid email").required("pls enter mail"),
        

    }

    let schema, initial;

    if (userType === 'Login') {
        schema = yup.object().shape(Login);
        initial = {
            name: '',
            email: '',
           

        }
    }
    // else if (userType === 'Signup') {
    //     schema = yup.object().shape(Signup);
    //     initial = {
    //         Name: '',
    //         email: '',
    //         }
    // }
    const handlelogin = (values) => {
        console.log("loginhandle", values);
    }
    // const handlesignup=(values)=>{
    //     console.log("signuphandle",values);
    // }

    const formik = useFormik({
        initialValues: initial,
        validationSchema: schema,
        onSubmit: values => {
            if (userType === 'login') {
                handlelogin(values);
            }
            // else if(userType==='signup'){
            //     handlesignup(values);  
            // }
            // alert(JSON.stringify(values, null, 2));
        },
    });

    console.log(formik.errors.email);

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row align-items-end mb-4">
                    <div className="col-lg-6">
                        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Contact Us</h6>
                        <h1 className="section-title mb-3">Contact Us For Cleaning Services</h1>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="font-weight-normal text-muted mb-3">Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat lorem. Ipsum eos ipsum magna lorem stet</h4>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="contact-form">
                            <div id="success" />
                            <Formik values={formik}>
                                <Form onClick={formik.handleSubmit} name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="form-row">
                                        <div className="col-sm-6 control-group">
                                            <input onChange={formik.handleChange} type="text" className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                            <p className="help-block text-danger" />
                                            {
                                                formik.errors.name ? <p>{formik.errors.name}</p> : null
                                            }
                                        </div>
                                        <div className="col-sm-6 control-group">
                                            <input onChange={formik.handleChange} type="email" className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger" />
                                            {
                                                formik.errors.email ? <p>{formik.errors.email}</p> : null
                                            }
                                        </div>
                                    </div>
                                    {/* <div className="control-group">
                                        <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger" />
                                      
                                    </div> */}
                                    <div className="control-group">
                                        <textarea className="form-control p-4" rows={6} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    <div className="col-lg-5" style={{ minHeight: 400 }}>
                        <div className="position-relative h-100 rounded overflow-hidden">
                            <iframe style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Contect;