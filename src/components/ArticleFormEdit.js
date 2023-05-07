import React, { useEffect, useState } from 'react';

const ArticleFormEdit = ({ articleId, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [published, setPublished] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // Fetch the article data based on the articleId and populate the form fields
    fetch(`http://localhost:3000/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
        setPublished(data.published);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [articleId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '') {
      setErrors(['Title cannot be blank']);
      return;
    }

    const articleData = {
      title: title,
      body: body,
      published: published,
    };

    onSubmit(articleData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div style={{ color: 'red' }}>
          <h2>{`${errors.length === 1 ? '1 error' : `${errors.length} errors`} prohibited this article from being saved:`}</h2>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label htmlFor="title" style={{ display: 'block' }}>
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="body" style={{ display: 'block' }}>
          Body
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
      </div>

      <div>
        <label htmlFor="published" style={{ display: 'block' }}>
          Published
        </label>
        <input
          type="checkbox"
          id="published"
          checked={published}
          onChange={(event) => setPublished(event.target.checked)}
        />
      </div>

      <br />
      <br />

      <div>
        <button type="submit" className="buttonsubmit save">
          Update Article
        </button>
      </div>
    </form>
  );
};

export default ArticleFormEdit;
