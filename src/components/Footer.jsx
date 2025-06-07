import { Link } from "react-router-dom";
import React, { useState } from "react";
import ContactUsForm from "../components/ContactUsForm";
import ContactModal from "../components/ContactModal";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
       <section className="cta-contact-us">
  <div className="cta-content">
    <h2>Need Help or a Custom Quote?</h2>
    <p>Our team is ready to assist you with sales, rentals, service, and everything in between.</p>
    <button
      onClick={() => setShowModal(true)}
      className="contact-button"
    >
      Contact Us
    </button>
  </div>
</section>
      {/* Contact Modal */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ContactUsForm />
      </ContactModal>

     {/* Quote call section */}
      <div className="contact-quote">
      <p>
        Please call for a quote:{" "}
        <a href="tel:+15551234567" className="phone-number phone-box">
           +1 (844) 622-0508
        </a>
      </p>
    </div>

      <footer className="footer">
        <div className="footer-container">

          {/* Left Section - Logo & Description */}
          <div className="footer-left">
            <img src="/images/aab1.png" alt="Company Logo" className="footer-logo" />
         <p>
  With 20+ years in the construction industry, we specialize in equipment sales, servicing, and genuine parts. Our team is committed to providing reliable machines and expert support to keep your projects running smoothly.
</p>


          </div>

          {/* Middle Section - Address & Contact Information */}
          <div className="footer-middle">
            <h3>Contact Information</h3>
            <p>📍 727 Mission ST, Winnipeg, MB R2J 3Y3</p>
            <p>info@aaaconstructionequipmentmarket.ca</p>
            <p>📞  +1 (844) 622-0508</p>
          </div>

          {/* Right Section - Footer Navigation Links */}
          <div className="footer-right">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/inventory">Inventory</Link></li>
              <li><Link to="/contact">Services</Link></li>
              <li><Link to="/contact">Our Team</Link></li>
              <li><Link to="/contact">Company News</Link></li>
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
