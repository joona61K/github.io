import React from 'react';

const CVLink: React.FC = () => (
    <>
        <h2 style={{ color: '#64b5f6', borderBottom: '2px solid #64b5f6', paddingBottom: 6, marginTop: 30 }}>CV</h2>
        <p>
            <a
                href={`${process.env.PUBLIC_URL}/CV2.1-1.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    backgroundColor: '#1976d2',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: 6,
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1565c0')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1976d2')}
            >
                Avaa CV PDF
            </a>

        </p>
    </>
);

export default CVLink;
