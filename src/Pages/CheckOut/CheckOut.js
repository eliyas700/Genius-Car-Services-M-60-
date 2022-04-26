import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../Hooks/useServiceDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);
  console.log(user);
  const handleProccedOrder = (event) => {
    event.preventDefault();
    const orderInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      serviceId: { serviceId },
      service: event.target.service.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/order", orderInfo).then((response) => {
      console.log(response);
      const { data } = response;
      if (data.insertedId) {
        toast("Congratulations! Your Order Confirmed");
        event.target.reset();
      }
    });
  };
  return (
    <div>
      <h4>Order Now:{service.name}</h4>
      <form onSubmit={handleProccedOrder} className="w-50 mx-auto">
        <input
          className="mb-2 w-100"
          type="text"
          name="name"
          value={user?.displayName}
          placeholder="Your Name"
        />
        <br />
        <input
          className="mb-2 w-100"
          type="email"
          name="email"
          value={user?.email}
          placeholder="Your Email"
        />
        <br />
        <input
          className="mb-2 w-100"
          type="text"
          name="service"
          value={service.name}
        />
        <br />
        <input
          className="mb-2 w-100"
          type="text"
          name="address"
          placeholder="Your Address"
        />
        <br />
        <input
          className="mb-2 w-100"
          type="number"
          name="phone"
          placeholder="Your Phone Number"
        />
        <br />
        <input className="btn-primary " type="submit" value="Proceed Order" />
      </form>
    </div>
  );
};

export default CheckOut;
