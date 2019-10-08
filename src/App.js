import React from "react";
import "./App.css";
import {Numbers} from './components/ButtonComponents/NumberButtons/Numbers';
import {Operators} from './components/ButtonComponents/OperatorButtons/Operators';
import {Specials} from './components/ButtonComponents/SpecialButtons/Specials';
import {Display} from './components/DisplayComponents/Display';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  // return (<div className="container"><Logo /><div className="App">{/* STEP 4 - Render your components here and be sure to properly import/export all files */}</div></div>);
  let nums =  Numbers().props.children;
  let ops = Operators().props.children;
  let specs = Specials().props.children;
  // nums[9].props.className = "zero"
  console.log(nums[9].state);
  return (
    <div className="calculator">
      <div className="logo"><Logo /></div>
      <Display data={0}/>
      <div className="buttons">
        <div className="row">
          {specs[0]}
          {specs[1]}
          {specs[2]}
          {ops[0]}
        </div>
        <div className="row">
          {nums[0]}
          {nums[1]}
          {nums[2]} 
          {ops[1]}
        </div>
        <div className="row">
          {nums[3]}
          {nums[4]}
          {nums[5]}
          {ops[2]}

        </div>
        <div className="row">
          {nums[6]}
          {nums[7]}
          {nums[8]}
          {ops[3]}</div>
        <div className="row">
          {nums[9]}
          {nums[10]}
          {ops[4]}</div>
      </div>
    </div>
  );
}

export default App;
/*
<div class="calculator">
    <div class="logo"><svg class="d-block" width="128" height="32" viewBox="0 0 1021 285" xmlns="http://www.w3.org/2000/svg" focusable="false"><title>Lambda Icon</title><path d="M399.69 172.69c-1.38-2.11-2.65-2.57-5.31-2.57h-47.97l-.94-.94.68-107.1a2.57 2.57 0 0 0-2.57-2.57h-23a2.57 2.57 0 0 0-2.57 2.57l-.68 130.7a2.57 2.57 0 0 0 2.57 2.57h89.01c.64 0 1.82 0 2.27-1.01.41-.94.13-1.78-.46-2.86l-11.03-18.79zM499.32 102.94c-3.65-3.65-8.35-6.49-13.98-8.46-5.66-1.97-12.61-2.97-20.65-2.97-8.72 0-16.26.78-22.39 2.31-5.28 1.32-10.43 2.99-15.35 4.98-.93.38-1.41 1.43-1.09 2.39l5.67 17.31c.33 1.02 1.45 1.54 2.46 1.19 3.85-1.35 7.57-2.43 11.1-3.22 4.4-.98 9.56-1.48 15.32-1.48 7.61 0 13.45 1.72 17.39 5.1 3.97 3.42 5.98 8.46 5.98 14.95v1.75l-1.25.89a88.317 88.317 0 0 0-11.48-3.09c-3.89-.76-8.52-1.15-13.76-1.15-6.13 0-11.79.68-16.82 2.02-5 1.33-9.35 3.34-12.95 5.99-3.57 2.63-6.39 5.99-8.4 10-2 4.01-3.02 8.85-3.02 14.4v.39c0 5.04.92 9.53 2.74 13.35 1.81 3.82 4.32 7.09 7.46 9.73 3.14 2.64 6.87 4.64 11.08 5.97 4.25 1.33 8.84 2 13.66 2 7.1 0 13.2-1.18 18.12-3.52 4.94-2.34 9.23-5.52 12.77-9.44l1.64.63v8.46c0 1.05.85 1.91 1.91 1.91h22.97c1.05 0 1.91-.85 1.91-1.91v-57.8c0-6.89-.9-13.19-2.68-18.73-1.78-5.48-4.58-10.18-8.36-13.95zm-15.16 56.48c0 5.73-2.25 10.44-6.69 14-4.38 3.5-10.25 5.28-17.46 5.28-5 0-9.12-1.18-12.26-3.5-3.23-2.39-4.87-5.79-4.87-10.12v-.39c0-4.99 1.98-8.86 5.87-11.51 3.78-2.57 9.01-3.87 15.55-3.87 3.68 0 7.19.37 10.44 1.1 3.24.73 6.22 1.7 8.86 2.89l.56.86v5.26zM650.14 90.73c-6.97 0-13.26 1.39-18.69 4.12-5.45 2.74-10.46 6.86-14.91 12.23l-1.57-.17c-2.63-5.17-6.41-9.21-11.23-11.99-4.84-2.78-10.69-4.2-17.38-4.2-3.66 0-7.01.45-9.97 1.34-2.96.89-5.66 2.11-8.05 3.62a38.072 38.072 0 0 0-6.56 5.27 62.646 62.646 0 0 0-5.48 6.29l-1.7-.57V94.59c0-1.05-.85-1.91-1.91-1.91h-23.94c-1.05 0-1.91.85-1.91 1.91v98.83c0 1.05.85 1.91 1.91 1.91h23.94c1.05 0 1.91-.85 1.91-1.91V138.1c0-7.21 1.69-12.76 5.02-16.48 3.35-3.76 8.02-5.67 13.87-5.67 5.86 0 10.43 1.91 13.59 5.69 3.12 3.72 4.71 9.26 4.71 16.46v55.32c0 1.05.85 1.91 1.91 1.91h23.94c1.05 0 1.91-.85 1.91-1.91V138.1c0-7.21 1.69-12.76 5.02-16.48 3.36-3.76 8.02-5.67 13.87-5.67 5.86 0 10.43 1.91 13.59 5.69 3.12 3.72 4.71 9.26 4.71 16.46v55.32c0 1.05.85 1.91 1.91 1.91h23.94c1.05 0 1.91-.85 1.91-1.91v-65.21c0-12.3-3.06-21.73-9.1-28.01-6.03-6.28-14.53-9.47-25.26-9.47zM1018.37 116.9c-1.77-5.49-4.58-10.18-8.35-13.95-3.65-3.65-8.35-6.49-13.98-8.46-5.66-1.97-12.61-2.97-20.65-2.97-8.72 0-16.26.78-22.39 2.31-5.28 1.32-10.43 2.99-15.35 4.98-.93.38-1.41 1.43-1.09 2.39l5.67 17.31c.33 1.02 1.45 1.54 2.46 1.19 3.85-1.35 7.57-2.43 11.1-3.22 4.4-.98 9.56-1.48 15.32-1.48 7.61 0 13.46 1.72 17.39 5.1 3.97 3.42 5.98 8.46 5.98 14.95v1.75l-1.25.89a88.317 88.317 0 0 0-11.48-3.09c-3.89-.76-8.52-1.15-13.76-1.15-6.14 0-11.79.68-16.82 2.02-5 1.33-9.35 3.34-12.94 5.99-3.57 2.63-6.39 5.99-8.4 10-2 4.01-3.02 8.85-3.02 14.4v.39c0 5.04.92 9.53 2.74 13.35 1.81 3.82 4.32 7.09 7.46 9.73 3.14 2.64 6.87 4.64 11.08 5.97 4.25 1.33 8.84 2 13.66 2 7.1 0 13.2-1.18 18.12-3.52 4.94-2.34 9.23-5.52 12.77-9.44l1.64.63v8.46c0 1.05.85 1.91 1.91 1.91h22.97c1.05 0 1.91-.85 1.91-1.91v-57.8c-.02-6.9-.92-13.2-2.7-18.73zm-23.51 42.52c0 5.73-2.25 10.44-6.69 14-4.38 3.5-10.25 5.28-17.46 5.28-5 0-9.12-1.18-12.26-3.5-3.23-2.39-4.87-5.79-4.87-10.12v-.39c0-4.99 1.98-8.86 5.87-11.51 3.78-2.57 9.01-3.87 15.55-3.87 3.68 0 7.19.37 10.44 1.1 3.24.73 6.22 1.7 8.86 2.89l.56.86v5.26zM788.86 104.59c-4.04-4.5-8.74-7.94-13.96-10.21-5.24-2.28-10.72-3.44-16.3-3.44-7.11 0-13.07 1.56-17.73 4.64-4.7 3.11-8.77 7.13-12.1 11.95l-1.6-.56V61.43c0-1.05-.8-1.91-1.79-1.91h-22.44c-.99 0-1.79.85-1.79 1.91v132c0 1.05.8 1.91 1.79 1.91h22.44c.99 0 1.79-.85 1.79-1.91v-10.6l1.56-.61c3.21 4.06 7.23 7.67 11.94 10.72 4.65 3.02 10.68 4.54 17.92 4.54 5.71 0 11.25-1.16 16.49-3.44 5.22-2.28 9.88-5.71 13.86-10.21 3.98-4.5 7.25-10.11 9.69-16.67 2.44-6.56 3.69-14.22 3.69-22.76v-.39c0-8.54-1.24-16.2-3.69-22.76-2.44-6.55-5.73-12.16-9.77-16.66zm-13.8 39.81c0 4.52-.65 8.64-1.93 12.24-1.28 3.61-3.05 6.76-5.25 9.37-2.21 2.62-4.79 4.66-7.68 6.07-2.89 1.41-6.04 2.13-9.35 2.13-3.32 0-6.46-.72-9.35-2.13-2.89-1.41-5.45-3.46-7.6-6.08-2.14-2.61-3.88-5.8-5.15-9.46-1.28-3.67-1.93-7.75-1.93-12.14v-.39c0-4.38.65-8.46 1.93-12.14 1.28-3.67 3.01-6.85 5.15-9.46 2.15-2.62 4.71-4.67 7.6-6.08 2.89-1.41 6.03-2.13 9.35-2.13 3.32 0 6.46.72 9.35 2.13 2.89 1.41 5.47 3.46 7.68 6.07 2.2 2.61 3.97 5.8 5.25 9.47 1.28 3.67 1.93 7.75 1.93 12.14v.39zM913.42 59.52h-22.44c-.99 0-1.79.85-1.79 1.91v45.53c-1.8.59-1.88.15-2.03-.06-3.25-4.55-7.17-8.36-11.66-11.33-4.65-3.08-10.61-4.64-17.73-4.64-5.58 0-11.07 1.16-16.3 3.44-5.22 2.28-9.92 5.71-13.96 10.21-4.04 4.51-7.34 10.11-9.78 16.66-2.45 6.56-3.69 14.22-3.69 22.76v.39c0 8.54 1.24 16.2 3.69 22.76 2.45 6.56 5.71 12.17 9.69 16.67 3.98 4.49 8.64 7.93 13.86 10.21a41.067 41.067 0 0 0 16.49 3.44c7.24 0 13.27-1.53 17.92-4.54 4.71-3.05 8.73-6.66 11.94-10.72l1.56.61v10.6c0 1.05.8 1.91 1.79 1.91h22.44c.99 0 1.79-.85 1.79-1.91v-132c0-1.05-.8-1.9-1.79-1.9zm-23.87 84.88c0 4.38-.65 8.46-1.93 12.14-1.28 3.66-3.01 6.85-5.15 9.46-2.15 2.62-4.71 4.67-7.6 6.08-2.89 1.41-6.04 2.13-9.35 2.13-3.31 0-6.46-.72-9.35-2.13-2.89-1.41-5.47-3.46-7.68-6.07-2.2-2.61-3.97-5.76-5.25-9.37-1.28-3.6-1.93-7.72-1.93-12.24v-.39c0-4.39.65-8.47 1.93-12.14 1.28-3.67 3.05-6.86 5.25-9.47 2.21-2.62 4.79-4.66 7.68-6.07 2.89-1.41 6.04-2.13 9.35-2.13 3.32 0 6.47.72 9.35 2.13 2.89 1.41 5.45 3.46 7.6 6.08 2.14 2.61 3.88 5.79 5.15 9.46 1.28 3.68 1.93 7.76 1.93 12.14v.39zM243.74.01L4.91 0C2 0-.35 2.4-.35 5.35v185.58c0 1.73.82 3.36 2.21 4.36l117.66 88.18a8.016 8.016 0 0 0 4.7 1.53l.01.01c1.65 0 3.29-.51 4.7-1.53l117.84-88.18c1.39-1 2.21-2.63 2.21-4.36V5.36c.01-2.96-2.34-5.35-5.24-5.35zM124.32 99.85c-.07 0-.29.02-.34.2l-36.22 63.46c-.45.8-1.3 1.3-2.22 1.3l-29.56-.03c-.93 0-1.75-.49-2.21-1.31-.46-.81-.46-1.79 0-2.6l56.9-100.07c.46-.81 1.3-1.31 2.22-1.31l11.42.01 11.42-.01c.92 0 1.77.5 2.22 1.31l56.92 100.08c.46.82.46 1.79 0 2.6-.46.82-1.29 1.31-2.21 1.31l-29.56.03c-.91 0-1.76-.5-2.22-1.3l-36.22-63.46a.375.375 0 0 0-.34-.21z" fill="#fff"></path></svg></div>
    <div class="display">0</div>
    <div class="buttons">
        <div class="row">
            <div class="button function">C</div>
            <div class="button function">x/-</div>
            <div class="button function">%</div>
            <div class="button operator">/</div>
        </div>
        <div class="row">
            <div class="button number">1</div>
            <div class="button number">2</div>
            <div class="button number">3</div>
            <div class="button operator">x</div>
        </div>
        <div class="row">
            <div class="button number">4</div>
            <div class="button number">5</div>
            <div class="button number">6</div>
            <div class="button operator">-</div></div>
        <div class="row">
            <div class="button number">7</div>
            <div class="button number">8</div>
            <div class="button number">9</div>
            <div class="button operator">+</div></div>
        <div class="row">
            <div class="button number zero">0</div>
            <div class="button number">.</div>
            <div class="button operator">=</div></div>
    </div>
</div>
*/
/*
*{padding: 0; margin: 0; box-sizing: border-box;}
html{font-size: 62.5%; font-family: sans-serif}
body{background: #333;}

@functionColor: #225d9e;
@numberColor: #184379;
@displayColor: #323335;
@operatorColor: #237293;
@backgroundColor: #a81d36;
.calculator{
    width: 470px;
    height: 700px;
    border-radius: 15px;
    margin: 1vh auto;
    background-color: @backgroundColor;
    border: 2px solid #525051;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    .logo{
        margin: 0 auto;
        width: 85%;
        height: 8%;
    }
    .display{ 
        height: 100px;
        width: 85%;
        margin: 0 auto;
        background-color: @displayColor;
        border-radius: 70px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
        font-size: 5rem;
        color: white;
        margin-bottom: 3%;
    }
    .buttons{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;
        height: 70%;
        // background-color: rgba(0,0,0,0.3);
        border-radius: 15px;
        box-shadow:above;
        .row{
            height: 15%;
            width: 100%;
            border-radius: 15px;
            // background-color: rgba(0,0,0,0.3);
            display: flex;
            justify-content: space-evenly;
            .button{
                width: 80px;
                height: 80px;
                border-radius: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 3rem;
                color: white;
                box-shadow: 0 4px #222;
                &.zero{
                    width:185px;
                }
            }
        }
    }
}
.function{ background-color: @functionColor; }
.operator{ background-color: @operatorColor; }
.number{ background-color: @numberColor; }
*/