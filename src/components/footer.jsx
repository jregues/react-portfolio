import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav
        className="navbar fixed-bottom bg-body-tertiary"
        style={{ marginBottom: 0, paddingBottom: 0 }}
      >
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(3, 87, 165)", padding: 15, }}
        >
          <a
            className="navbar-brand"
            href="https://www.linkedin.com/in/james-egues-34ab14299"
            style={{ color: "white" }}
          >
            <img
              src="src/assets/images/LI-In-Bug.png"
              alt="LinkedIn logo"
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
                backgroundColor: "white",
              }}
            ></img>
            <span>LinkedIn</span>
          </a>
          <a
            className="navbar-brand"
            href="https://github.com/jregues"
            style={{ color: "white" }}
          >
            <img
              src="src/assets/images/github-mark-white.png"
              alt="github logo"
              style={{ width: 40, height: 40, marginRight: 10 }}
            ></img>
            <span>Github</span>
          </a>
          <a
            className="navbar-brand"
            href="https://stackoverflow.com/users/25213818/jregues"
            style={{ color: "white" }}
          >
            <img
              src="src/assets/images/logo-stackoverflow.png"
              alt="stackoverflow logo"
              style={{ width: 200, height: 40, marginRight: 0 }}
            ></img>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
