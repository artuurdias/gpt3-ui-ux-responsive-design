import React from 'react';

import { Container } from './styles';

const CTA: React.FC = () => (
  <Container>
    <div className="content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="btn">
      <button type="button">Get Started</button>
    </div>
  </Container>
);

export default CTA;