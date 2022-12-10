import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import bird from "./bird"
import data from "./data"
import useSound from 'use-sound'


const stuff = new data();
function App() {
  let count:number = 0;

  var thing = stuff.getRandomBird();

  function selectedTurkey(){
    
    if(thing.getBoolean()===false){
      count++;
      if(count>5){
        window.location.replace("localhost:8080");

      }
    }
    else{
      count=0;
    }
    handleClick();
  }

  function selectedDuck(){
    if(thing.getBoolean()){
      count++;
      if(count>5){
        window.location.replace("localhost:8080");
      }
    }
    else{
      count=0;
    }
    handleClick();
  }
  function handleClick(){
    var audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/09/audio_b6bb9866ac.mp3?filename=glitch-sound-static-noise-30279.mp3');
    audio.play();
    thing = stuff.getRandomBird();
    document.getElementById("picture")?.setAttribute("src",thing.getImg());
  }
 
  return (
    <div className="App">
      
        <div className='main' id="mainBoy">
          <h1>Is it a Duck or a Turkey?</h1>
      <img className="picture" id="picture" src={thing.getImg()} alt="bird" ></img> 
      <div>
      </div>
      
          <button type="button" className="btn btn-dark spacedboys" onClick={selectedDuck}>duck</button>
          <button type="button" className="btn btn-dark spacedboys" onClick={selectedTurkey}>turkey</button>
        </div>

    </div>
  );
}



export default App;
