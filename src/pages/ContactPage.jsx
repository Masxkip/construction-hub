import React from "react";
import ContactUsForm from "../components/ContactUsForm"; 
import HeroHeader from "../components/HeroHeader";
import bgImage from "/images/c1.jpg"; 


const ContactPage = () => {
  return (
           <>
      <HeroHeader
        title="Contact Us"
        subtitle="Reach Out Today for Detailed Inquiry "
        backgroundImage={bgImage}
      />
    <div className="contact-page">
      {/* ✅ STEP 1: Page Header */}
      <section className="contact-header">
        <h3>Whether you’re looking for equipment rentals, parts, service, or general inquiries — we’re ready to help.
          Reach out through the form below.</h3>
      </section>

      <section className="contact-map">
        <iframe
          title="AAA Construction Equipment Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.0091935419737!2d-97.07670892309207!3d49.88495337149392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea7154a5391f61%3A0xe7250c74080a3f30!2s727%20Mission%20St%2C%20Winnipeg%2C%20MB%20R2J%203Y3%2C%20Canada!5e0!3m2!1sen!2sca!4v1717691348035!5m2!1sen!2sca"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>


        <section className="contact-main">
        <div className="form-section">
            <ContactUsForm />
        </div>
        <div className="info-section">
            <h2>Contact Information</h2>
            <p><strong>AAA Construction Equipment Market</strong></p>
            <p>727 Mission ST,<br />Winnipeg, MB R2J 3Y3</p>

            <p><strong>Phone:</strong><br /><a href="tel:2892035779"> +1 (844) 622-0508</a></p>
            <p><strong>Email:</strong><br /><a href="mailto:support@aaa.com">info@aaaconstructionequipmentmarket.ca</a></p>
            
            <p><strong>Hours:</strong><br />
            Monday – Friday: 8:00 AM – 6:00 PM<br />
            Saturday: 9:00 AM – 1:00 PM
            </p>
        </div>
        </section>
    </div>
    </>
  );
};

export default ContactPage;
