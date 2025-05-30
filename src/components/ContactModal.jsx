// components/ContactModal.jsx
import React from 'react';

const ContactModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-slide-in">
        <button
          onClick={onClose}
          className="modal-close-button"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="modal-title">Contact Us</h2>

        <div className="modal-form-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
