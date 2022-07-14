import React from 'react';
import ReactDOM from 'react-dom/client';
import './mainStyle.css';
import Todo from './Todo';
import EmptyScreen from './EmptyScreen';

var todoList = [];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {(todoList.length==0) ? <EmptyScreen /> : <Todo />}
  </React.StrictMode>
);

