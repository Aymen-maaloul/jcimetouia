import React, { useState } from 'react';
import './events.css'; // Import your CSS file if needed
import VideoModal from './2rnpmodal'; // Ensure the correct import path
import ImageSliderModal from './ImageSliderModal';
import VideoModal2 from './conf'; 

const DivsContent = () => {
  // State to manage the visibility of VideoModal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // State to manage the visibility of ImageSliderModal
  const [isImageSliderModalOpen, setIsImageSliderModalOpen] = useState(false);

  // State to manage the visibility of VideoModal2
  const [isVideoModal2Open, setIsVideoModal2Open] = useState(false);

  // Open VideoModal
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  // Close VideoModal
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  // Open ImageSliderModal
  const openImageSliderModal = () => {
    setIsImageSliderModalOpen(true);
  };

  // Close ImageSliderModal
  const closeImageSliderModal = () => {
    setIsImageSliderModalOpen(false);
  };

  // Open VideoModal2
  const openVideoModal2 = () => {
    setIsVideoModal2Open(true);
  };

  // Close VideoModal2
  const closeVideoModal2 = () => {
    setIsVideoModal2Open(false);
  };

  return (
    <div className='divs'>
      <div className='div1'>
        <button onClick={openVideoModal} className='rnp2btn'>
          <p>2 National Presidents' Session of 2023</p>
        </button>
      </div>
      <div className='div2'>
        <button onClick={openImageSliderModal} className='assisebtn'>
          <p>Autumn Assembly of Zone E for the year 2024</p>
        </button>
      </div>
      <div className='div3'>
        <button onClick={openVideoModal2} className='confbtn'>
          <p>the 54th National Conference of the Tunisian Junior Chamber</p>
        </button>
      </div>
      <div className='div4'><button>Button 4</button></div>
      <div className='div5'><button>Button 5</button></div>

      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />
      <ImageSliderModal isOpen={isImageSliderModalOpen} onClose={closeImageSliderModal} />
      <VideoModal2 isOpen={isVideoModal2Open} onClose={closeVideoModal2} />
    </div>
  );
};

export default DivsContent;
