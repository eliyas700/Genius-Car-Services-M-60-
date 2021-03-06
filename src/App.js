import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import HomePage from "./Pages/Home/HomePage/HomePage";
import ServiceDetail from "./Pages/ServiceDetails/ServiceDetail";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/LogIn/Login";
import SignUp from "./Pages/LogIn/SignUp";
import RequireAuth from "./Pages/LogIn/RequireAuth/RequireAuth";
import CheckOut from "./Pages/CheckOut/CheckOut";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/ManageServices/ManageServices";
import { ToastContainer } from "react-toastify";
import Order from "./Pages/Order/Order";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addService"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageServices />
            </RequireAuth>
          }
        ></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
