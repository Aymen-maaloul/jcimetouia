import React, { useState } from 'react';
import './ImageSlider.css'; // Import the CSS file for styling

const ChooseModal = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageData = [
    { image: 'assest/cimage1.jpg', description: "Le projet "+'Choose Your Path'+", dans sa deuxième édition, est réalisé par la cellule junior de la jeune chambre économique de metouia . Il vise à aider, encadrer et orienter les élèves de baccalauréat avant, pendant et après les examens nationaux. Le projet comprend d'abord des séances de sport dans le cadre du "+'baccalauréat sport'+" à la salle de sport "+'Énergie'+". Ensuite, il organise des sessions de révision à la bibliothèque Mohamed Laroussi Matoui pour les matières suivantes : histoire et géographie, français, philosophie, etc. Enfin, une journée d'orientation universitaire est organisée en partenariat avec l'Institut de Matouia, incluant plusieurs ateliers sur différents domaines et une intervention de Mme Samia Attia, conseillère en orientation universitaire au ministère de l'Éducation." },
    { image: 'assest/cimage2.jpg', description: "Le projet "+'Choose Your Path'+", dans sa deuxième édition, est réalisé par la cellule junior de la jeune chambre économique de metouia . Il vise à aider, encadrer et orienter les élèves de baccalauréat avant, pendant et après les examens nationaux. Le projet comprend d'abord des séances de sport dans le cadre du "+'baccalauréat sport'+" à la salle de sport "+'Énergie'+". Ensuite, il organise des sessions de révision à la bibliothèque Mohamed Laroussi Matoui pour les matières suivantes : histoire et géographie, français, philosophie, etc. Enfin, une journée d'orientation universitaire est organisée en partenariat avec l'Institut de Matouia, incluant plusieurs ateliers sur différents domaines et une intervention de Mme Samia Attia, conseillère en orientation universitaire au ministère de l'Éducation."},
    { image: 'assest/cimage3.jpg', description: "Le projet "+'Choose Your Path'+", dans sa deuxième édition, est réalisé par la cellule junior de la jeune chambre économique de metouia . Il vise à aider, encadrer et orienter les élèves de baccalauréat avant, pendant et après les examens nationaux. Le projet comprend d'abord des séances de sport dans le cadre du "+'baccalauréat sport'+" à la salle de sport "+'Énergie'+". Ensuite, il organise des sessions de révision à la bibliothèque Mohamed Laroussi Matoui pour les matières suivantes : histoire et géographie, français, philosophie, etc. Enfin, une journée d'orientation universitaire est organisée en partenariat avec l'Institut de Matouia, incluant plusieurs ateliers sur différents domaines et une intervention de Mme Samia Attia, conseillère en orientation universitaire au ministère de l'Éducation."},
    { image: 'assest/cimage4.jpg', description: "Le projet "+'Choose Your Path'+", dans sa deuxième édition, est réalisé par la cellule junior de la jeune chambre économique de metouia . Il vise à aider, encadrer et orienter les élèves de baccalauréat avant, pendant et après les examens nationaux. Le projet comprend d'abord des séances de sport dans le cadre du "+'baccalauréat sport'+" à la salle de sport "+'Énergie'+". Ensuite, il organise des sessions de révision à la bibliothèque Mohamed Laroussi Matoui pour les matières suivantes : histoire et géographie, français, philosophie, etc. Enfin, une journée d'orientation universitaire est organisée en partenariat avec l'Institut de Matouia, incluant plusieurs ateliers sur différents domaines et une intervention de Mme Samia Attia, conseillère en orientation universitaire au ministère de l'Éducation." },
    { image: 'assest/cimage5.jpg', description: "Le projet "+'Choose Your Path'+", dans sa deuxième édition, est réalisé par la cellule junior de la jeune chambre économique de metouia . Il vise à aider, encadrer et orienter les élèves de baccalauréat avant, pendant et après les examens nationaux. Le projet comprend d'abord des séances de sport dans le cadre du "+'baccalauréat sport'+" à la salle de sport "+'Énergie'+". Ensuite, il organise des sessions de révision à la bibliothèque Mohamed Laroussi Matoui pour les matières suivantes : histoire et géographie, français, philosophie, etc. Enfin, une journée d'orientation universitaire est organisée en partenariat avec l'Institut de Matouia, incluant plusieurs ateliers sur différents domaines et une intervention de Mme Samia Attia, conseillère en orientation universitaire au ministère de l'Éducation." },
    { image: 'assest/cimage6.jpg', description: "Le projet "+'Choose Your Path'+", dans sa deuxième édition, est réalisé par la cellule junior de la jeune chambre économique de metouia . Il vise à aider, encadrer et orienter les élèves de baccalauréat avant, pendant et après les examens nationaux. Le projet comprend d'abord des séances de sport dans le cadre du "+'baccalauréat sport'+" à la salle de sport "+'Énergie'+". Ensuite, il organise des sessions de révision à la bibliothèque Mohamed Laroussi Matoui pour les matières suivantes : histoire et géographie, français, philosophie, etc. Enfin, une journée d'orientation universitaire est organisée en partenariat avec l'Institut de Matouia, incluant plusieurs ateliers sur différents domaines et une intervention de Mme Samia Attia, conseillère en orientation universitaire au ministère de l'Éducation." }
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

export default ChooseModal;
