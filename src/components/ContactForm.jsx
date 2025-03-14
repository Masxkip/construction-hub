import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send Us a Message</h3>
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <textarea 
        name="message" 
        placeholder="Your Message" 
        value={formData.message} 
        onChange={handleChange} 
        required 
      ></textarea>
      <button type="submit" className="send-btn">Send Message</button>
    </form>
  );
};

export default ContactForm;
