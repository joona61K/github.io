import React from 'react';

const App: React.FC = () => {
  return (
      <div style={{ fontFamily: 'sans-serif', maxWidth: 700, margin: 'auto', padding: 20, lineHeight: 1.6 }}>
        <h1 style={{ color: '#2e86de' }}>Joona Keiski </h1>
        <p>
          Hei! Olen IT-alan opiskelija kiinnostunut tietoturvasta ja ohjelmoinnista. Tälle sivulle kokoan
          portfolioani ja projektejani.
        </p>

        <h2>📄 CV</h2>
        <p>
          Lataa CV:{' '}
          <a href="cv2.1-1.pdf" target="_blank" rel="noopener noreferrer">
            Klikkaa tästä (PDF)
          </a>
        </p>

        <h2>Projektit</h2>
        <ul>
          <li>
            <a href="https://github.com/kayttajanimeni/salasanageneraattori" target="_blank" rel="noopener noreferrer">
              Salasanageneraattori Pythonilla
            </a>
          </li>
          <li>
            <a href="https://github.com/kayttajanimeni/web-harjoitus" target="_blank" rel="noopener noreferrer">
              Yksinkertainen HTML/CSS-sivu
            </a>
          </li>
        </ul>

        <h2>📫 Yhteystiedot</h2>
        <p>
          Sähköposti: sbjoona1@email.com
          <br />
          LinkedIn:{' '}
          <a href="https://linkedin.com/in/oma-linkkisi" target="_blank" rel="noopener noreferrer">
              https://www.linkedin.com/in/joona-keiski/
          </a>
        </p>
      </div>
  );
};

export default App;
