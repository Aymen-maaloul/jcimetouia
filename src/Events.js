import React, { useState, useEffect } from 'react';
import './events.css'; 
import VideoPlayer from './VideoPlayer';


const Events = () => {
  const [activeButton, setActiveButton] = useState('button1');

  useEffect(() => {
    handleButtonClick('button1'); 
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section id='events' className='events'>
      <h1 className='Eventstitle'>Évènement</h1>



      <div className='div'>

        <VideoPlayer />

      </div>
      <div className="gradient-dividero"></div>
    </section>
  );
};

export default Events;
