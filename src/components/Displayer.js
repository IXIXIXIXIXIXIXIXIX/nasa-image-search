import React from 'react';
import InfoCard from './InfoCard';

const Displayer = ({singleResult}) => {
    console.log("Displayer:", singleResult);

    if (singleResult)
    {
        return (
            <div className="displayer-container">
                <div className="transparent-box displayer">
                    <div className="displayer-header">

                        <a href={singleResult.links[0].href} className="navbar-link tooltip" download="NASA_image" target="_blank">
                            <i className="fas fa-arrow-down"></i>
                                
                            <span className="tooltiptext-right transparent-box">Download Image</span>
                                </a>


                    </div>
                    <div className="displayer-main">
                        <img src={singleResult.links[0].href} className="displayer-image" />
                    </div>
                </div>
                <InfoCard backGroundInfo={singleResult.data} disappearing={false}/>
            </div>
        );
    }
    else
    {
        return (
            <div className="displayer-container in-from-left">
                <div className="transparent-box displayer">
                </div>
            </div>
        );
    }
};

export default Displayer;