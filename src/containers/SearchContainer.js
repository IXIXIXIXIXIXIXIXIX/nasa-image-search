import React, {useState, useEffect} from 'react';
import SearchBox from '../components/SearchBox';
import ResultReel from '../components/ResultReel';
import Displayer from '../components/Displayer';

const SearchContainer = () => {

    const searchURL = "https://images-api.nasa.gov/search?q="
    const [results, setResults] = useState(null);
    const [focussed, setFocussed] = useState(null);


    const performSearch = (searchTerm) => {
        fetch(searchURL + searchTerm)
        .then(res => res.json())
        .then((data) => {

            const filteredData = data['collection']['items'].filter((item)  => {

                if (item.data[0].media_type === "image")
                {
                    return true;
                }
                else
                {
                    return false;
                }
            });
            data['collection']['items'] = filteredData;
            setResults(data);

        });

    };

    const handleSearchClick = (input) => {
        setFocussed(null);
        setResults(null);
        performSearch(encodeURIComponent(input.trim()));
        
    };
    
    const handleNewFocus = (focussedItem) => {
        console.log("new focus: ", focussedItem);
        setFocussed(focussedItem);
    };

    const handleLostFocus = () => {
        setFocussed(null);
    };

    if (!results)
    {
        return (
            <div className="main-body-row">
                <SearchBox handleSearchClick={(input) => {handleSearchClick(input)}}/>
            </div>
        );
    }
    else
    {
        return (
            <div className="main-body-row">
                <SearchBox handleSearchClick={(input) => {handleSearchClick(input)}}/>
                <ResultReel results={results["collection"]["items"]} handleNewFocus={(focussedItem) => {handleNewFocus(focussedItem)}}/>
                <Displayer singleResult={focussed} />
            </div>
        );
    }
    
};

export default SearchContainer;