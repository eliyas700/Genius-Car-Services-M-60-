import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirmPassword.value;
    if (password.length < 6) {
      setError("Password Should be atleast 6 Characters");
    } else {
      if (password === confirmPass) {
        createUserWithEmailAndPassword(email, password);
      } else {
        setError("Sorry ! Password Didn't Match");
        setValidated(false);
      }
    }
  };
  return (
    <div className=" container w-50 mt-3 pb-5">
      <h2 className="text-primary my-3">Register Now</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
        className="w-75 mx-auto text-start"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Type Your Name"
          />

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Invaild Name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Invaild Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Invaild Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            name="confirmPassword"
            type="password"
            placeholder="Re-type Your Password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Password Didnt Match.
          </Form.Control.Feedback>
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button variant="primary" type="submit">
          Register Now
        </Button>
      </Form>
      <p className="py-3">
        Already have an account?{" "}
        <Link className="text-warning text-decoration-none" to="/login">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
