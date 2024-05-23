import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Router>
      <nav>
        <h2 className="name">James Egues</h2>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
