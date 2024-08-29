import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>×</span>
        <img src={image} alt="slider" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
