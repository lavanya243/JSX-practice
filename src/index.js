//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Lavanya";
const lname = "Narayanan";
const currentdate = new Date();
//console.log(currentdate);

const CURRENTYEAR = currentdate.getFullYear();
console.log(CURRENTYEAR);

ReactDOM.render(
  <div>
    <p>Created by {name + " " + lname}.</p>

    <p>Copyright {CURRENTYEAR}.</p>
  </div>,
  document.getElementById("root")
);
