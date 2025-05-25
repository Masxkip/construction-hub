import { Link } from "react-router-dom";

const ServicesIntro = () => {
  return (
    <section
      className="services-intro"
      style={{
        backgroundImage: `url('/images/services-bg.jpg')`
      }}
    >
      <div className="services-content">
        <h2>At AAA Constructions</h2>
        <h3>
          We don't just offer sales — we also specialize in parts and professional services.
        </h3>
        <p>
          Our commitment goes beyond just supplying construction equipment. We provide tailored
          solutions for contractors and developers who rely on dependable, high-performance machinery.
          Whether you’re purchasing a brand new machine or looking for a specific part to keep your fleet
          running, AAA Constructions is your one-stop shop.
        </p>
        <p>
          From genuine OEM parts to expert servicing and diagnostics, our team of professionals ensures
          your equipment performs at its peak. We stock a comprehensive inventory of components for top
          industry brands and offer full-service maintenance including engine tuning, hydraulics,
          electrical repairs, and preventive checkups.
        </p>
        <p>
          With years of experience in construction technology and field support, we’ve built a reputation
          on reliability, quick turnaround, and premium quality. When you work with us, you're getting
          more than a supplier — you're gaining a long-term equipment partner.
        </p>

        <Link to="/services" className="cta-button">
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesIntro;
