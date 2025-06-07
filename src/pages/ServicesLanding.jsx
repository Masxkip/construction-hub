import { Link } from "react-router-dom";
import PartnersSection from "../components/PartnersSection";
import ContactUsForm from "../components/ContactUsForm"; // ✅ Renamed import
import ContactModal from "../components/ContactModal";    // ✅ Modal component
import React, { useState } from "react";
import HeroHeader from "../components/HeroHeader";
import bgImage from "/images/c1.jpg"; 

const ServicesLanding = () => {
  const [showModal, setShowModal] = useState(false); // ✅ State placed correctly

  return (
             <>
      <HeroHeader
        title="Our Services"
        subtitle="Learn More About Our Services We Offer"
        backgroundImage={bgImage}
      />
    <section className="services-landing">

      {/* Intro Section */}
      <div className="intro">
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
          <img src="/images/Se9.jpg" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Aftermarket Undercarriage Parts</h3>
          <p>
            Access our large inventory of undercarriage parts for excavators, dozers, track loaders, material handlers, crushing & screening equipment, and more. 
            Our inventory includes: track pads, idler assemblies, top rollers, bottom rollers, track chains, master links, drive sprockets, track adjusters, street pads, recoil assemblies, and clip-on rubber pads.
          </p>
        </div>

       <div className="service-item">
          <img src="/images/Se5.jpg" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Compact Wheel & Undercarriage Parts</h3>
          <p>
            We provide premium rubber tracks and tires for track loaders, mini excavators, and skid steers.
            Our inventory includes solid tires, idlers, sprockets, and other undercarriage essentials,
            all engineered for durability and performance.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/Se3.jpg" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Ground Engaging Tools & Parts</h3>
          <p>
           We stock a variety of ground engaging tools and parts to fit almost any bucket, scraper, or loader on the market at affordable prices.
          We offer: bucket teeth, cutting edges, chocky bars, broom bristle brushes, side cutters, tooth bars, rubber scrapers, wear buttons, compactor feet, and road milling bits.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/Se4.jpg" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Hydraulic Breaker/Hammer Parts</h3>
          <p>
           We stock a wide variety of aftermarket and OEM hammer parts for any brand hydraulic breaker. From small skid steer mounted hammers, to large excavator mounted breakers, we have a few to choose from. Our OEM parts selection includes trusted brands, such as LaBounty, Stanley, Paladin, Indeco, Allied, Kent, Furukawa, and more!
          We offer: Hammer bits, tool bushings, diaphragms, and seal kits.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/Se7.jpg" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Mobile Shear Attachment Parts</h3>
          <p>
           Our readily available inventory and industry leading pricing have built a solid reputation in the demolition and recycling industries for being the first choice for LaBounty blade kits. 
          Full blade kits include: cutting blades, piercing tips, guide blades, cross blades, shims, and fasteners.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/Se8.jpg" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Sweeping Equipment Parts</h3>
          <p>
            We supply replacement brooms and brushes for sweeping debris and light snow removal applications.  
            We offer: angle brooms, tube brooms, and gutter brooms.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/Se1.jpg" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Chipper & Stump Grinder Parts </h3>
          <p>
            We stock knives & hardware, anvils & hardware, filters, clutch replacement parts, replacement belts, and lubricants & coolants.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/Se6.jpg" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Mulching Equipment Parts</h3>
          <p>
            We offer mulching teeth, rotor systems, filter kits, cutting knives, lubricants, and cab guards.
          </p>
        </div>

        <div className="service-item">
          <img src="/images/Se2.jpg" alt="Compact Wheel & Undercarriage Parts" />
          <h3>Fork Carriage Parts</h3>
          <p>
           We carry a large selection of Fork Carriage Parts and Replacement Fork Tines.
          </p>
        </div>

      </div>
       <PartnersSection />

        <section className="cta-contact-us"  style={{ backgroundColor: "white" }}>
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
    </section>
     </>
  );
};

export default ServicesLanding;
