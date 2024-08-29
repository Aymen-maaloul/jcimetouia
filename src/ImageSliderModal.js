import React, { useState } from 'react';
import './ImageSlider.css'; // Import the CSS file for styling

const ImageSliderModal = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageData = [
    { image: 'assest/rnp1.png', description: 'We are a non-profit organization with a membership of 3,625 active members aged 18 to 40 and over 15,000 former members across more than 150 local organizations throughout Tunisia. Each JCI member shares the philosophy that to create positive change, we must improve ourselves as well as the world around us. We are therefore seeking solutions tailored to the specific problems of our communities in order to build a better world and create a global impact.' },
    { image: 'assest/rnp1.png', description: 'Description for Keswet Laid' },
    { image: 'assest/rnp1.png', description: 'Description for Upgrade' },
    { image: 'assest/rnp1.png', description: 'Description for Choose' },
  ];

  if (!isOpen) return null; // Don't render the modal if it's not open

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&#10006;</button>
        <div className="slider">
          <img src={imageData[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
          <p>{imageData[currentSlide].description}</p>
          <button className="prev-button" onClick={prevSlide}>&laquo;</button>
          <button className="next-button" onClick={nextSlide}>&raquo;</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderModal;
