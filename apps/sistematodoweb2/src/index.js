import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

//document.getElementById('root')
//var saida = document.querySelector('#listbody');
//ReactDOM.render(React.createElement(TodoList), document.getElementById('list-body'));
var saida = document.getElementById('list-body');

ReactDOM.render(<TodoList/>, saida);
//ReactDOM.render(<App/>, saida);
registerServiceWorker();
