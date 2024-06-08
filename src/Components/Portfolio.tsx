import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';

function Portfolio() {
  
  const { t } = useTranslation();

  const ProjectCard = () => {
    return(
      <>
        {[1,2,3,4,5,6].map((index:number)=>{
          index = index - 1;
          return(
            <div key={index} className="col-md-3 col-sm-6 col-xs-12 portfolio-box designing">
              <div className="single-portfolio">
                <Link to={`/content/${index}`} className="has-popup">
                  <img src={`/images/project_${index}/project_${index}_0.jpg`} className="Portfolio Image" alt="" />
                  <div className="single-portfolio-overlay">
                    <h2>{t(`data.project_${index}.title`)}</h2>
                    <h3>{t(`data.project_${index}.short_description`)}</h3>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>{t('portfolio.title')}</h2>
              <p>{t('portfolio.subtitle')}</p>
            </div>
          </div>
        </div>
        <div className="row portfolio-boxes">
          {ProjectCard()}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="load-more-portfolio">
              <a href="https://github.com/sergei3141" target="_blank" rel="noopener noreferrer">Github Sergei3141</a>
              <a href="https://github.com/sergeybersenev98" target="_blank" rel="noopener noreferrer">Github Sergei 98</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
