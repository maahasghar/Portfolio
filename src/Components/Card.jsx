import React from "react";

const Card = (props) => {
  return (
    <div id="card" className="col-lg-2 col-10 mx-auto box gx-4">
      <h3>{props.title}</h3>
      <p className=" box-text">{props.text}</p>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className=" box-button "
      >
        View Code
      </a>
    </div>
  );
};

export default Card;
