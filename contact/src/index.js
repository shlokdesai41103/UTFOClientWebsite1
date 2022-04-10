import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ele = React.createElement
("div",
  {},
  React.createElement("h1", { className: 'head' }, "Contact"),
  React.createElement("p", {className: 'text'}, "Looking forward to hearing from you"),
  React.createElement("h2", { className: 'subhead' }, "Phone"),
  React.createElement("p", {className: 'text'}, "123-456-7890"),
  React.createElement("h2", { className: 'subhead' }, "Email"),
  React.createElement("p", {className: 'text'}, "info@mysite.com"),

);

ReactDOM.render(ele, document.getElementById('root'));
