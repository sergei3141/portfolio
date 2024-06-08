import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './i18n';

import Loader from './Components/Loader';
import Header from './Components/Header';
import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import PortfolioProject from './Components/PortfolioProject';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

function App() {

  const location = useLocation();

  // Получение якорей и переход по ним с любого адреса
  // даже если пользователь не находится на странице с якорями

  useEffect(() => {
    const hash = location.hash; 
    if (hash) {
      const element = document.getElementById(hash.substring(1)); 
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
      }
    }
  }, [location]); 

  return (
      <body data-spy="scroll" data-target="#main-navbar" data-offset="75">
        <Loader />
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <AboutMe />
              <Resume />
              <Portfolio />
            </>} 
          />
          <Route path='/content/:id' element={<PortfolioProject />} />
        </Routes>
        <Contacts />
        <Footer />
      </body>
  );
}

export default App;
