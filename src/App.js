import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Header from "./Components/Landing/Header";
import Footer from "./Components/Landing/Footer";
import PrivacyPolicy from "./Components/privacypolicy";
import TermsOfService from "./Components/tos";
import About from "./Pages/About";
import ContactForm from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Projects from "./Pages/Projects";

function App() {

  return (
    <div className="App min-h-screen bg-slate-50 dark:bg-slate-950 -z-40">
      <BrowserRouter>
      <div className=" sticky w-full z-50 top-0 left-0">
        <Header/>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
