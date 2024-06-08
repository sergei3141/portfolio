import React from 'react';
import { useTranslation } from 'react-i18next';

function Resume() {

  const { t } = useTranslation();

  interface SkillsCardObject {
    readonly raiting: number,
    readonly title: string
  }

  interface ExperienceCardObject {
    readonly years: string,
    readonly title: string,
    readonly description: string
  }

  type SkillsCardArray = ReadonlyArray<SkillsCardObject>;
  type ExperienceCardArray = ReadonlyArray<ExperienceCardObject>;

  const skillsCard: SkillsCardArray = [
    {raiting: 4.5, title: 'React-redux'},
    {raiting: 4, title: 'JavaScript, TypeScript'},
    {raiting: 4, title: 'HTML, CSS'},
    {raiting: 3.5, title: 'Vue-Vuex'},
    {raiting: 3, title: 'Laravel'},
    {raiting: 2, title: 'PHP'},
    {raiting: 2, title: 'Python'}
  ]

  const experienceCard: ExperienceCardArray = [
    {years: '2021', title: t('resume.experience_1.title'), description: t('resume.experience_1.description')},
    {years: '2022', title: t('resume.experience_2.title'), description: t('resume.experience_2.description')},
    {years: '2023', title: t('resume.experience_3.title'), description: t('resume.experience_3.description')},
    {years: '2024', title: t('resume.experience_4.title'), description: t('resume.experience_4.description')},
  ];

  const educationCard: ExperienceCardArray = [
    {years: '2017-2021', title: t('resume.education_1.title'), description: t('resume.education_1.description')},
    {years: '2021-2024', title: t('resume.education_2.title'), description: t('resume.education_2.description')},
  ];

  return (
    <section className="my-resume" id="resume">
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>{t('resume.title')}</h2>
              <p>{t('resume.subtitle')}</p>
            </div>
          </div>
        </div>
        
        <div className="row mb-5 pb-5">
          <div className="col-md-6">
            <div className="experience">
              <h3 className="sub-title"><i className="fa fa-briefcase"></i> {t('resume.experience')}</h3>
              <div className="swiper-container experience-slider">
                {experienceCard.map((obj, index)=>{
                  return(
                    <div key={index} className="swiper-slide">
                      <div className="experience-single">
                        <h5>{obj.years}</h5>
                        <h4>{obj.title}</h4>
                        <p>{obj.description}</p>
                      </div>
                    </div>
                  )
                })}
                <div className="experience-pagination"></div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="education">
              <h3 className="sub-title"><i className="fa fa-graduation-cap"></i> {t('resume.education')}</h3>
              <div className="swiper-container education-slider">
                {educationCard.map((obj, index)=>{
                    return(
                      <div key={index} className="swiper-slide">
                        <div className="experience-single">
                          <h5>{obj.years}</h5>
                          <h4>{obj.title}</h4>
                          <p>{obj.description}</p>
                        </div>
                      </div>
                    )
                  })}
                <div className="education-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div className="skill">
              <h3 className="sub-title"><i className="fa fa-star-o"></i>{t('resume.skills')}</h3>
              <div className="skill-content">
                <div className="row">
                  {skillsCard.map((obj, index)=>{
                      const stars: JSX.Element[] = [];  
                      let numberOfFullStars: number = 5;  // It's nessecary when we use 1/2 of star
                      // Push FULL stars in array
                      for (let i = 0; i < Math.floor(obj.raiting); i++) {
                        stars.push(<i key={i} className="fa fa-star"></i>);
                      }
                      // Push 1/2 star if it's nessecary
                      if (Math.floor(obj.raiting) !== obj.raiting){
                        stars.push(<i className="fa fa-star-half-o"></i>);
                        numberOfFullStars--;
                      }
                      // Push EMPTY stars to 5
                      for (let i = Math.floor(obj.raiting); i < numberOfFullStars; i++) {
                        stars.push(<i key={i} className="fa fa-star-o"></i>); 
                      }
                    return(
                      <div key={index} className="col-lg-4 col-md-6 skill-card">
                        <div className="skill-single">
                          <div>
                            <h5>{obj.title}</h5>
                            <div className="skill-ratting">
                              {stars}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Resume;
