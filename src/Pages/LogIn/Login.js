import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [validated, setValidated] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    !email ? toast("Please Enter Your Email") : toast("Sent email");
    await sendPasswordResetEmail(email);
  };
  return (
    <div className=" container w-50 mt-5 pt-4 pb-5">
      <h2 className="text-primary my-3">Please Log In</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
        className="w-75 mx-auto text-start"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            required
            type="email"
            placeholder="Enter email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Invalid Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            required
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Invaild Email.
          </Form.Control.Feedback>
        </Form.Group>
        <p className="text-danger">{error?.message}</p>
        <div className="social-icons">
          <Button
            variant="primary"
            className="w-100 rounded-pill py-2 my-2"
            type="submit"
          >
            Log In
          </Button>
        </div>
      </Form>
      <p>
        Forget Password?
        <button
          className=" btn btn-link text-warning text-decoration-none"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
      </p>
      <p>
        New to Genius Car?
        <Link
          to="/signup"
          className=" btn btn-link text-warning text-decoration-none"
        >
          Register Now
        </Link>
      </p>
      <div>
        <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Login;
