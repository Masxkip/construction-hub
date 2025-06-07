import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi"; // ✅ Import the phone icon

const slides = [
  {
    image: "/images/c1.jpg",
    title: "Reliable Construction Equipment for Every Job",
    subtitle: "Browse our wide range of high-quality construction machinery.",
    button: "View Inventory",
    link: "/inventory"
  },
  {
    image: "/images/e2.jpg",
    title: "Heavy-Duty Machines Built to Last",
    subtitle: "Powerful tools for construction, demolition, and beyond.",
    button: "Explore Equipment",
    link: "/equipment"
  },
  {
    image: "/images/hn1.jpg",
    title: "Innovative Solutions, Trusted Brands",
    subtitle: "Partner with us for premium machinery and expert service.",
    button: "Get Started",
    link: "/contact"
  }
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[index];

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
      }}
    >
      <button className="nav-arrow left" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="hero-content">
        <h1>{currentSlide.title}</h1>
        <p>{currentSlide.subtitle}</p>
        <Link to={currentSlide.link} className="cta-button1">
          {currentSlide.button}
        </Link>
        
        {/* ✅ Call CTA Button */}
        <a href="tel:+1234567890" className="cta-button1 call-button">
          <FiPhoneCall style={{ marginRight: "8px" }} />
          Call: +1 (844) 622-0508
        </a>
      </div>
      <button className="nav-arrow right" onClick={goToNext}>
        &#10095;
      </button>
    </section>
  );
};

export default HeroSlider;
