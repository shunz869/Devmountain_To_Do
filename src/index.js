import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let items=[
  { id:1,title: 'No Scrubs', description: '4:05',completed:true},
  { id:2,title: 'Macarena', description: '2:30',completed:false},
  { id:3,title: 'All Star', description: '3:15',completed:false},
  { id:4,title: 'I Want it That Way', description: '1:45',completed:false}
];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
