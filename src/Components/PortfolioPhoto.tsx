import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface PortfolioPhotoProps {
  index: number;
  id: number;
}

const PortfolioPhoto: React.FC<PortfolioPhotoProps> = ({ index, id }) => {
  const { t } = useTranslation();

  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImageClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  if (t(`data.project_${id}.web`) !== `data.project_${id}.web`){
    return (
      <div key={index} className="col-lg-3 col-md-6">
        <div className="team-single wow fadeInUp" data-wow-delay="0.3s">
          <figure
            className={isEnlarged ? 'team-img-clicked' : 'team-img'}
            style={{ position: isEnlarged ? 'fixed' : 'relative' }}
            onClick={handleImageClick}
          >
            <img
              src={`/images/project_${id}/project_${id}_${index + 1}.jpg`}
              alt="altText"
            />
            {isEnlarged 
              ? <div className='team-img-text'>{t(`data.project_${id}.photo.photo_${index}_description_long`)}</div> 
              : <></>
            }
          </figure>
            {isEnlarged 
              ? <div className="shadow" onClick={handleImageClick} ></div>
              : <></>
            }
          <div className="team-info">
            <h3>{t(`data.project_${id}.photo.photo_${index}_title`)}</h3>
            <p>{t(`data.project_${id}.photo.photo_${index}_description`)}</p>
          </div>
        </div>
      </div>
    )
  }else{
    return(<></>)
  }
};

export default PortfolioPhoto;