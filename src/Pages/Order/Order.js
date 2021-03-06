import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import axiosPrivate from "../API/axiosPrivate";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      // fetch(`https://obscure-headland-04507.herokuapp.com/order?email=${email}`)
      //   .then((res) => res.json())
      //   .then((data) => setOrders(data));
      const url = `https://obscure-headland-04507.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div>
      <h2>This Is from Order Section:{orders.length}</h2>
      {orders.map((order) => (
        <>
          <h3>
            {order?.email} -{" "}
            <span className="text-success">{order?.service}</span>
          </h3>
        </>
      ))}
    </div>
  );
};

export default Order;
