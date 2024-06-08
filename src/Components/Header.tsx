import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {

  const { t, i18n } = useTranslation();

  type AvailableLanguages = 'ru' | 'en';

  const changeLanguage = (): void => {
    const currentLanguage = i18n.language as AvailableLanguages;
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-light fixed-top" id="main-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h1><span>{t('header.surname')}</span> {t('header.name')}</h1>
          </a>   
          <ul className="navbar-nav ml-auto" id="main-menu">
            <Link to={`/#${'home'}`} className="nav-item"><a className="nav-link active" href="#home">{t('header.nav_1')}</a></Link>
            <Link to={`/#${'about'}`} className="nav-item"><a className="nav-link" href="#about">{t('header.nav_2')}</a></Link>
            <Link to={`/#${'resume'}`} className="nav-item"><a className="nav-link" href="#resume">{t('header.nav_3')}</a></Link>
            <Link to={`/#${'portfolio'}`} className="nav-item"><a className="nav-link" href="#portfolio">{t('header.nav_4')}</a></Link>
            <Link to={`/#${'contact'}`} className="nav-item"><a className="nav-link" href="#contact">{t('header.nav_5')}</a></Link>
          </ul>
          <div className="navbar-toggle"></div>
          <div id="responsive-menu"></div>
          <a onClick={()=>{changeLanguage()}} className="btn-language">
            {i18n.language === 'ru' 
            ? <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/240px-Flag_of_Russia.svg.png`} className="flag"></img>
            : <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/240px-Flag_of_the_United_Kingdom_%283-5%29.svg.png`} className="flag"></img>
            }
          </a>
        </div>
      </nav>	
    </header>
  );
}

export default Header;
