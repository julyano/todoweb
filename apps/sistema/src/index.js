import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

var saida = document.getElementById('list-body');

ReactDOM.render(<TodoList/>, saida);
registerServiceWorker();
