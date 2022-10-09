import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, FooterLinks } from './styles';

const Footer = () => (
  <Container>
    <div className="heading">
      <h1>Do you want to step in to the future before others</h1>
    </div>

    <div className="btn">
      <p>Request Early Access</p>
    </div>

    <FooterLinks>
      <div className="logo">
        <img src={logo} alt={logo} />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </FooterLinks>

    <div className="copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </Container>
);

export default Footer;
