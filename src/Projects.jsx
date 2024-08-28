import React from 'react';
import './Projects.css'; // Import your CSS file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Projects = () => {
  const data = [
    { image: 'assest/iSpeak.png' },
    { image: 'assest/keswet_laid.png' },
    { image: 'assest/Upgrade.png' },
    { image: 'assest/choose.png' },
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

  return (
    <section id='projects' className='secproj'>
      <h1 className='projtitle'>Projects</h1>
      <center>
        <div className='divproj'>
          <Slider {...settings}>
            {data.map((item, index) => (
              <a
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
  );
};

export default Projects;
