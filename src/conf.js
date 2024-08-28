// VideoModal2.js
import React from 'react';
import './2rnp.css'; // Import your updated CSS file

const style = {
  color: '#EDBE38'
};

const VideoModal2 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='video-modal-overlay'>
      <div className='video-modal-content'>
        <button className='video-modal-close' onClick={onClose}>×</button>
        <div className='video-container'>
          <center>
            <h4 style={style}>Second National Presidents' Session of 2023</h4>
            <video width="70%" height="auto" poster="assest/conf.png" controls>
              <source src="assest/conf.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Here’s a more simplified version:

---

JCI Metouia attended the 54th National Conference in Sousse from December 15 to 17. We won awards for "Choose Your Path." Mohamed Ayari was named "Conseiller Zonal Programme TOYP ET CYE" and Hazem Ben Hassan was named "Directeur Zonal Marketing et Communication de la JCET Zone E" for 2024.
            </p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default VideoModal2;
