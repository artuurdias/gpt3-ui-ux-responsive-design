import React from 'react';

import Blog from '../components/blog';
import Brand from '../components/brand';
import CTA from '../components/cta';
import Features from '../components/features';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Possibility from '../components/possibility';
import What from '../components/what';

import { Container } from './styles';

const App: React.FC = () => (
  <Container>
    <div className="box">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <What />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </Container>
)

export default App;