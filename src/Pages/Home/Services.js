import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://obscure-headland-04507.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="container">
      <div className="">
        <h1 className=" my-3 text-primary text-center">Our Services</h1>
        <div className="service-container">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
