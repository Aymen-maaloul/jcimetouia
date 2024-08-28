import React from 'react';
import './aboutus.css'; // Assuming you have other styles here

const AboutUs = () => {
  return (
    <section id="AboutUs" className="aboutus">
      <h1 className="abouttitle">About Us</h1>
      <div className="div">
        <div className="divabout">
          <img className="aboutimg" src="assest/acad.png" alt="About Us" />
          <div>
            <h1 className="titre">lorem</h1>
            <p className="descrp">
            Nous sommes une Organisation à but non lucratif avec un effectif de 3625 membres actifs de 18 à 40 ans et plus de 15000 anciens membres dans plus que 150 organisations locales réparties sur tout le territoire Tunisien.  Chaque membre JCI partage la philosophie selon laquelle pour créer des changements positifs, nous devons nous améliorer nous mêmes ainsi que le monde autour de nous.  Nous recherchons donc des solutions adaptées aux problèmes particuliers de nos communautés afin de bâtir un monde meilleur, créant un impact mondial.            </p>
            <h1 className="titre">Notre Mission</h1>
            <p className="descrp">
              Offrir au jeunes leaders des opportunités de développement du leadership en leur donnant la capacité de créer des changements positifs.
            </p>
          </div>
        </div>
      </div>
      <div className="gradient-dividero"></div>

      <div className="div-cred">
        <div className="cred-div">
          <div className="credo">
            <h1 className="croy">Nous croyons</h1>
            <ul className="cred">
              <li className="cred-li">Que la foi en Dieu donne à la vie son véritable sens</li>
              <li className="cred-li">Que la fraternité humaine transcende la souveraineté des nations</li>
              <li className="cred-li">Que la liberté des individus et de l’entreprise assure mieux la justice économique</li>
              <li className="cred-li">Que l’autorité doit s’appuyer sur la loi et non sur l’arbitraire</li>
              <li className="cred-li">Que la personne humaine est la plus précieuse des richesses</li>
              <li className="cred-li">Et que servir l’humanité constitue l’oeuvre la plus noble d’une vie.</li>
            </ul>
          </div>
        </div>
        <img className='malek-img' src="assest/malek.jpg" alt="" />
      </div>

      <div className="gradient-dividero"></div>
      <div className="div-bur">
        <div className="bur-div">
          <center>
          <h1 className='bur-title'>NOS BUREAU</h1></center>
          <div className="presidente">
            <center>
            <img className='malek-img2' src='assest/malek-removebg-preview.png'></img></center>
          </div>
          <div className='bure'>
            <center>
            <img  className="bure-img" src='assest/v-removebg-preview.png'></img></center>
          </div>
        </div>
      </div>
      <div className="gradient-dividero"></div>
    </section>
  );
};

export default AboutUs;
