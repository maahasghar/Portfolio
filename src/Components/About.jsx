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
                <br/>
                <h2>About Me</h2>
                <p>
                  Hi! My name is Maah. I am currently a Senior Software Developer at RBC.
                  <br />
                  I am a dedicated, reliable and proactive Software Engineer with ~1.5 years of experience working on network effect, high scale business as well as enterprise scale application. Large appetite to learn and create delightful user enperiences and robust/efficient applications<br />
                  <br/>
                  During this time, I was part of a fast-paced, start-up environment-like projects where I worked on both the frontend React application, as well backend architecture that used services and tools like IBM InfoSphere Information Server, SQL, Unix Scripting and many more. I worked on projects ranging from helping deign and implement application that analyzes and produces statistically referenced subsets of production data to helping implement monitoring dashboard to effieciently and proactively support the internal internal services of the bank.   
                  <br />
                  <br />
                  <h4>Tools and Technologies</h4>
                  React, Node.js, JavaScript, HTML, CSS, Java, Python, PHP, C/C++, Unix, MySQL, SQL, Git, Github, Jira, AWS, Docker, Unit Testing, E2E Testing.
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
