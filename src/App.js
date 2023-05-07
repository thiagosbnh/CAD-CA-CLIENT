import React, { Component } from 'react';
import './App.css';
import ArticlesPage from './components/ArticlesPage'
import ArticleNew from './components/ArticleNew'
import ArticleEdit from './components/ArticleEdit';
import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticlesPage />} />
      <Route path="/new" element={<ArticleNew />} />
      <Route path="/articles/:articleId/edit" element={<ArticleEdit />} />
    </Routes>
  );
};

export default App;



