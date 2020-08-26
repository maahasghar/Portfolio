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
                <span className="home-brand text-center">Maah Asghar</span>
                <h1 className="text-center">Software Engineer & Illustrator</h1>

                <div className="mt-3 pt-4 d-flex justify-content-center order-3">
                  <NavLink smooth to="/#projects" className="default_btn">
                    View Projects
                  </NavLink>

                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    target="_blank"
                    to={process.env.PUBLIC_URL + "/resume.pdf"}
                    className="default_btn"
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

      <div className="car">
        <img src={car} className="img" />
      </div>

      <div className="wheel">
        <img src={wheel} className="img back-wheel" />
        <img src={wheel} className="img front-wheel" />
      </div>
    </section>
  );
};

export default Home;
