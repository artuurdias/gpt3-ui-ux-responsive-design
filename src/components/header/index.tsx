import React from 'react';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

import { Container, HeaderContent } from './styles';

const Header: React.FC = () => (
  <Container>
    <HeaderContent>
      <h1>Let's build something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className="input">
        <input type="email" name="email" id="email" placeholder="Your e-mail" />
        <button>Get Started</button>
      </div>
      <div className="people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      <div className="image">
        <img src={ai} alt={ai} />
      </div>
    </HeaderContent>
  </Container>
)

export default Header;
