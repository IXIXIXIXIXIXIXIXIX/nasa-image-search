import React, {useState, useEffect} from 'react';

const SearchBox = ({handleSearchClick}) =>{


    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {

        setInputValue(event.target.value);
        console.log("input:", inputValue);
    }

    const onSearch = () => {
        handleSearchClick(inputValue);
    };

    const handleKeyUp = (event) => {
        console.log("keyup:", event);
        if (event.key ==="Enter" && inputValue != "")
        {
            handleSearchClick(inputValue);
        }
    };

    return (
        <div className="transparent-box in-from-right" id="search-box">
            <span className="box-heading">
                Search for NASA images:
                </span>
                <div className="form-wrapper">
                    <i className="fas fa-search icon"></i>
                    <input type="text" id="searchInput" value={inputValue} autoComplete="off" 
                        onChange={handleInputChange} onKeyUp={handleKeyUp}/>
                </div>
        </div>
    );
};

export default SearchBox;