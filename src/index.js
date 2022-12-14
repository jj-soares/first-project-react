import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyle';
import Routes from './routes'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // Aqui de vez usar a div eu posso usar o fregment que cumpre o dever de fazer as esilizaçoes goblais igual a div 
    <>  
     <Routes/>
    <GlobalStyle/>
    </>
);

