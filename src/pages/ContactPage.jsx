import React from "react";
import ContactUsForm from "../components/ContactUsForm"; 


const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* ✅ STEP 1: Page Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Whether you’re looking for equipment rentals, parts, service, or general inquiries — we’re ready to help.
          Reach out through the form below or contact us directly.
        </p>
      </section>

        <section className="contact-map">
        <iframe
            title="AAA Construction Equipment Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.551130906881!2d-79.65093968492302!3d43.589045979123714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b464f7bb0c4ef%3A0x548f020efffd364e!2s390%20Marf%20Ave%2C%20Mississauga%2C%20ON%20L5G%201T1%2C%20Canada!5e0!3m2!1sen!2sca!4v1680902715555!5m2!1sen!2sca"
            width="100%"
            height="400"
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
            <p><strong>AAA Construction Equipment</strong></p>
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
  );
};

export default ContactPage;
