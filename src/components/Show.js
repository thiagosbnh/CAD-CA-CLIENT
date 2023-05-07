import React from 'react';

const Show = ({ article }) => {
  return (
    <div>
      <p style={{ color: 'green' }} className="notice">
        {notice}
      </p>
      <table id="articles">
        <tr>
          <th width="150">Title</th>
          <th width="250">Body</th>
          <th width="100">Published</th>
          <th width="130">Options</th>
        </tr>
        {article}
      </table>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <h5>Choose from options below:</h5>
      <div>
        <form action={`/articles/${article.id}/edit`} method="get">
          <button type="submit">Edit this article</button>
        </form>
        <div className="spacer"></div>
        <form action={`/articles/${article.id}`} method="post">
          <input type="hidden" name="_method" value="delete" />
          <button type="submit" className="delete">
            Delete this article
          </button>
        </form>
        <div className="spacer"></div>
        <form action="/articles" method="get">
          <button type="submit">Show All Articles</button>
        </form>
      </div>
    </div>
  );
};

export default Show;
