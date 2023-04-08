import React, { useEffect } from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadingScreen = document.getElementById("loading-screen");
      loadingScreen.remove();
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="loading-screen" className="loading-screen">
      <div className="loading-text">IBM Personal Computer Basic Version 1.0</div>
      <div className="loading-text">Copyright IBM Corp 1981, 1983</div>
      <div className="login-prompt">Welcome</div>
    </div>
  );
}

export default LoadingScreen;
