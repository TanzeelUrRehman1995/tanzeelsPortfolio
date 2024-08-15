import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import About from "../components/About";
import Header from "../components/Header";
import Details from "../components/Details";
import TestimonialsFeedback from "../components/TestimonialsFeedback";
import BrandCarousel from "../components/BrandCarousel";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Details />
      <TestimonialsFeedback />
      <BrandCarousel />
      <Pricing />
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}

export default Home;
