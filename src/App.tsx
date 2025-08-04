import React from 'react';
import Layout from './components/layout';
import Header from './components/header';
import About from './components/about';
import CVLink from './components/cv-Link';
import Contact from './components/contact';

const App: React.FC = () => (
    <Layout>
        <Header />
        <About />
        <CVLink />
        <Contact />
    </Layout>
);

export default App;
