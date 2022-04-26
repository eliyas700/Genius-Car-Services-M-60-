import React from "react";
import google from "../../../images/Social/google.png";
import facebook from "../../../images/Social/facebook.png";
import github from "../../../images/Social/github.png";
import "./SocialLogin.css";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p>Error: {error?.message || error1?.message}</p>
      </div>
    );
  }
  if (user || user1) {
    navigate(from, { replace: true });
  }
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
        <p className="text-danger">{errorElement}</p>
        <button
          onClick={() => signInWithGoogle()}
          style={{ outline: "none" }}
          className="w-75 mb-3 py-2 rounded-pill border-primary"
        >
          <img height={30} src={google} alt="" /> Continue With{" "}
          {loading ? "Loading" : "Google"}
        </button>
        <button
          style={{ background: "#384F81" }}
          className="w-75 mb-3 py-2 rounded-pill border-0"
        >
          <img height={30} src={facebook} alt="" />
          <span className="text-white ms-2">Continue With Facebook </span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          style={{ outline: "none" }}
          className="w-75 py-2 rounded-pill border-secondary"
        >
          <img height={30} src={github} alt="" /> Continue With{" "}
          {loading1 ? "Loading" : "GitHub"}{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
