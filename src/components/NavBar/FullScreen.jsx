import React, { useState } from 'react';
import './styles.css';

function Fullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  function toggleFullscreen() {
    if (!isFullscreen) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  }

  function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari & Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari & Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }

  const buttonText = isFullscreen ? 'Exit' : 'Full Screen';

  return (
    <div className="fullscreen">
      <button onClick={toggleFullscreen} className="fullscreen">{buttonText}</button>
    </div>
  );
}

export default Fullscreen;
