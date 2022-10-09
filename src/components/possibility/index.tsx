import React from 'react';
import possibilityImage from '../../assets/possibility.png';

import { Container } from './styles';

const Possibility: React.FC = () => (
  <Container>
    <div className="image">
      <img src={possibilityImage} alt={possibilityImage} />
    </div>
    <div className="content">
      <h4>Request Early Access to Get Started</h4>
      <h1>The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </Container>
);

export default Possibility;
