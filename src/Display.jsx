import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const Display = () => {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Display;
