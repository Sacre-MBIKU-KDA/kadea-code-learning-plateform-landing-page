import React from "react";
import "./style.css";

function StartCOding() {
  return (
    <section className='start-coding-section'>
      <div className='start-coding-container'>
        <div className='start-coding-container__description'>
          <h3>Prêt à donner un coup de fouet à votre carrière</h3>
          <p>
            Vous pouvez utiliser ce texte lorem ipsum dans vos maquettes, sites
            webs, design, ebook... Le texte généré aléatoirement est libre de
            droit.
          </p>
          <div className='start-coding-container__description--cta'>
            <a href='/'>Commencer à apprendre</a>
          </div>
        </div>
        <img
          src='start-coding-illustration-section.svg'
          alt='Start coding now!'
        />
      </div>
    </section>
  );
}

export default StartCOding;
