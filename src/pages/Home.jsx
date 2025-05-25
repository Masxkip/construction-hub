import { Link } from "react-router-dom";
import BestSellers from "../components/BestSellers";
import ContactForm from "../components/ContactForm";
import { Wrench, DollarSign, Clock, Phone } from "lucide-react"; // Import icons
import HeroSlider from "../components/HeroSlider";
import PartnersSection from "../components/PartnersSection";
import ServicesIntro from "../components/ServicesIntro";
import WelcomeSection from "../components/WelcomeSection";

const Home = () => {
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

    <section className="home-about">
  <div className="about-content">
    <h2>Who We Are and Why It Matters</h2>
    <p>
      We’re not just a heavy equipment dealer — we’re the team you call when “good enough” isn’t good enough. At Company Wrench, we specialize in selling, renting, and servicing the toughest machines in the industry — but what truly sets us apart is how we do it.
    </p>
    <p>
      Built on a foundation of grit, innovation, and relentless customer focus, we’ve grown from a small Ohio shop into a nationwide leader with 13 branches and a reputation for solving problems others can’t. Our fleet is packed with trusted names like Kobelco, JCB, SANY, and LaBounty, and our technicians don’t just fix problems — they prevent them.
    </p>
    <p>
      We run 24/7, respond fast, and deliver even faster. From emergency on-site repairs to massive part inventories and mobile service trucks, we’re built for uptime. And because we believe service starts from within, we became 100% employee-owned — giving every member of our team a stake in your success.
    </p>
    <p>
      If you need machines that move mountains and a crew that moves faster — welcome to Company Wrench. This is the **Cutting Edge of Customer Service.**
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

     {/* Other sections */}
      <ServicesIntro />

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
  <h2>Let’s Talk – Your Equipment Partnership Starts Here</h2>
  <div className="contact-form-wrapper">
    <ContactForm />
  </div>
</section>


{/* Footer Section */}


    </div>
  );
};

export default Home;
