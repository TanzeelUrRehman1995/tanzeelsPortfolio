import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Aboutpage from "./pages/Aboutpage";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


function App() {
  useEffect(()=> {
    Aos.init();
  }, []);
  return (
    <>
      <Router basename="tanzeelsportfolio">
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/ContactUs" element={<ContactForm  />} />
          <Route path="/About" element={<Aboutpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
