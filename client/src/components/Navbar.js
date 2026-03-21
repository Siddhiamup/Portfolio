import { Link } from "react-router-dom";
// import { Link } from "react-scroll"
function Navbar() {
  return (

    // Bootstrap navbar
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"></nav>
      <div className="container">

        {/* Logo / Brand */}
        <Link className="navbar-brand" to="/">
          MyPortfolio
        </Link>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;