// components/ContactModal.jsx
import React from 'react';

const ContactModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop">
        {/* Inner Modal Box that includes the form and the close button */}
        <div className="modal-content-box">
          <button
            onClick={onClose}
            className="modal-close-button"
            aria-label="Close"
          >
            ×
          </button>

          {/* Form Title */}
          <h2 className="modal-title" style={{ textAlign: "center" }}>Contact Us</h2>


          {/* Render the form passed in */}
          <div className="modal-form-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
