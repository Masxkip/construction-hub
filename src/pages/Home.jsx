import { Link } from "react-router-dom";
import BestSellers from "../components/BestSellers";
import ContactForm from "../components/ContactForm";
import { Wrench, DollarSign, Truck, Phone } from "lucide-react"; // Import icons

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Reliable Construction Equipment for Every Job</h1>
          <p>Browse our wide range of high-quality construction machinery.</p>
          <Link to="/inventory" className="cta-button">View Inventory</Link>
        </div>
      </section>
      
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
        <Truck size={43} className="feature-icon" />
        <h2>Fast & Secure Delivery</h2>
        <p>We ensure timely delivery to your site.</p>
      </div>
    </section>


       <section className="home-about">
  <div className="about-content">
    <h2>About Us</h2>
    <p>
     At Company Wrench, we are dedicated to providing powerful, high-performance heavy equipment solutions to meet the demands of construction, demolition, recycling, and forestry professionals across the country. Whether you’re looking to rent or buy, our wide selection of machines and attachments is backed by expert support and unmatched customer care.

    Founded with a problem-solving mindset, we’ve grown from a small business into a trusted name in the industry with 13 locations nationwide. We proudly partner with top manufacturers like LaBounty, Kobelco, JCB, and SANY to ensure we offer only the best tools for the job. From excavators to specialty attachments, our team is committed to delivering the “Cutting Edge” of Customer Service.

    We believe in building lasting partnerships through safety, honesty, and teamwork. In 2018, we strengthened our commitment to our people by becoming an employee-owned company, empowering our staff to serve customers like family. With over two decades of growth, our mission remains the same — to solve problems, support our customers, and deliver exceptional value every step of the way.
    </p>
    <Link to="/about" className="learn-more-btn">Learn More</Link>
  </div>
</section>



      {/* Best Sellers Section */}
      <section className="best-sellers-section">
        <BestSellers />
      </section>

      {/* Quote call section */}
      <div className="contact-quote">
      <Phone className="phone-icon" size={30} />
      <p>
        Please call for a quote:{" "}
        <a href="tel:+15551234567" className="phone-number">
          +1 555-123-4567
        </a>
      </p>
    </div>

   

<section className="why-work-with-us">
  <div className="why-content">
    {/* Left Side - Image */}
    <div className="why-image">
      <img src="/images/st.png" alt="Why Work With Us" />
    </div>

    {/* Right Side - Text Content */}
    <div className="why-text">
      <h2>Why Work With Us?</h2>
<p>
At Company Wrench, we don’t just sell or rent equipment — we build lasting partnerships through unmatched service, innovation, and integrity. With over two decades of industry leadership, 13 U.S. locations, and a family-first culture, we offer more than machines — we offer solutions. From specialized equipment to 24/7 support, we go the extra mile to keep your operation moving.
</p>
<ul>
  <li>Expertly trained service technicians for both on-site and in-shop repairs.</li>
  <li>Flexible rental and purchase options for industry-leading equipment.</li>
  <li>Certified dealers of top brands like Kobelco, JCB, SANY, and Fuchs.</li>
  <li>Custom fabrication and modifications to meet your project needs.</li>
  <li>Employee-owned culture focused on safety, honesty, and customer satisfaction.</li>
  <li>Round-the-clock service and preventative maintenance solutions.</li>
  <li>Access to OEM-quality parts at competitive prices.</li>
      </ul>
    </div>
  </div>
</section>


      <section className="home-contact">
  <h2>Get in Touch</h2>
  <div className="contact-form-wrapper">
    <ContactForm />
  </div>
</section>


{/* Footer Section */}


    </div>
  );
};

export default Home;
