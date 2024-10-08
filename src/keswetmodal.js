import React, { useState } from 'react';
import './ImageSlider.css'; 

const KeswetModal = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageData = [
    { image: 'assest/kimage1.jpg', description: "En croyant fermement en cette devise, " + "servir l'humanité est le travail le plus noble de la vie" + ", la campagne de distribution de vêtements de fête se poursuit pour la huitième année consécutive sous le nom de " + 'kesswet l’aïd 8 ' + ". Cet événement vise à fournir de nouveaux vêtements de fête au plus grand nombre possible d'enfants issus de familles nécessiteuses, en s'appuyant sur les contributions des habitants de la ville, tant à l'intérieur qu'à l'extérieur." },
    { image: 'assest/kimage2.jpg', description: "En croyant fermement en cette devise, " + "servir l'humanité est le travail le plus noble de la vie" + ", la campagne de distribution de vêtements de fête se poursuit pour la huitième année consécutive sous le nom de " + 'kesswet l’aïd 8 ' + ". Cet événement vise à fournir de nouveaux vêtements de fête au plus grand nombre possible d'enfants issus de familles nécessiteuses, en s'appuyant sur les contributions des habitants de la ville, tant à l'intérieur qu'à l'extérieur." },
    { image: 'assest/kimage3.jpg', description: "En croyant fermement en cette devise, " + "servir l'humanité est le travail le plus noble de la vie" + ", la campagne de distribution de vêtements de fête se poursuit pour la huitième année consécutive sous le nom de " + 'kesswet l’aïd 8 ' + ". Cet événement vise à fournir de nouveaux vêtements de fête au plus grand nombre possible d'enfants issus de familles nécessiteuses, en s'appuyant sur les contributions des habitants de la ville, tant à l'intérieur qu'à l'extérieur." },
    { image: 'assest/kimage4.jpg', description: "En croyant fermement en cette devise, " + "servir l'humanité est le travail le plus noble de la vie" + ", la campagne de distribution de vêtements de fête se poursuit pour la huitième année consécutive sous le nom de " + 'kesswet l’aïd 8 ' + ". Cet événement vise à fournir de nouveaux vêtements de fête au plus grand nombre possible d'enfants issus de familles nécessiteuses, en s'appuyant sur les contributions des habitants de la ville, tant à l'intérieur qu'à l'extérieur." },
    { image: 'assest/kimage5.jpg', description: "En croyant fermement en cette devise, " + "servir l'humanité est le travail le plus noble de la vie" + ", la campagne de distribution de vêtements de fête se poursuit pour la huitième année consécutive sous le nom de " + 'kesswet l’aïd 8 ' + ". Cet événement vise à fournir de nouveaux vêtements de fête au plus grand nombre possible d'enfants issus de familles nécessiteuses, en s'appuyant sur les contributions des habitants de la ville, tant à l'intérieur qu'à l'extérieur." },
    { image: 'assest/kimage6.jpg', description: "En croyant fermement en cette devise, " + "servir l'humanité est le travail le plus noble de la vie" + ", la campagne de distribution de vêtements de fête se poursuit pour la huitième année consécutive sous le nom de " + 'kesswet l’aïd 8 ' + ". Cet événement vise à fournir de nouveaux vêtements de fête au plus grand nombre possible d'enfants issus de familles nécessiteuses, en s'appuyant sur les contributions des habitants de la ville, tant à l'intérieur qu'à l'extérieur." },
    { image: 'assest/kimage7.jpg', description: "En croyant fermement en cette devise, " + "servir l'humanité est le travail le plus noble de la vie" + ", la campagne de distribution de vêtements de fête se poursuit pour la huitième année consécutive sous le nom de " + 'kesswet l’aïd 8 ' + ". Cet événement vise à fournir de nouveaux vêtements de fête au plus grand nombre possible d'enfants issus de familles nécessiteuses, en s'appuyant sur les contributions des habitants de la ville, tant à l'intérieur qu'à l'extérieur." },
    { image: 'assest/kimage8.jpg', description: "En croyant fermement en cette devise, " + "servir l'humanité est le travail le plus noble de la vie" + ", la campagne de distribution de vêtements de fête se poursuit pour la huitième année consécutive sous le nom de " + 'kesswet l’aïd 8 ' + ". Cet événement vise à fournir de nouveaux vêtements de fête au plus grand nombre possible d'enfants issus de familles nécessiteuses, en s'appuyant sur les contributions des habitants de la ville, tant à l'intérieur qu'à l'extérieur." }
  ];

  if (!isOpen) return null;

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

export default KeswetModal;
