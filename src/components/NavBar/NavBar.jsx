import React from 'react';
import Clock from './Clock';
import FullScreen from './FullScreen';
import './styles.css';

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="nav-item">
            <a href="#">
              <span className="material-symbols-outlined icon">emoji_people</span>
              <span className="text">Tomas Garbarino</span>
            </a>
          </li>
          <li className="nav-item contact-style">
            <span className="contact-text">Contact</span>
          </li>
        </ul>
        <ul className="navbar-clock">
          <img
            src="https://assets.website-files.com/637fe1f84b89d92db337544d/637fe1f84b89d96a6737548e_spotify%201.svg"
            loading="lazy"
            alt="world pixel"
            className="image-mundo"
          ></img>
          <li className="clock-style">
            <Clock></Clock>
          </li>
        </ul>
        <img src="https://assets.website-files.com/637fe1f84b89d92db337544d/637fe1f84b89d93246375475_Menu%20bar%20resizer.svg" alt="Resizer"  className='icon-resizer'></img>
        <div className="fullscreen-container">
        <img src="https://assets.website-files.com/637fe1f84b89d92db337544d/637fe1f84b89d93246375475_Menu%20bar%20resizer.svg" alt="Resizer"  className='icon-resizer'></img>
          <img src="https://assets.website-files.com/637fe1f84b89d92db337544d/637fe1f84b89d9a2f9375470_Monitor%20resolution.svg" alt="" className="image-screen"></img>
          <FullScreen></FullScreen>
        </div>
        <img src="https://assets.website-files.com/637fe1f84b89d92db337544d/637fe1f84b89d93246375475_Menu%20bar%20resizer.svg" alt="Resizer"  className='icon-resizer'></img>
      </nav>
    </div>
  );
}

export default NavBar;
