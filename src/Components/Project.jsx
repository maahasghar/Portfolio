import React from "react";
import Card from "./Card";
import ProjectData from "../ProjectData";
const Project = () => {
  return (
    <section id="projects" className="project-box">
      <h2>My Projects</h2>
      <br />
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {ProjectData.map((val, index) => {
                return (
                  <Card
                    key={index}
                    text={val.text}
                    title={val.title}
                    url={val.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
