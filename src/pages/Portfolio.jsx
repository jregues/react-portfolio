import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <p>
        My name is James Egues and this is a small portfolio created by me for
        my module 20 Challenge assignment for the UNCC Coding Bootcamp. Bellow
        are links to several github repositories for previous projects. Feel
        free to check them out by clicking on the images!
      </p>
      <div className="repos">
        <div className="image-container">
          <a href="https://jregues.github.io/personal-blog/index.html">
            <img src="src/assets/images/blog-post.png" alt="Blog Post" />
          </a>
          <div className="popup-box">
              This was an site I created for my Module 4 Challenge. This site
              functions as a personal blog where users can write blog posts and
              store them to view later on. Click on the image to view the site.
            </div>
        </div>
        <div className="image-container">
          <a href="https://note-taker-kpi8.onrender.com/">
            <img src="src/assets/images/note-taker.png" alt="Note Taker" />
          </a>
          <div className="popup-box">
              This site was created for my Module 11 Challenge assignment. This
              site allows the user to create a list of notes that can be dragged
              around, updated, and deleted. Click the image to view the site.
            </div>
        </div>
        <div className="image-container">
          <a href="https://jregues.github.io/Paws_of_the_Family/">
            <img src="src/assets/images/paws.png" alt="Paws of the Family" />
          </a>
          <div className="popup-box">
              This site was created for our first project. It allows the user to
              view random images based on the dog breed selected in the dropdown
              menu. The pictures randomize every time the site is refreshed
              using an api.
            </div>
        </div>
        <div className="image-container">
          <a href="https://drive.google.com/file/d/1H3d9FZ0EbYZbCy91X4mmE6mNORywbAxU/view?usp=sharing">
            <img src="src/assets/images/module-12.png" alt="Module 12" />
          </a>
          <div className="popup-box">
              This is a walkthrough video of a Node application written for my
              Module 12 assignment. It allows the user to create a database and
              store information about employees, including salaries, roles,
              managers, and departments. Click the image to view the walkthrough
              video.
            </div>
        </div>
        <div className="image-container">
          <a className="" href="https://country-travel-search.onrender.com/">
            <img src="src/assets/images/project-2.png" alt="Project 2" />
          </a>
          <div className="popup-box">
              This is a site created for our second project. It allows the user
              to search for a country and retrieve information about that
              country, including visa requirements, population, the capital,
              etc, and then save that country to a list. The user must first
              create an account before viewing anything. Click the image to view
              the site.
            </div>
        </div>
        <div className="image-container">
          <a href="https://drive.google.com/file/d/1CREFURH10mO14e2I8LA-UeejL4bf7Uh0/view">
            <img src="src/assets/images/module-10.png" alt="Module 10" />
          </a>
          <div className="popup-box">
              This is a walkthrough video of a Node application that was created
              for my Module 10 assignment. It allows the user to create a logo
              using an svg file based on inquirer input. Click the image to view
              the video.
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
