import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    //Console.log se ejecuta dos veces
    //<React.StrictMode>
    <GifExpertApp />
    //</React.StrictMode>
);
