import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  text: string;
}

const Feature: React.FC<Props> = ({ title, text }) => (
  <Container>
    <div className="title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="text">
      <p>{text}</p>
    </div>
  </Container>
);

export default Feature;
