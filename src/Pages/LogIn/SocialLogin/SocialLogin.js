import React from "react";
import google from "../../../images/Social/google.png";
import facebook from "../../../images/Social/facebook.png";
import github from "../../../images/Social/github.png";
import "./SocialLogin.css";
const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center mx-5 px-2">
        <div
          style={{ height: "1px", width: "43%" }}
          className="ms-3 bg-primary"
        ></div>
        <p className="mt-2 px-2">OR</p>
        <div
          style={{ height: "1px", width: "43%" }}
          className="bg-primary"
        ></div>
      </div>
      <div className="social-icons">
        <button
          style={{ outline: "none" }}
          className="w-75 mb-3 py-2 rounded-pill border-primary"
        >
          <img height={30} src={google} alt="" /> Continue With Google{" "}
        </button>
        <button
          style={{ background: "#384F81" }}
          className="w-75 mb-3 py-2 rounded-pill border-0"
        >
          <img height={30} src={facebook} alt="" />
          <span className="text-white ms-2">Continue With Facebook </span>
        </button>
        <button
          style={{ outline: "none" }}
          className="w-75 py-2 rounded-pill border-secondary"
        >
          <img height={30} src={github} alt="" /> Continue With GitHub{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
