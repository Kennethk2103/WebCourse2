import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import bird from "./bird"
import data from "./data"

function App() {
  let count:number = 0;

  const stuff = new data();
  var thing = stuff.getRandomBird();

  function selectedTurkey(){
    if(thing.getBoolean()==false){
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
    thing = stuff.getRandomBird();
    document.getElementById("picture")?.setAttribute("src",thing.getImg());
  }
  return (
    <div className="App">
      
        <div className='main' id="mainBoy">
          <h1>Is it a Duck or a Turkey?</h1>
      <img className="picture" id="picture" src={thing.getImg()} alt="bird" ></img> 

          <button onClick={selectedDuck}>duck</button>
          <button onClick={selectedTurkey}>turkey</button>
        </div>

    </div>
  );
}



export default App;
