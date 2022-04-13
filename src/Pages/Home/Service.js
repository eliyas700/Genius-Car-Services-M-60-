import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  const handleServiceDetail = (id) => {
    navigate(`service/${id}`);
  };
  return (
    <div className=" service-name">
      <img className="" src={img} alt="" />
      <div className="service">
        <h3>{name}</h3>
        <p>
          <small>{description}</small>
        </p>
        <h4> $ {price}</h4>
        <button
          onClick={() => handleServiceDetail(id)}
          className="btn btn-primary"
        >
          Book {name}
        </button>
      </div>
    </div>
  );
};

export default Service;
