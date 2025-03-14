import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="footer">
        <div className="footer-container">

          {/* Left Section - Logo & Description */}
          <div className="footer-left">
            <img src="/images/lg2.png" alt="Company Logo" className="footer-logo" />
            <p>
              We provide top-quality construction equipment and reliable service, ensuring you get the best solutions for your projects.
            </p>
          </div>

          {/* Middle Section - Address & Contact Information */}
          <div className="footer-middle">
            <h3>Contact Information</h3>
            <p>📍 123 Main Street, City, Country</p>
            <p>📧 info@constructionhub.com</p>
            <p>📞 +1 555-123-4567</p>
          </div>

          {/* Right Section - Footer Navigation Links */}
          <div className="footer-right">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/inventory">Inventory</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

        </div>
      </footer>

      {/* Footer Bottom (Placed Outside for Full Yellow Background) */}
      <div className="footer-bottom">
        <p>© 2025 ConstructionHub. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
