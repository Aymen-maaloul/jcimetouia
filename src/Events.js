// Events.js
import React, { useState, useEffect } from 'react';
import './events.css'; // Import your CSS file if needed
import VideoPlayer from './VideoPlayer'; // Import the VideoPlayer component
import DivsContent from './DivsContent'; // Import the DivsContent component


const Events = () => {
  const [activeButton, setActiveButton] = useState('button1');

  useEffect(() => {
    handleButtonClick('button1'); // Simulate a click on button1 when the page loads
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section id='events' className='events'>
      <h1 className='Eventstitle'>Events</h1>
      
      

      <div className='div'>
        
            <VideoPlayer /> {/* Use the VideoPlayer component here */}
       
      </div>
      <div className="gradient-dividero"></div>
    </section>
  );
};

export default Events;
