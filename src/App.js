import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import './tooltip.css';
import './icons.css';
import './animation.css';
import getRandomInt from './helpers/RandomInteger';
import NavBar from './components/NavBar';
import InfoCard from './components/InfoCard';
import SearchContainer from './containers/SearchContainer';
import NotFound from './components/NotFound';

function App() {

  const numberOfImages = 25;
  const nasaApiAccessData = {
    apiKey: "bD3Dn3OL0CSHsCy7UnUFmorfgRMNNT3TMz4lWoaF",
    // apiKey: "DEMO_KEY",
    randomImageURL: `https://api.nasa.gov/planetary/apod?count=${numberOfImages}&api_key=`
  };

  const [backGroundInfo, setBackgroundInfo] = useState(null);
  const [currentBackGround, setCurrentBackGround] = useState(null);


  const getBackGroundInfo = () => {
    console.log("fetching background img data...");
    fetch(nasaApiAccessData.randomImageURL + nasaApiAccessData.apiKey)
      .then(res => res.json())
      .then((data) => {

        const imagesOnly = data.filter((entry) =>{

          // Strip out any entries that have a video instead of an image
          if (entry["media_type"] === "image")
          {
            return true;
          }
          else
          {
            return false;
          }
        });
        
        // Check that there is at least one image; recurse if not 
        if (imagesOnly.length > 0)
        {
          setBackgroundInfo(imagesOnly);
          setCurrentBackGround(imagesOnly[0]);
        }
        else
        {
          getBackGroundInfo();
        }
      });
  };


  useEffect(() => {
    getBackGroundInfo()
  }, []);

  const handleBGChange = () => {
    console.log("CLICKED!");
    const randInt = getRandomInt(0, backGroundInfo.length);
    setCurrentBackGround(backGroundInfo[randInt]);
  };

  if (!currentBackGround)
  {
    return (
      <h1 className="loading">loading...</h1>
    );
  }
  else
  {
    console.log("whole object is:", backGroundInfo);

    console.log("Variable is now: ", currentBackGround);
    return (
      <div className="App" style={{ backgroundImage: `url(${currentBackGround["url"]})` }}>
        <Router>
          <>
            <header className="header">
              <NavBar handleBGChange={handleBGChange} downloadLink={currentBackGround["url"]}/>
            </header>
            
            <main className="main-body">
            <Switch>
            <Route path="/search" component={SearchContainer} />
            <Route exact path="/" render={() => <InfoCard backGroundInfo={currentBackGround} disappearing={true}/>} />
            <Route component={NotFound} />
            </Switch>
            </main>
            
          </>
        </Router>
      </div>
    );
  }
}

export default App;
