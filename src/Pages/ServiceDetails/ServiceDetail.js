import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../Hooks/useServiceDetails";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  return (
    <div>
      <h2>i am from Service Detail:{service.name}</h2>
      <Link to={`/checkout/${serviceId}`}>
        <button className="btn btn-primary">Check out</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
