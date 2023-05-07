import React from 'react';
import { Link } from 'react-router-dom';
import ArticleForm from './ArticleForm';

const ArticleNew = () => {
  return (
    <div>
      <h1>New article</h1>
      <ArticleForm />
      <br />
      <div>
        <Link to="/">Show All Articles</Link>
      </div>
    </div>
  );
};

export default ArticleNew;
