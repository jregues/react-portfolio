import React from 'react';
import EmailForm from '../components/emailForm.jsx';

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contact Me</h1>
            <p>If you would like to reach out to me feel free to send me an email using the form below!</p>
            <div className='contact-info'>
                <EmailForm />
            </div>
        </div>
    );
}

export default Contact;