import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Aboutpage() {
  return (
    <div>
      <Header />
      <About padding={"48"} />
      <Footer />
    </div>
  );
}

export default Aboutpage;
