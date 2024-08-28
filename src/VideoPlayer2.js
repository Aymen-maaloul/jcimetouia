/*// VideoPlayer.js
import React, { useRef, useEffect, useState } from 'react';
import './events.css'; // Import your CSS file if needed

const VideoPlayer = () => {
  const videoPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoPlayer = videoPlayerRef.current;

    const handleClick = () => {
      if (videoPlayer) {
        if (isPlaying) {
          videoPlayer.pause();
        } else {
          videoPlayer.play().catch((error) => {
            console.error('Playback failed:', error);
          });
        }
        setIsPlaying(!isPlaying);
      }
    };

    const handlePauseOrEnded = () => {
      if (videoPlayer) {
        videoPlayer.controls = false;
        videoPlayer.setAttribute('poster', 'assest/rnp1.png');
        setIsPlaying(false);
      }
    };

    if (videoPlayer) {
      videoPlayer.addEventListener('click', handleClick);
      videoPlayer.addEventListener('pause', handlePauseOrEnded);
      videoPlayer.addEventListener('ended', handlePauseOrEnded);

      return () => {
        videoPlayer.removeEventListener('click', handleClick);
        videoPlayer.removeEventListener('pause', handlePauseOrEnded);
        videoPlayer.removeEventListener('ended', handlePauseOrEnded);
      };
    }
  }, [isPlaying]);

  return (
    <div className='divevents'>
      <video 
        width="38%" // Adjust width as needed
        height="auto"
        ref={videoPlayerRef}
        poster="assest/conf.png"
        controls={false}
      >
        <source src="assest/conf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>We are a non-profit organization with a membership of 3,625 active members aged 18 to 40, and over 15,000 alumni in more than 150 local organizations across Tunisia. Each JCI member shares the philosophy that to create positive change, we must improve ourselves as well as the world around us. We therefore seek solutions tailored to the specific problems of our communities in order to build a better world, creating a global impact.</p>
    </div>
  );
};

export default VideoPlayer;*/
