import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation();

  return (     
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-logo">
              <h1><span>{t('header.name')}</span> {t('header.surname')}</h1>
            </div>
            <div className="footer-about">
              <p>{t('banner.aboutProfession')}</p>
            </div>
            <div className="footer-social">
              <a href="https://t.me/sqenb"><i className="fa fa-telegram"></i></a>
              <a href="https://wa.me/998333224855"><i className="fa fa-whatsapp"></i></a>
              <a href="skype:https://skype:live:cid.ae6b2c46f91df00b"><i className="fa fa-skype"></i></a>
              <a href="mailto:sergei3141@mail.ru"><i className="fa fa-envelope-o"></i></a>
              <a href="tel:+998333224855"><i className="fa fa-phone"></i></a>
              <a href="https://github.com/sergei3141"><i className="fa fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
