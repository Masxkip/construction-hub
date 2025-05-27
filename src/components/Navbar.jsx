import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import excavatorsData from "../data/excavatorsData";
import loadersData from "../data/loadersData";
import forkliftsData from "../data/forkliftsData";
import cranesData from "../data/cranesData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation(); // Detects route changes

  // Close mobile menu, dropdown, and search bar when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
    setSearchResults([]); // Clear search results on new page load
  }, [location.pathname]);

  // Combine all categories into one array
  const allItems = [...excavatorsData, ...loadersData, ...forkliftsData, ...cranesData];

  // Handle Search Functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    // Filter items from all categories
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredItems = allItems.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setSearchResults(filteredItems);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">

      </div>

      <div className="branding">
  <Link to="/" className="logo-link">
    <img src="/images/aab1.png" alt="AAA Logo" className="logo-img" />
  </Link>
</div>

     
      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/our-team">Our Team</Link></li>
        <li><Link to="/company-news">Company News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="nav-cta">
          <a href="tel:+15551234567" className="call-us-btn">Call Us Now</a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsOpen(true)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          <ul className="mobile-links">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About us</Link></li>
            <li><Link to="/inventory" onClick={() => setIsOpen(false)}>Inventory</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/company-news">Company News</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}

      {/* 🔥 Mobile Search Dropdown 🔥 */}
      {searchOpen && (
        <div className="search-dropdown">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* Display Search Results */}
          {searchResults.length > 0 && (
            <ul className="search-results">
              {searchResults.map((item) => (
                <li key={item.id}>
                  <Link to={`/inventory/item/${item.id}`} onClick={() => setSearchTerm("")} className="search-li">
                    {item.name} - {item.price}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
