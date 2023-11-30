import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './components/App';
import MiPrimerComponente from './components/PrimerComponente';
import Testimonio from './components/Testimonio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Testimonio
      nom='Alexia'
      edad="12"
      esport="Basket"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
    <Testimonio
      nom='Alexia'
      edad="12"
      esport="Basket"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
    <Testimonio
      nom='Alexia'
      edad="12"
      esport="Basket"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
    <Testimonio
      nom='Alexia'
      edad="12"
      esport="Basket"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
    <Testimonio
      nom='Alexia'
      edad="12"
      esport="Basket"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
  </React.StrictMode>
);