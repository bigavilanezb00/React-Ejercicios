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
      imatge="alexia"
      esport="Basket"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
    <Testimonio
      nom='Judith'
      edad="13"
      imatge="alexia"
      esport="Tenis"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
    <Testimonio
      nom='Victoria'
      edad="11"
      imatge="alexia"
      esport="Beisbol"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
    <Testimonio
      nom='Raquel'
      edad="13"
      imatge="alexia"
      esport="Fútbol"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
    <Testimonio
      nom='Alba'
      edad="11"
      imatge="alexia"
      esport="Natación"
      institut="Institut A"
      texte="Lorem ipsum..."
    />
  </React.StrictMode>
);