import React, { useState } from 'react';
import './ImageSlider.css'; 

const UpgradeModal = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageData = [
    { image: 'assest/uimage1.jpg', description: "Upgrade our association " + "est un projet qui regroupe 6 chambres locales à Gabès :Metouia, chneni,wedhref, El Hamma, Enig et Gabès. L'idée a été proposée par la chambre de Metouia et vise à développer notre communauté. Ce projet repose sur une étude réalisée avec la plupart des associations de Gabès concernant leurs besoins en leadership, gestion et communication, et tente de trouver des formateurs pour combler ces lacunes par le biais de formations." },
    { image: 'assest/uimage2.jpg', description: "Upgrade our association " + "est un projet qui regroupe 6 chambres locales à Gabès :Metouia, chneni,wedhref, El Hamma, Enig et Gabès. L'idée a été proposée par la chambre de Metouia et vise à développer notre communauté. Ce projet repose sur une étude réalisée avec la plupart des associations de Gabès concernant leurs besoins en leadership, gestion et communication, et tente de trouver des formateurs pour combler ces lacunes par le biais de formations." },
    { image: 'assest/uimage3.jpg', description: "Upgrade our association " + "est un projet qui regroupe 6 chambres locales à Gabès :Metouia, chneni,wedhref, El Hamma, Enig et Gabès. L'idée a été proposée par la chambre de Metouia et vise à développer notre communauté. Ce projet repose sur une étude réalisée avec la plupart des associations de Gabès concernant leurs besoins en leadership, gestion et communication, et tente de trouver des formateurs pour combler ces lacunes par le biais de formations." },
    { image: 'assest/uimage4.jpg', description: "Upgrade our association " + "est un projet qui regroupe 6 chambres locales à Gabès :Metouia, chneni,wedhref, El Hamma, Enig et Gabès. L'idée a été proposée par la chambre de Metouia et vise à développer notre communauté. Ce projet repose sur une étude réalisée avec la plupart des associations de Gabès concernant leurs besoins en leadership, gestion et communication, et tente de trouver des formateurs pour combler ces lacunes par le biais de formations." },
    { image: 'assest/uimage5.jpg', description: "Upgrade our association " + "est un projet qui regroupe 6 chambres locales à Gabès :Metouia, chneni,wedhref, El Hamma, Enig et Gabès. L'idée a été proposée par la chambre de Metouia et vise à développer notre communauté. Ce projet repose sur une étude réalisée avec la plupart des associations de Gabès concernant leurs besoins en leadership, gestion et communication, et tente de trouver des formateurs pour combler ces lacunes par le biais de formations." },
    { image: 'assest/uimage6.jpg', description: "Upgrade our association " + "est un projet qui regroupe 6 chambres locales à Gabès :Metouia, chneni,wedhref, El Hamma, Enig et Gabès. L'idée a été proposée par la chambre de Metouia et vise à développer notre communauté. Ce projet repose sur une étude réalisée avec la plupart des associations de Gabès concernant leurs besoins en leadership, gestion et communication, et tente de trouver des formateurs pour combler ces lacunes par le biais de formations." },

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

export default UpgradeModal;
