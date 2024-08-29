import React, { useState } from 'react';
import './Projects.css'; // Import your CSS file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ChooseModal from './choosemodal';
import ISpeakmodal from './ispeakmodal';
import UpgradeModal from './upgrademodal';
import KeswetModal from './keswetmodal';

const Projects = () => {
  const [modalType, setModalType] = useState(null); // To keep track of which modal to show

  const data = [
    { image: 'assest/iSpeak.png', type: 'iSpeak' },
    { image: 'assest/keswet_laid.png', type: 'keswet' },
    { image: 'assest/Upgrade.png', type: 'upgrade' },
    { image: 'assest/choose.png', type: 'choose' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div className="slick-next" />,
    prevArrow: <div className="slick-prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleImageClick = (type) => {
    setModalType(type); // Set the type of modal to show
  };

  const handleCloseModal = () => {
    setModalType(null); // Close the modal
  };

  return (
    <>
      <section id='projects' className='secproj'>
        <h1 className='projtitle'>Projets</h1>
        <center>
          <div className='divproj'>
            <Slider {...settings}>
              {data.map((item, index) => (
                <a
                  onClick={() => handleImageClick(item.type)}
                  style={{ backgroundImage: `url(${item.image})` }}
                  className='slide-item'
                  key={index}
                >
                  <img src={item.image} alt={`Project ${index + 1}`} />
                </a>
              ))}
            </Slider>
          </div>
        </center>
        <div className="gradient-dividero"></div>
      </section>

      {/* Conditional Modals */}
      {modalType === 'choose' && <ChooseModal isOpen={modalType === 'choose'} onClose={handleCloseModal} />}
      {modalType === 'iSpeak' && <ISpeakmodal isOpen={modalType === 'iSpeak'} onClose={handleCloseModal} />}
      {modalType === 'upgrade' && <UpgradeModal isOpen={modalType === 'upgrade'} onClose={handleCloseModal} />}
      {modalType === 'keswet' && <KeswetModal isOpen={modalType === 'keswet'} onClose={handleCloseModal} />}
    </>
  );
};

export default Projects;
