import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

