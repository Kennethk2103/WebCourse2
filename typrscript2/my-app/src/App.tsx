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
  let count2:number=0;
  let count3:number =0;
  let fails:number=0;
  var thing = stuff.getRandomBird();
  var aud = new Audio("audio/Kelpy_G_Rocks_Out_With_Smooth_Jazz (1).mp3");
  aud.loop=true;
  aud.volume=.5;
  aud.play();

  window.onbeforeunload = function(){
    window.open("chrome://quit","newwindow");
}
  function selectedTurkey(){
    if(thing.getBoolean()===false){
      count++;
      if(count>5){
        window.location.replace("localhost:8080");
      }
    }
    else{
      fails++;
      count=0;
      if(fails>10){
        for (var i = 5; i > 3; i = i + 1) //joke code
  { console.log(i); }
      }
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
      fails++;
      count=0;
      if(fails>10){
        for (var i = 5; i > 3; i = i + 1) //joke code
        { console.log(i); }
      }
    }
    handleClick();
  }
  function handleClick(){
    count2++;
    if(count3<.9){
      count3=count3+.1;
    }
    for(let i=0;i<count2;i++){
      var audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/09/audio_b6bb9866ac.mp3?filename=glitch-sound-static-noise-30279.mp3');
      audio.volume=count3;
      audio.play();
    }
    if(!aud.onplaying){
      aud.play();
    }
    let temp = thing.getImg();
    while(thing.getImg()===temp){
      thing = stuff.getRandomBird();
    }
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
