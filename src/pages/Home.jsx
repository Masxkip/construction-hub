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

      <section className="home-about">
  <div className="about-content">
    <h2>About Us</h2>
    <p>
      At ConstructionHub, we provide top-quality construction equipment to meet the needs of professionals worldwide.
      Our goal is to deliver durable, high-performance machinery with unmatched customer service.
      At ConstructionHub, we provide top-quality construction equipment to meet the needs of professionals worldwide.
      Our goal is to deliver durable, high-performance machinery with unmatched customer service.
      At ConstructionHub, we provide top-quality construction equipment to meet the needs of professionals worldwide.
      Our goal is to deliver durable, high-performance machinery with unmatched customer service.
    </p>
    <p>
      At ConstructionHub, we provide top-quality construction equipment to meet the needs of professionals worldwide.
      Our goal is to deliver durable, high-performance machinery with unmatched customer service.
      At ConstructionHub, we provide top-quality construction equipment to meet the needs of professionals worldwide.
      Our goal is to deliver durable, high-performance machinery with unmatched customer service.
      At ConstructionHub, we provide top-quality construction equipment to meet the needs of professionals worldwide.
      Our goal is to deliver durable, high-performance machinery with unmatched customer service.
    </p>
    <Link to="/about" className="learn-more-btn">Learn More</Link>
  </div>
</section>


<section className="why-work-with-us">
  <div className="why-content">
    {/* Left Side - Image */}
    <div className="why-image">
      <img src="/images/st.png" alt="Why Work With Us" />
    </div>

    {/* Right Side - Text Content */}
    <div className="why-text">
      <h2>Why Work With Us?</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, quibusdam! Ipsum nobis, possimus enim molestiae reiciendis sequi animi cum accusantium perferendis esse deleniti ab quam rerum qui laudantium nihil molestias!</p>
      <ul>
        <li> Professional service tailored to your needs.</li>
        <li> Safe and eco-friendly solutions.</li>
        <li> High-performance and durable equipment.</li>
        <li> Competitive pricing with no hidden fees.</li>
        <li> A dedicated team committed to customer satisfaction.</li>
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
