import React from "react";

const ContactUsForm = () => {
  return (
    <form className="contact-form">
      {/* Company Name */}
      <div className="form-group">
        <label>Your Company's Name <span className="required">*</span></label>
        <input type="text" name="companyName" required />
      </div>

      {/* Name */}
      <div className="form-group">
        <label>Your Name</label>
        <div className="name-fields">
          <input type="text" name="firstName" placeholder="First" />
          <input type="text" name="lastName" placeholder="Last" />
        </div>
      </div>

      {/* Address */}
      <div className="form-group">
        <label>Your Company’s Address</label>
        <input type="text" name="street" placeholder="Street Address" />
        <input type="text" name="address2" placeholder="Address Line 2" />
        <div className="address-fields">
          <input type="text" name="city" placeholder="City" />
          <select name="state">
            <option value="">State</option>
            <option value="ON">ON</option>
            <option value="AB">AB</option>
            <option value="BC">BC</option>
            <option value="QC">QC</option>
            {/* Add more provinces or states as needed */}
          </select>
        </div>
        <input type="text" name="zip" placeholder="ZIP Code" />
      </div>

      {/* Phone */}
      <div className="form-group">
        <label>Phone <span className="required">*</span></label>
        <input type="tel" name="phone" required />
      </div>

      {/* Email */}
      <div className="form-group">
        <label>Email <span className="required">*</span></label>
        <input type="email" name="email" required />
      </div>

      {/* Message */}
      <div className="form-group">
        <label>Message / Question <span className="required">*</span></label>
        <textarea name="message" rows="5" required></textarea>
      </div>

      {/* Submit */}
      <div className="form-submit">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default ContactUsForm;
