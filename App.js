import React from "react";
import ReactDOM from "react-dom/client";



const Heading1 = React.createElement("h1", {
    id:"title1"
}, "Heading1");

const heading2 = React.createElement("h2",{
  id:"title2"
}, "heading2");

const container = React.createElement("div",{
id:"conatiner"
}, [Heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);