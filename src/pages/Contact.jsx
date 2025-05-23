import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="section-st">
    <div className="section-content">
      <h2>Get in Touch with the Experts in Heavy Equipment Sales & Service</h2>
      <br />
      <div className="contact-container">
        {/* Left - Contact Information */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          <br />
          <p><strong>Email:</strong> info@constructionhub.com</p>
          <p><strong>Phone:</strong> +1 555-123-4567</p>
        </div>


        {/* Right - Contact Form */}
        <ContactForm />
      </div>
    </div>
    </section>
    
    
  );
};

export default Contact;
