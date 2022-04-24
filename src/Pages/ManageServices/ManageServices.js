import React from "react";
import useServices from "../Hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto text-start">
      <h2 className="text-secondary my-3">Manage Your Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(service._id)}
            >
              X
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
