import React, { useState } from 'react';
import './firstpage.css'; // Import your CSS file
import CountUp from 'react-countup';

const Home = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  // Close menu
  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <section className='first'>
      <header>
        <nav>
        <a href='http://jcimetouia.tn/' id='logo'>
                <img src="./assest/jci.png" alt="Logo" class="logo" />
            </a>
          <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>

          <ul className={`ul-desktop ${isMenuActive ? 'nav-active' : ''}`}>
            <li className='li'><a href="#AboutUs">About Us</a></li>
            <li className='li'><a href="#events">Events</a></li>
            <li className='li'><a href="#projects">Projects</a></li>
            <li className='li'><a href="#partners">Partners</a></li>
            <li className='li'>
              <button className='join'>
                <a target='_blank' href="/form.html" style={{ textDecoration: "none", color: "white" }}>Join Us</a>
              </button>
            </li>
          </ul>

          <ul className={`ul-mobile ${isMenuActive ? 'nav-active' : ''}`}>
            <div>
              <img className="close" onClick={closeMenu} src='assest/fermer (1).png'></img>
              <li className='li'><a href="#AboutUs">À propos</a></li>
              <li className='li'><a href="#events">Événements</a></li>
              <li className='li'><a href="#projects">Projets</a></li>
              <li className='li'><a href="#partners">Partenaires</a></li>
              <li className='li'>
                <button className='join'><a target='_blank' href="/form.html" style={{ textDecoration: "none", color: "white" }}>Join Us</a></button>
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <div className="homecontent">
        <h1 className='h1'>La Jeune Chambre Internationale de Metouia</h1>
        <h2>Former des leaders pour un monde en mutation</h2>
        <center>
          <div className='counter'>
            <div>
              <h1 className='count'>
                +<CountUp start={0} end={6} /> <br /> Projets
              </h1>
            </div>
            <div>
              <h1 className='count'>
                +<CountUp start={0} end={73} /> <br /> Membres
              </h1>
            </div>
            <div>
              <h1 className='count'>
                +<CountUp start={0} end={32} /> <br /> Formations
              </h1>
            </div>
          </div>

          <div className="scrolldiv">
            <a href="#AboutUs">
              <img className="scroll" src="assest/scroll.png" alt="Scroll" />
            </a>
          </div>
        </center>
      </div>
    </section>
  );
};

export default Home;
