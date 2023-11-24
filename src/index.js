
import './index.css';
import Layout from './components/Layout';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Lang, _ } from './lang';

const lang = new Lang;
window.lang = lang;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Layout />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
