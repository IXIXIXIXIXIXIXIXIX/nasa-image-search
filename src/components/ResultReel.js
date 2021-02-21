import React from 'react';
import ResultItem from './ResultItem';

const ResultReel = ({results, handleNewFocus}) => {

    console.log("result reel:", results);
    const resultNodes = results.map((result) => {

        // console.log("passing to item:", result);
        return (
            <ResultItem singleResult={result} key={result.data[0].nasa_id} handleNewFocus={(focussedItem) => {handleNewFocus(focussedItem)}}/>
        );

    });

    return(
        <div className="result-reel transparent-box in-from-bottom">
            {resultNodes}
        </div>
    );

};

export default ResultReel;