import React from 'react';
import { useTranslation } from 'react-i18next';

function Contacts() {

  const { t } = useTranslation();

  return (
    <div className="contact-information"  id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-info-single wow fadeInUp" data-wow-delay="0.3s">
              <h3>{t('aboutMe.info_5')}</h3>
              <p>{t('aboutMe.info_5_3')}<br />{t('aboutMe.info_5_2')}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-single wow fadeInUp" data-wow-delay="0.6s">
              <h3>{t('aboutMe.info_2')}</h3>
              <p>
                +998 (33) 322-48-55 
                <i className="fa fa-whatsapp m-1" aria-hidden="true"></i>
                <i className="fa fa-telegram m-1" aria-hidden="true"></i>
                <i className="fa fa-skype m-1" aria-hidden="true"></i>
                <i className="fa fa-phone m-1" aria-hidden="true"></i>
              <br />
                +7 (977)163-98-33 
                <i className="fa fa-telegram m-1" aria-hidden="true"></i> </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-single wow fadeInUp" data-wow-delay="0.9s">
              <h3>{t('aboutMe.info_3')}</h3>
              <p>sergei3141@mail.ru<br />98bersenev@mail.ru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
