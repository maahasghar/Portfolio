import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container-fluid nav bg fixed-top">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="#navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"

              >
                <ul className="navbar-nav ml-auto pr-4">
                  <li>
                    <NavLink smooth className="navbar-brand mr-auto" to="#home">
                      M / A
                    </NavLink>
                  </li>
                  <li className="nav-item active">
                    <NavLink
                      smooth
                      activeClassName="active"
                      exact
                      className="nav-link"
                      to="#home"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      smooth
                      activeClassName="active"
                      className="nav-link"
                      to="#about"
                    >
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      smooth
                      activeClassName="active"
                      className="nav-link"
                      to="#projects"
                    >
                      Projects
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      smooth
                      activeClassName="active"
                      className="nav-link"
                      to="#contact"
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      target="_blank"
                      to={process.env.PUBLIC_URL + "/resume.pdf"}
                    >
                      <button className="Resume_btn">Resume</button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
