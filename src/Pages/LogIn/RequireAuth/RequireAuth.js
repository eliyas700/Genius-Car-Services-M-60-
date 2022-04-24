import { async } from "@firebase/util";
import React from "react";
import { ToastContainer } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  console.log(user);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (
    user?.providerData[0]?.providerId === "passwword" &&
    !user.emailVerified
  ) {
    return (
      <div className="mx-auto">
        <h3 className="text-danger">Your email Is not Verified!</h3>
        <h5 className="text-success">Please Verify Your Email </h5>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent Verification  email");
          }}
        >
          Resend Email Ver ification
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
