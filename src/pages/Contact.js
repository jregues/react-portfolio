import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me via email, LinkedIn, or Github!</p>
            <div className='contact'>
                <a href="mailto:jregues@me.com?body=My custom mail body">Email</a>
                <a href='https://www.linkedin.com/in/james-egues-34ab14299'>LinkedIn</a>
                <a href='https://github.com/jregues'>Github</a>
            </div>
        </div>
    );
}

export default Contact;