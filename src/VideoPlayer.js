
import React, { useRef, useEffect, useState } from 'react';
import './events.css'; 

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
        width="38%" 
        height="auto"
        ref={videoPlayerRef}
        poster="assest/rnp1.png"
        controls={false}
      >
        <source src="assest/rnp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>La Jeune Chambre Économique de Metouia a organisé la première réunion nationale des présidents les 28, 29 et 30 avril. Il s'agit d'un événement national réunissant les présidents des chambres locales. Cette manifestation est organisée pour coordonner les objectifs et les plans pour la nouvelle année, fournir des conseils et de l'inspiration aux nouveaux présidents, et renforcer la coopération entre les chambres.
      </p>
    </div>
  );
};

export default VideoPlayer;
