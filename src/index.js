/*
  this is the first file loaded when we start our projct
*/

import React from "react";
// here we import ReactDOM object from react-dom library
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/*
  here we call render methode for it we pass strange html code, this html in javascript syntax and this kind of 
  code called jsx code, jsx is special syntax and it is not't understood by the browser and it will be
  converted behinde the sense to be understood by browser
  the seconde attribute tell react where this code well be rendered in wich dom
  root id is inside index.html in public folder
*/
ReactDOM.render(<App />, document.getElementById("root"));
