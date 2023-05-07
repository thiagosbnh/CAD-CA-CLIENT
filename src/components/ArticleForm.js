import React, { useState } from 'react';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [published, setPublished] = useState(false);
  const [errors, setErrors] = useState([]);

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
  
    fetch('http://localhost:3000/articles', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(articleData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        // Reset the form fields
        setTitle('');
        setBody('');
        setPublished(false);
        setErrors([]);
        // Display alert
        window.alert('New article created!');
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div style={{ color: 'red' }}>
          <h2>{`${
            errors.length === 1 ? '1 error' : `${errors.length} errors`
          } prohibited this article from being saved:`}</h2>
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
          Save Article
        </button>
      </div>
    </form>
  );
};

export default ArticleForm;
