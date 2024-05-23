import React from 'react';

const Home = () => {
    return (
        <div idName='home' className='home'>
            <h1>Welcome!</h1>
            <p>My name is James Egues and this is a small portfolio created by me for my module 20 Challenge assignment for the UNCC Coding Bootcamp. Bellow are links to several github repositories for previous projects. Feel free to check them out by clicking on the images!</p>
            <div className='repos'>
            <a href='https://jregues.github.io/personal-blog/index.html'>
                    <img src='src/assets/images/blog-post.png' alt='Blog Post' />
                </a>
                <a href='https://note-taker-kpi8.onrender.com/'>
                    <img src='src/assets/images/note-taker.png' alt='Note Taker' />
                </a>
                <a href='https://jregues.github.io/Paws_of_the_Family/'>
                    <img src='src/assets/images/paws.png' alt='Paws of the Family' />
                </a>
                <a href='https://drive.google.com/file/d/1H3d9FZ0EbYZbCy91X4mmE6mNORywbAxU/view?usp=sharing'>
                    <img src='src/assets/images/module-12.png' alt='Module 12' />
                </a>
            </div>
        </div>
        
    );
}

export default Home;
