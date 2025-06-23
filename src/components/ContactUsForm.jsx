import React, { useState } from "react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;


const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    street: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setSubmitted(false);
    return;
  }

  try {
    await axios.post(`${API_URL}/api/contact`, formData);
    setSubmitted(true);
    setErrors({});
    setFormData({
      companyName: "",
      firstName: "",
      lastName: "",
      street: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      message: "",
    });
  } catch (err) {
    console.error("Failed to send contact form:", err);
    setErrors({ form: "Failed to send message. Please try again later." });
  }
};

{errors.form && <p className="contact-form-error">{errors.form}</p>}


  return (
          <form className="contact-form" onSubmit={handleSubmit}>
      {submitted && (
        <div className="contact-form-success">Your message has been sent successfully!</div>
      )}

      <div className="contact-form-group">
        <label>
          Your Company's Name <span className="contact-required">*</span>
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        {errors.companyName && <p className="contact-form-error">{errors.companyName}</p>}
      </div>

      <div className="contact-form-group">
        <label>Your Name</label>
        <div className="contact-name-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contact-form-group">
        <label>Your Company’s Address</label>
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={formData.street}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address2"
          placeholder="Address Line 2"
          value={formData.address2}
          onChange={handleChange}
        />
        <div className="contact-address-fields">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">State</option>
            <option value="ON">ON</option>
            <option value="AB">AB</option>
            <option value="BC">BC</option>
            <option value="QC">QC</option>
          </select>
        </div>
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={formData.zip}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form-group">
        <label>
          Phone <span className="contact-required">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="contact-form-error">{errors.phone}</p>}
      </div>

      <div className="contact-form-group">
        <label>
          Email <span className="contact-required">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="contact-form-error">{errors.email}</p>}
      </div>

      <div className="contact-form-group">
        <label>
          Message / Question <span className="contact-required">*</span>
        </label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="contact-form-error">{errors.message}</p>}
      </div>

      <div className="contact-form-submit">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default ContactUsForm;
