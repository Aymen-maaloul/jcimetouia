// VideoModal.js
import React from 'react';
import './2rnp.css'; // Import your updated CSS file
const style = {
    color: '#EDBE38'
  };
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
    
  return (
    <div className='video-modal-overlay'>
      <div className='video-modal-content'>
        <button className='video-modal-close' onClick={onClose}>×</button>
        <div className='video-container'>
            <center>
                <h4 style={style}>
                Second National Presidents' Session of 2023
                </h4>
          <video width="70%" height="auto" 
        poster="assest/rnp2.jpg" controls>
            <source src="assest/2rnp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>The Junior Chamber International (JCI) of Mateur took part in the "Second National Presidents' Session of 2023," held from September 29 to October 1 at the Meradi Menzeh hotel in Yasmine Hammamet.

Our chapter was represented by:
- Mohamed Ayari, President
- Hachemi Karim, Legal Advisor

The new leaders for 2024 are:
- National President: Omar Bajawi
- National Vice President for Training: Manjia Khershoufi
- National Treasurer: Sabri Ben Hussein

Congratulations to them! We also wish the best to Seifeddine Ben Ramadan in his future roles. 💪💙</p>

          </center>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
