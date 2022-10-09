import React from 'react';

import { google, slack, atlassian, dropbox, shopify } from './imports';

import { Container } from './styles';

const Brand: React.FC = () => (
  <Container>
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </Container>
);

export default Brand;
