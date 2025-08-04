import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => (
    <>
        <h2 style={{ color: '#64b5f6', borderBottom: '2px solid #64b5f6', paddingBottom: 6, marginTop: 30 }}>
            Yhteystiedot
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.5 }}>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            Sähköposti:{' '}
            <a href="mailto:sbjoona1@gmail.com" style={{ color: '#90caf9', textDecoration: 'none' }}>
                sbjoona1@gmail.com
            </a>
            <br />
            <FontAwesomeIcon icon={faPhone} />{' '}
            Puhelinnumero:{' '}
            <a href="tel:+358409306141" style={{ color: '#90caf9', textDecoration: 'none' }}>
                040 930 6141
            </a>
            <br />
            <FontAwesomeIcon icon={faLinkedin} />{' '}
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/joona-keiski/" target="_blank" rel="noopener noreferrer" style={{ color: '#90caf9', textDecoration: 'none' }}>
                linkedin.com/in/joona-keiski/
            </a>
            <br />
            <FontAwesomeIcon icon={faGithub} />{' '}
            GitHub-profiili:{' '}
            <a href="https://github.com/joona61K/github.io" target="_blank" rel="noopener noreferrer" style={{ color: '#90caf9', textDecoration: 'none' }}>
                github.com/joona61K
            </a>
            <br />
            <FontAwesomeIcon icon={faCodeBranch} />{' '}
            Fullstack ToDo App:{' '}
            <a href="https://github.com/joona61K/to-do-react" target="_blank" rel="noopener noreferrer" style={{ color: '#90caf9', textDecoration: 'none' }}>
                github.com/joona61K/to-do-react
            </a>
        </p>
    </>
);

export default Contact;
