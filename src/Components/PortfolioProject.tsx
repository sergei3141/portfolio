import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import PortfolioPhoto from './PortfolioPhoto';

function PortfolioProject() {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const idNumber = Number(id);

  return (
    <>
      <section className="about-us" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title" style={{margin:"20px 0px"}}>
                <h2>{t(`data.project_${id}.title`)}</h2>
                <p>{t(`data.project_${id}.short_description`)}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="about-image wow fadeInLeft" data-wow-delay="0.3s">
                <img src={`/images/project_${idNumber}/project_${idNumber}_0.jpg`} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="wow fadeInUp" data-wow-delay="0.8s">
                <p>
                  <div dangerouslySetInnerHTML={{ __html: t(`data.project_${id}.description_long`)} } />
                  <h5 className="portfolio-my-role">{t(`portfolio.role`)}</h5>
                  <div>{t(`data.project_${id}.my_role`)}</div>
                </p>
                <div className='about-content about-project'>
                  <ul>
                    <li>
                      <i className="flaticon-freelance"></i>
                      <b>Technologies:</b> {t(`data.project_${id}.technologies`)}
                    </li>
                    <li>
                      <i className="flaticon-translation"></i>
                      {t(`data.project_${id}.web`) === `data.project_${id}.web` || t(`data.project_${id}.web`) === ""
                      ? <div>Невозомжно  предоставить ссылку на проект. Возможно, она была изменена, проект больше не существет или его релиз ещё не прошёл.</div>
                      : <><b>Web:</b><a href={t(`data.project_${id}.web`)}> {t(`data.project_${id}.web`)}</a></>}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="our-team">
        <div className="container" style={{ marginTop: '-100px' }}>
          <div className="row">
            {[0,1,2,3].map((index) => (
              <PortfolioPhoto key={index} id={idNumber} index={index} />
            ))}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="load-more-portfolio">
                <Link to={`/#${'portfolio'}`}>Back to portfolio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioProject;