import { Link } from "react-router-dom";
import { Wrench, DollarSign, Clock } from "lucide-react";
import React, { useState,  useEffect } from "react";
import ContactUsForm from "../components/ContactUsForm";
import ContactModal from "../components/ContactModal";


// Components
import BestSellers from "../components/BestSellers";
import HeroSlider from "../components/HeroSlider";
import PartnersSection from "../components/PartnersSection";
import ServicesIntro from "../components/ServicesIntro";
import WelcomeSection from "../components/WelcomeSection";


const Home = () => {
 const [showModal, setShowModal] = useState(false);
 const [successMessage, setSuccessMessage] = useState('');


 const handleContactSuccess = (message) => {
  setSuccessMessage(message);   // show success message
  setShowModal(false);          // close the modal
};


useEffect(() => {
  if (successMessage) {
    const timer = setTimeout(() => setSuccessMessage(''), 5000);
    return () => clearTimeout(timer);
  }
}, [successMessage]);



  return (
    <div className="home">
      <HeroSlider />

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <Wrench size={43} className="feature-icon" />
          <h2>High-Quality Machines</h2>
          <p>Durable and efficient equipment for your projects.</p>
        </div>
        <div className="feature">
          <DollarSign size={43} className="feature-icon" />
          <h2>Affordable Pricing</h2>
          <p>Get the best deals on top-notch construction tools.</p>
        </div>
        <div className="feature">
          <Clock size={43} className="feature-icon" />
          <h2>Rapid Response & Delivery</h2>
          <p>24/7 service availability and fast shipping to minimize your downtime.</p>
        </div>
      </section>

      <WelcomeSection />
      <PartnersSection />

      <section
        className="services-intro"
        style={{
          backgroundImage: `url('/images/e1.png')`
        }}
      >
        <div className="services-content">
          <h2>Who We Are and Why It Matters</h2>
          <p>
            At AAA Construction Equipment, we are a proudly family-owned company with deep roots in the construction industry.
            With years of hands-on experience in equipment sales, rentals, and service through a successful past partnership,
            we’ve now taken full ownership of our operations—bringing our own name, values, and vision to the forefront.
          </p>
          <p>
            What makes us different? We understand construction equipment because we’ve been in the field, worked with contractors,
            and solved real-world jobsite challenges. We know what reliable machinery looks like—and what it takes to deliver it.
          </p>
          <p>
            When you work with us, you're not just buying or renting a machine—you’re gaining a long-term partner who cares about your success.
            We treat your business like our own, and we’re here to help you get the job done—on time, and with confidence.
          </p>
          <Link to="/about" className="cta-button2">
            Learn More
          </Link>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="best-sellers-section">
        <BestSellers />
      </section>

      {/* Quote call section */}
      <div className="contact-quote">
      <p>
        Please call for a quote:{" "}
        <a href="tel:+15551234567" className="phone-number phone-box">
           +1 (844) 622-0508
        </a>
      </p>
    </div>

      <ServicesIntro />


      <section className="why-work-with-us">
        <div className="why-content">
          <div className="why-image">
            <img src="/images/st.png" alt="Why Work With Us" />
          </div>
          <div className="why-text">
            <h2>Why Work With Us?</h2>
            <p>
              At AAA Construction Equipment, we’re more than just a supplier — we’re your equipment partner, dedicated to driving your success from the ground up.
            </p>
            <ul>
              <li>Expert Service Team — Certified technicians available for fast, professional repairs both in-shop and on-site.</li>
              <li>Flexible Options — From long-term rentals to full ownership, we tailor equipment solutions to fit your project and budget.</li>
              <li>Top-Tier Brands — We carry trusted names in construction like CAT, Komatsu, Hitachi, and more.</li>
              <li>Custom Solutions — Need a modification or custom fit? Our team can fabricate and fine-tune equipment to match your specs.</li>
              <li>Dependable Parts Access — Get OEM-quality parts quickly and at competitive prices to minimize downtime.</li>
              <li>24/7 Support — We’re always on call when you need us — because jobsite delays aren’t an option.</li>
              <li>Built on Trust — Family-owned, customer-focused, and rooted in honest business practices.</li>
            </ul>
          </div>
        </div>
      </section>

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
        <ContactUsForm onSuccess={handleContactSuccess} />
      </ContactModal>

          {successMessage && (
      <div className="contact-success-banner">
        {successMessage}
      </div>
    )}


    </div>
  );
};

export default Home;
