import React, { useState } from 'react';

const ResultItem = ({singleResult, handleNewFocus}) => {

    const handleFocus = () => {
        handleNewFocus(singleResult);
        console.log("mouse enter")
    }




    if (singleResult.links)
    {
        const thumb = singleResult.links[0].href;
    
        return(
            <div className="result-item">
                <a href={thumb} className="navbar-link tooltip" download="NASA_image" target="_blank">
                    <img src={thumb} className="result-thumb" onMouseEnter={handleFocus}/>
                </a>
            </div>
        );
    }
    else
    {
        return null;
    }
}
export default ResultItem;