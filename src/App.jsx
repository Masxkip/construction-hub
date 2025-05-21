import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Excavators from "./pages/Excavators";
import Loaders from "./pages/Loaders";
import Cranes from "./pages/Cranes"; // Import Cranes Page
import Forklifts from "./pages/Forklifts"; // Import Forklifts Page
import AllInventory from "./pages/AllInventory";
import ItemDetail from "./pages/ItemDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CompanyNews from "./pages/CompanyNews";
import OurTeam from "./pages/OurTeam"; 
import "./index.css";

function App() {
  return (
    <Router>
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company-news" element={<CompanyNews />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/Footer" element={<Footer />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
