import React from "react";
import web from "../Images/home_pic.png";
const About = () => {
  return (
    <section id="about" className="d-flex align-items-center">
      <div className="container-fluid d-flex about-box">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column about-text">
                <h2>About Me</h2>
                <p>
                  Hi! My name is Maah. I am a fourth-year Computer Science
                  student at Western University. Currently, I am interning
                  as a Quality-Assurance Engineer at Royal Bank of Canada (RBC),
                  Mississauga, Ontario.
                  <br />
                  <br />
                  Recently, I have discovered my passion for illustration. Thus, I
                  decided to self-taught myself digital illustration from
                  scratch, and bring creative ideas to life. <br />
                  <br />
                  When I am not coding, or pushing pixels, you'll find me
                  hanging out with friends, working out, or binge-watching on
                  Netflix.
                </p>
              </div>
              <div className=" col-lg-6 order-1 order-lg-2 about-img  justify-content-right ">
                <img src={web} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
