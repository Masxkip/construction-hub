import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Excavators from "./pages/Excavators";
import Loaders from "./pages/Loaders";
import Cranes from "./pages/Cranes";
import Forklifts from "./pages/Forklifts";
import AllInventory from "./pages/AllInventory";
import ItemDetail from "./pages/ItemDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CompanyNews from "./pages/CompanyNews";
import OurTeam from "./pages/OurTeam";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Ensure it's imported
import ServicesLanding from "./pages/ServicesLanding"; 
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
          <Route path="/category/excavators" element={<Excavators />} />
          <Route path="/category/loaders" element={<Loaders />} />
          <Route path="/category/cranes" element={<Cranes />} />
          <Route path="/category/forklifts" element={<Forklifts />} />
          <Route path="/services" element={<ServicesLanding />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
