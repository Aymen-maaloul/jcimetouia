import React, { useState } from 'react';
import './ImageSlider.css'; // Import the CSS file for styling

const ISpeakModal = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageData = [
    { image: 'assest/simage1.jpg', description: "Dans le but de promouvoir l'art du débat et de l’art oratoire  dans la région de Metouia , la cellule junior  de la jeune Chambre Economique de Metouia réalisé le projet "+'iSpeak'+" avec la participation de 24 personnes dans différentes langues : arabe, français et anglais. Ce projet a été organisé en partenariat avec la bibliothèque Mohamed El Aroussi el metouia à la Maison des Jeunes de Metouia , et a permis de découvrir plusieurs talents. Les gagnants ont reçu des prix précieux pour les encourager à continuer leur créativité." },
    { image: 'assest/simage2.jpg', description: "Dans le but de promouvoir l'art du débat et de l’art oratoire  dans la région de Metouia , la cellule junior  de la jeune Chambre Economique de Metouia réalisé le projet "+'iSpeak'+" avec la participation de 24 personnes dans différentes langues : arabe, français et anglais. Ce projet a été organisé en partenariat avec la bibliothèque Mohamed El Aroussi el metouia à la Maison des Jeunes de Metouia , et a permis de découvrir plusieurs talents. Les gagnants ont reçu des prix précieux pour les encourager à continuer leur créativité." },
    { image: 'assest/simage3.jpg', description: "Dans le but de promouvoir l'art du débat et de l’art oratoire  dans la région de Metouia , la cellule junior  de la jeune Chambre Economique de Metouia réalisé le projet "+'iSpeak'+" avec la participation de 24 personnes dans différentes langues : arabe, français et anglais. Ce projet a été organisé en partenariat avec la bibliothèque Mohamed El Aroussi el metouia à la Maison des Jeunes de Metouia , et a permis de découvrir plusieurs talents. Les gagnants ont reçu des prix précieux pour les encourager à continuer leur créativité."  },
    { image: 'assest/simage4.jpg', description: "Dans le but de promouvoir l'art du débat et de l’art oratoire  dans la région de Metouia , la cellule junior  de la jeune Chambre Economique de Metouia réalisé le projet "+'iSpeak'+" avec la participation de 24 personnes dans différentes langues : arabe, français et anglais. Ce projet a été organisé en partenariat avec la bibliothèque Mohamed El Aroussi el metouia à la Maison des Jeunes de Metouia , et a permis de découvrir plusieurs talents. Les gagnants ont reçu des prix précieux pour les encourager à continuer leur créativité." },
    { image: 'assest/simage5.jpg', description: "Dans le but de promouvoir l'art du débat et de l’art oratoire  dans la région de Metouia , la cellule junior  de la jeune Chambre Economique de Metouia réalisé le projet "+'iSpeak'+" avec la participation de 24 personnes dans différentes langues : arabe, français et anglais. Ce projet a été organisé en partenariat avec la bibliothèque Mohamed El Aroussi el metouia à la Maison des Jeunes de Metouia , et a permis de découvrir plusieurs talents. Les gagnants ont reçu des prix précieux pour les encourager à continuer leur créativité." },
    { image: 'assest/simage6.jpg', description: "Dans le but de promouvoir l'art du débat et de l’art oratoire  dans la région de Metouia , la cellule junior  de la jeune Chambre Economique de Metouia réalisé le projet "+'iSpeak'+" avec la participation de 24 personnes dans différentes langues : arabe, français et anglais. Ce projet a été organisé en partenariat avec la bibliothèque Mohamed El Aroussi el metouia à la Maison des Jeunes de Metouia , et a permis de découvrir plusieurs talents. Les gagnants ont reçu des prix précieux pour les encourager à continuer leur créativité." }
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

export default ISpeakModal;
