import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';
import Body from './body/body';
import ServicePage from './service/service_page';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <>
  //   <NavBar title="Dipak"/>
  //   <Body/>
  //   <ServicePage/>
  //   <Footer title="Dipak Shrestha"/>
  // </>
  <App/>
);

