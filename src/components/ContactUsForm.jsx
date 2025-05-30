import React, { useState } from "react";

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

  // Validation
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

  // Form handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      // Here you could call EmailJS, Axios, or your backend
      console.log("Submitted data:", formData);

      // Optional: Clear form
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
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {submitted && (
        <div className="form-success">Your message has been sent successfully!</div>
      )}

      {/* Company Name */}
      <div className="form-group">
        <label>
          Your Company's Name <span className="required">*</span>
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        {errors.companyName && <p className="form-error">{errors.companyName}</p>}
      </div>

      {/* Name */}
      <div className="form-group">
        <label>Your Name</label>
        <div className="name-fields">
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

      {/* Address */}
      <div className="form-group">
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
        <div className="address-fields">
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

      {/* Phone */}
      <div className="form-group">
        <label>
          Phone <span className="required">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="form-error">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label>
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      {/* Message */}
      <div className="form-group">
        <label>
          Message / Question <span className="required">*</span>
        </label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>

      {/* Submit */}
      <div className="form-submit">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default ContactUsForm;
