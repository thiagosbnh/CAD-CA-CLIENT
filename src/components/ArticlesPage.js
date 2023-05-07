import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchArticles();
  }, [filter]);

  const fetchArticles = async () => {
    try {
      let url = 'http://localhost:3000/articles';

      if (filter !== 'all') {
        url += `?published=${filter}`;
      }

      const response = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
      });

      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = async (articleId) => {
    try {
        await axios.delete(`http://localhost:3000/articles/${articleId}`, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          });
          
      fetchArticles();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <div className='spacer'></div>
      <div className='spacer'></div>
        <div className='container'><h1>Articles List</h1></div>
      <div className='spacer'></div>
      <div className='spacer'></div>
      <div className='spacer'></div>
      <div className='spacer'></div>
      <div className="container">
        <div className="container"></div>
        <h6>Filter:  </h6>
        <select id="filterSelect" value={filter} onChange={handleFilterChange}>
          <option value="all">All Articles</option>
          <option value="true">Only Published</option>
          <option value="false">Only Not Published</option>
        </select>
      </div>
      <div className='spacer'></div>
      <div className='spacer'></div>

      <table id="articles">
        <thead>
          <tr>
            <th width="150">Title</th>
            <th width="250">Body</th>
            <th width="100">Published</th>
            <th width="130">Options</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td style={{ width: '150px' }}>{article.title}</td>
              <td style={{ width: '250px' }}>{article.body}</td>
              <td style={{ width: '100px' }}>{article.published ? 'Yes' : 'No'}</td>
              <td style={{ width: '130px' }}>
                <Link to={`/articles/${article.id}/edit`}><button className="options">Edit</button></Link>
                <div className = "spacer"></div>
                <button className="options" onClick={() => handleDelete(article.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='spacer'></div>
      <div className='spacer'></div>
      <Link to="/new">
        <div className="container">
            <button>Add New Article</button>
        </div>
        <div className='spacer'></div>
      <div className='spacer'></div>
      <div className='spacer'></div>
      <div className='spacer'></div>
      </Link>
    </div>
  );
};

export default ArticlesPage;
