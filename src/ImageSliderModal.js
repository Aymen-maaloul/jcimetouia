import React, { useState } from 'react';
import './Modal.css'; // Your modal styling here

const images = [
  '/assest/assise1.jpg',
  '/assest/assise2.jpg',
  '/assest/assise3.jpg',
  '/assest/assise4.jpg',
  '/assest/assise5.jpg',
  '/assest/assise6.jpg'
  // Add more image paths as needed
];
const style = {
  color: '#EDBE38'
};
const ImageSliderModal = ({ isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>×</span>
        <center><h4 style={style}>Autumn Assembly of Zone E for the year 2024</h4></center>
        <div className="image-slider">
          <button style={{ backgroundColor: 'transparent' , border: 'none'  }} onClick={goToPreviousImage}><i class="fas fa-chevron-left"></i></button>
          <img style={{width:'600px'}} src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="slider-image" />
          <button  style={{ backgroundColor: 'transparent' , border: 'none'  }}onClick={goToNextImage}><i class="fas fa-chevron-right"></i></button>
        </div><center>
        <p>
        Here's a more simplified version:

---

JCI Metouia joined the Autumn Assembly, which featured Arabic speech and debate contests and the election of the 2024 Zone E committee. Congratulations to the new committee members. Sarra Fguir earned third place in the Arabic speech contest. Rabeb Bourogaa, Malek Hssan, and Rawen Chalghouma reached the finals in the Arabic debate competition. We appreciate their hard work and dedication.

--- </p></center>
      </div>
    </div>
  );
};

export default ImageSliderModal;
