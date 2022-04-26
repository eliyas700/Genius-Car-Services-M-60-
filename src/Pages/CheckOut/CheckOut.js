import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../Hooks/useServiceDetails";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  return (
    <div>
      <h4>Please Check Out</h4>
      <p>{service.name}</p>
    </div>
  );
};

export default CheckOut;
