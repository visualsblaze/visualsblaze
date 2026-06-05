'use client';
import React, { Component } from 'react'
import { toast } from 'react-toastify'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        lastname: '',
        message: '',
        submitting: false,
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = async (e) => {
        e.preventDefault();

        const { name, email, lastname, message } = this.state;
        const error = {};

        if (name === '') error.name = "Please enter your name";
        if (lastname === '') error.lastname = "Please enter your Lastname";
        if (email === '') error.email = "Please enter your email";
        if (message === '') error.message = "Please enter your message";

        if (Object.keys(error).length) {
            this.setState({ error });
            return;
        }

        this.setState({ submitting: true, error: {} });
        try {
            const res = await fetch('/api/sendAppointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${name} ${lastname}`.trim(),
                    email,
                    message,
                    service: 'Contact form enquiry',
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Something went wrong');
            toast.success(data.message || 'Your message has been sent.');
            this.setState({ name: '', email: '', lastname: '', message: '', error: {} });
        } catch (err) {
            toast.error(err.message || 'Failed to send your message.');
        } finally {
            this.setState({ submitting: false });
        }
    }

    render(){
        const { name,
            email,
            message,
            lastname,
            submitting,
            error } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Lastname"/>
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea value={message} onChange={this.changeHandler} name="message" placeholder="Message"></textarea>
                            <p>{error.message ? error.message : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn" disabled={submitting}>
                                {submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;