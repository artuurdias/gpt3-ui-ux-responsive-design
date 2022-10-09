import React from 'react';

import { Container, Content } from './styles';

interface Props {
  imgUrl: string;
  date: string;
  text: string;
}

const Article: React.FC<Props> = ({ imgUrl, date, text }) => (
  <Container>
    <div className="image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <Content>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </Content>
  </Container>
);

export default Article;
