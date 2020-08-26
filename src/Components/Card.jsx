import React, { Component } from "react";

const Card = (props) => {
  return (
    <div id="card" className="col-lg-4 col-10 mx-auto box">
      <h3>{props.title}</h3>
      <p className=" box-text">{props.text}</p>
      <br />
      <br />
      <a href={props.url} target="_blank" className=" box-button ">
        View Code
      </a>
    </div>
  );
};

export default Card;
