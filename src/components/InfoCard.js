import React from 'react'

const InfoCard = ({backGroundInfo, disappearing}) => {

  if (disappearing)
  {
    return (
      <>
        <div className="main-body-row">
        </div>  
          <div className="info-card disappearing">
            <span className="info-title">{backGroundInfo["title"]}</span>
            <p className="info-main">{backGroundInfo["explanation"]}</p>
            <span className="info-instruction">Mouse over to hide.</span>
        </div>
      </>
         )
  }
  else
  {
    
    console.log(backGroundInfo);
    return (
        <div className="info-card displayer-info in-from-left">
          <span className="info-title">{backGroundInfo[0]["title"]}</span>
          <p className="info-main">{backGroundInfo[0]["description"]}</p>
        </div>
    );
  }
};

export default InfoCard;