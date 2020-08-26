import React, { useState } from "react";

import "font-awesome/css/font-awesome.min.css";

const Contact = () => {
  return (
    <section id="contact" className="Contact">
      <h2>Contact Me</h2>

      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <a
              target="_blank"
              className="icon-style"
              href="mailto:maahasghar@hotmail.com"
            >
              <i className="fa fa-envelope-square "></i>
            </a>
            <a
              target="_blank"
              className="icon-style"
              href="https://www.linkedin.com/in/maah-asghar-697188198/"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              className="icon-style"
              href="https://github.com/maahasghar"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
