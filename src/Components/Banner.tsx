import React from 'react';
import { useTranslation } from 'react-i18next';

function Banner() {
  const { t } = useTranslation();

  return (
    <div className="banner" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content">
              <h2 className="cd-headline clip">
                <span className="before-heading">{t('banner.hello')}</span>
                <span className="cd-words-wrapper">
                  <b className="is-visible">{t('banner.profession')}</b>
                </span>
              </h2>
              <p>{t('banner.aboutProfession')}</p>
              <a href="https://github.com/sergei3141"  target="_blank" rel="noopener noreferrer" className="btn-download">
                {t('portfolio.load')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
