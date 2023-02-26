import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(
  <App />,
    document.querySelector('#root')
 );


// import React from 'react';
// import { createRoot } from 'react-dom';

// createRoot(document.getElementById('root')).render(<App />);

// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './styles/normalize.scss';
// import './styles/global.scss';


// createRoot(document.getElementById('root')).render(<App />);
