import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllInventory from "./pages/AllInventory";
import ItemDetail from "./pages/ItemDetail";
import About from "./pages/About";
import Footer from "./components/Footer";
import CompanyNews from "./pages/CompanyNews";
import OurTeam from "./pages/OurTeam";
import ScrollToTop from "./components/ScrollToTop";
import ServicesLanding from "./pages/ServicesLanding"; 
import ContactPage from "./pages/ContactPage"; 
import "./index.css";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Add this right after Router starts */}
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory/item/:id" element={<ItemDetail />} />
          <Route path="/inventory" element={<AllInventory />} />
          <Route path="/services" element={<ServicesLanding />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/company-news" element={<CompanyNews />} />
          <Route path="/our-team" element={<OurTeam />} />
          {/* ⚠️ This line is not necessary unless you want a dedicated page for the footer */}
          {/* <Route path="/Footer" element={<Footer />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
