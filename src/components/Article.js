import React from 'react';

const Article = ({ article }) => {
  return (
    <table id={`article-${article.id}`}>
      <tr>
        <td width="150">{article.title}</td>
        <td width="250">{article.body}</td>
        <td width="100">
          {article.published ? <strong>Yes</strong> : <i>No</i>}
        </td>
        <td width="130">
          <a href={`/articles/${article.id}`}>Edit / Delete</a>
        </td>
      </tr>
    </table>
  );
};

export default Article;
