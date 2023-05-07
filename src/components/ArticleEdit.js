import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ArticleFormEdit from './ArticleFormEdit';

const ArticleEdit = () => {
  const { articleId } = useParams();

  const handleFormSubmit = (articleData) => {
    // Update the article using the provided articleData
    fetch(`http://localhost:3000/articles/${articleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(articleData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        // Display success message or perform any other actions
        window.alert('Article updated successfully!');
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Editing article</h1>
      <ArticleFormEdit articleId={articleId} onSubmit={handleFormSubmit} />
      <br />
      <div>
        <Link to={`/articles/${articleId}`}>Show this article</Link> |{' '}
        <Link to="/">Back to articles</Link>
      </div>
    </div>
  );
};

export default ArticleEdit;
