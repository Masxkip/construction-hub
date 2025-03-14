import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import excavatorsData from "../data/excavatorsData";
import loadersData from "../data/loadersData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation(); // Detects route changes

  // Close mobile menu, dropdown, and search bar when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setSearchOpen(false);
    setSearchResults([]); // Clear search results on new page load
  }, [location.pathname]);

  // Combine all categories into one array
  const allItems = [...excavatorsData, ...loadersData];

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
        {/* Mobile Search Icon */}
        <button className="search-icon" onClick={() => setSearchOpen(!searchOpen)}>🔍</button>
      </div>

      {/* Logo */}
      <div className="logo">
  <img src="/images/lg2.png" alt="ConstructionHub Logo" className="logo-img" />
</div>

      {/* Desktop Search Bar */}
      <div className="search-bar-desktop">
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

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Inventory Dropdown */}
        <li className="dropdown">
          <Link to="/inventory">Inventory</Link>
          <button onClick={() => setDropdownOpen(!dropdownOpen)}> ▼ </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/category/excavators">Excavators</Link></li>
              <li><Link to="/category/loaders">Loaders</Link></li>
              <li><Link to="/category/cranes">Cranes</Link></li>
              <li><Link to="/category/forklifts">Forklifts</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/shipping">Shipping</Link></li>
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
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            {/* Inventory Dropdown in Mobile */}
            <li className="dropdown">
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                Inventory ▼
              </button>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/inventory" onClick={() => setIsOpen(false)}>All Inventory</Link></li>
                  <li><Link to="/category/excavators" onClick={() => setIsOpen(false)}>Excavators</Link></li>
                  <li><Link to="/category/loaders" onClick={() => setIsOpen(false)}>Loaders</Link></li>
                  <li><Link to="/category/cranes" onClick={() => setIsOpen(false)}>Cranes</Link></li>
                  <li><Link to="/category/forklifts" onClick={() => setIsOpen(false)}>Forklifts</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/products" onClick={() => setIsOpen(false)}>Financing</Link></li>
            <li><Link to="/shipping" onClick={() => setIsOpen(false)}>Shipping</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}

      {/* Mobile Search Dropdown */}
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
                  <Link to={`/inventory/item/${item.id}`} onClick={() => setSearchTerm("")} className="search-lii">
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
