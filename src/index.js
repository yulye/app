import React from 'react';
import ReactDom from 'react-dom';
import eruda from 'eruda';
import App from './App';

eruda.init();
ReactDom.render(<App/>, document.getElementById('root'));
