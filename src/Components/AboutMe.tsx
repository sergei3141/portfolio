import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>{t('aboutMe.title')}</h2>
              <p>{t('aboutMe.subtitle')}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="about-content wow fadeInUp" data-wow-delay="0.8s">
              <div className='row'>
              <p className="col-lg-6 about-me">{t('aboutMe.about')}</p>
              <p className="col-lg-6 about-me">{t('aboutMe.about_2')}</p>
              </div>
              <ul>
                <li><i className="flaticon-calendar"></i><b>{t('aboutMe.info_1')}</b> 22.12.1998</li>
                <li><i className="flaticon-flag"></i><b>{t('aboutMe.info_4')}</b> {t('aboutMe.info_4_2')}</li>
                <li><i className="flaticon-phone-call"></i><b>{t('aboutMe.info_2')}</b> +998 33 322 4855</li>
                <li><i className="flaticon-placeholder"></i><b>{t('aboutMe.info_5')}</b> {t('aboutMe.info_5_2')}</li>
                <li><i className="flaticon-email"></i><b>{t('aboutMe.info_3')}</b> sergei3141@mail.ru</li>
                <li><i className="flaticon-translation"></i><b>{t('aboutMe.info_6')}</b> {t('aboutMe.info_6_2')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
