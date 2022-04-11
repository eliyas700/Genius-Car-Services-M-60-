import "./App.css";
import { Routes, Route } from "react-router-dom";
import Services from "./Pages/Home/Services";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import HomePage from "./Pages/Home/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
