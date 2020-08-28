import React from "react";
import car from "../Images/carwithoutwheels.png";
import wheel from "../Images/wheel.png";
import { NavHashLink as NavLink } from "react-router-hash-link";
const Home = () => {
  return (
    <section id="home">
      <div className="sky background container-fluid d-flex align-items-center ">
        <div className=" row">
          <div className=" col-10 mx-auto">
            <div className="row">
              <div className="home pt-lg-0 col-lg-12  order-lg-1 d-flex justify-content-center flex-column">
                <span className="home-brand text-center">Not Working</span>
                <h1 className="text-center">Software Engineer & Illustrator</h1>

                <div className="mt-3 pt-4 d-flex justify-content-center order-3">
                  <NavLink smooth to="/#projects" className="default_btn">
                    View Projects
                  </NavLink>

                  <NavLink
                    activeClassName="active"
                    className="nav-link default_btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    to={process.env.PUBLIC_URL + "/resume.pdf"}
                  >
                    View Resume
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="city"></div>

      <div className="vehicle">
        <span className="car">
          <img src={car} alt="car body" />
        </span>

        <span className="wheel">
          <img src={wheel} className="back-wheel" alt="back wheel" />
          <img src={wheel} className="front-wheel" alt="front wheel" />
        </span>
      </div>
    </section>
  );
};

export default Home;
