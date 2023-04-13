import React, { useEffect } from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadingScreen = document.getElementById("loading-screen");
      loadingScreen.remove();
    }, 4500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="loading-screen" className="loading-screen">
      <div className="loading-text">
        {Array.from("Garba Personal Computer Basic Version 1.0").map((letter, index) => (
          <span key={index} data-text={letter}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
      <div className="loading-text">
        {Array.from(`Copyright Garba Corp 2000, ${currentYear}`).map((letter, index) => (
          <span key={index} data-text={letter}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
      <div className="login-prompt">
        {Array.from("Welcome").map((letter, index) => (
          <span key={index} data-text={letter}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
