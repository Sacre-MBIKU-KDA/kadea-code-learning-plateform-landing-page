import "./style.css";
function Footer() {
  return (
    <section className='footer-section'>
      <div className='footer-container'>
        <div className='footer-container__left-side'>
          <img src='logo.png' alt='KDEA code learning plateform' />
          <p className='footer-container__left-side__description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ea
            itaque quod inventore porro rerum fuga ipsam blanditiis modi
            distinctio, velit commodi molestiae necessitatibus ratione fugiat
            iusto non possimus maxime.
          </p>
          <ul className='footer-container__left-side__social-icons'>
            <li>
              <a href='/'>
                {" "}
                <img src='facebook.png' alt='facebook' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src='instagram.png' alt='instagram' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src='twitter.png' alt='twitter' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src='whatsapp.png' alt='whatsapp' />
              </a>
            </li>
          </ul>
          <p className='footer-container__left-side__description'>
            Code Learning Platform © 2022
          </p>
        </div>
        <div className='footer-container__right-side'>
          <ul className="footer-container__right-side__menu">
            <li>
              <p>Liens</p>
              <ul>
                <li>
                  <a href=''>A propos</a>
                </li>
                <li>
                  <a href=''>Cours</a>
                </li>
                <li>
                  <a href=''>Catalogue</a>
                </li>
                <li>
                  <a href=''>Coachs</a>
                </li>
                <li>
                  <a href=''>Connexion</a>
                </li>
              </ul>
            </li>
            <li>
              <p>Ressources</p>
              <ul>
                <li>
                  <a href=''>Programmation</a>
                </li>
                <li>
                  <a href=''>Javascript</a>
                </li>
                <li>
                  <a href=''>PHP</a>
                </li>
                <li>
                  <a href=''>Python</a>
                </li>
                <li>
                  <a href=''>Marketing</a>
                </li>
              </ul>
            </li>
            <li>
              <p>Support</p>
              <ul>
                <li>
                  <a href=''>Securité</a>
                </li>
                <li>
                  <a href=''>Politique de confidentialité</a>
                </li>
                <li>
                  <a href=''>Centre d'aide</a>
                </li>
                <li>
                  <a href=''>FAQ</a>
                </li>
                <li>
                  <a href=''>Contacts</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
