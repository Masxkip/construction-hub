import { Link } from "react-router-dom";

const ServicesLanding = () => {
  return (
    <section className="services-landing">

      {/* Intro Section */}
      <div className="intro">
        <h2>AAA Construction Services & Parts</h2>
        <p>
          At AAA Constructions, we don’t just sell equipment — we support your operations end to end.
          From premium machine parts to expert servicing, our goal is to keep your fleet productive
          and your costs low. Explore the various services and solutions we offer to support every
          phase of your equipment’s life cycle.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-item">
          <img src="/images/parts/undercarriage.png" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Compact Wheel & Undercarriage Parts</h3>
          <p>
            We provide premium rubber tracks and tires for track loaders, mini excavators, and skid steers.
            Our inventory includes solid tires, idlers, sprockets, and other undercarriage essentials,
            all engineered for durability and performance.
          </p>
        </div>

       <div className="service-item">
          <img src="/images/parts/undercarriage.png" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Compact Wheel & Undercarriage Parts</h3>
          <p>
            We provide premium rubber tracks and tires for track loaders, mini excavators, and skid steers.
            Our inventory includes solid tires, idlers, sprockets, and other undercarriage essentials,
            all engineered for durability and performance.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/parts/undercarriage.png" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Compact Wheel & Undercarriage Parts</h3>
          <p>
            We provide premium rubber tracks and tires for track loaders, mini excavators, and skid steers.
            Our inventory includes solid tires, idlers, sprockets, and other undercarriage essentials,
            all engineered for durability and performance.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/parts/undercarriage.png" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Compact Wheel & Undercarriage Parts</h3>
          <p>
            We provide premium rubber tracks and tires for track loaders, mini excavators, and skid steers.
            Our inventory includes solid tires, idlers, sprockets, and other undercarriage essentials,
            all engineered for durability and performance.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/parts/undercarriage.png" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Compact Wheel & Undercarriage Parts</h3>
          <p>
            We provide premium rubber tracks and tires for track loaders, mini excavators, and skid steers.
            Our inventory includes solid tires, idlers, sprockets, and other undercarriage essentials,
            all engineered for durability and performance.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/parts/undercarriage.png" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Compact Wheel & Undercarriage Parts</h3>
          <p>
            We provide premium rubber tracks and tires for track loaders, mini excavators, and skid steers.
            Our inventory includes solid tires, idlers, sprockets, and other undercarriage essentials,
            all engineered for durability and performance.
          </p>
        </div>
      </div>

      {/* Inquiry & CTA */}
      <div className="cta-inquiry">
        <p>
          Looking for the right part or service? Contact us today to get expert guidance and the best
          market prices on quality equipment solutions.
        </p>
        <Link to="/contact" className="cta-button">Get In Touch</Link>
      </div>
    </section>
  );
};

export default ServicesLanding;
