import React from 'react';

import Article from '../../components/article';
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05
} from './imports';

import { Container, BlogContainer } from './styles';

const Blog = () => (
  <Container>
    <div className="heading">
      <h1>A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <BlogContainer>
      <div className="first">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="second">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </BlogContainer>
  </Container>
);

export default Blog;
