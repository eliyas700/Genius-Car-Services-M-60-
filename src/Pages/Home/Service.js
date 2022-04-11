import React from "react";
import "./Services.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className=" service-name">
      <img className="" src={img} alt="" />
      <div className="service">
        <h3>{name}</h3>
        <p>
          <small>{description}</small>
        </p>
        <h4> $ {price}</h4>
        <button className="btn btn-primary">Book {name}</button>
      </div>
    </div>
  );
};

export default Service;
