import React from "react";
import "./App.css";
import Navigation from "./Header/Navigation";
import MyRouter from "./Header/MyRouter";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer/Footer";

// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <MyRouter />
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
