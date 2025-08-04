import React from 'react';

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: 700,
        margin: '40px auto',
        padding: 20,
        lineHeight: 1.6,
        backgroundColor: '#121212',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.7)',
        color: '#e0e0e0',
    }}>
        {children}
    </div>
);

export default Layout;
