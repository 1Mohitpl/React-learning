import React from "react";
import ReactDOM from "react-dom/client";
    // writing code in react in class functional way 
const heading = (
<h1 id="titele" key="h2">                         
i want be an good software enginner
</h1>);


// writing react code in functional component
const heading1 = ()=>{
    return ( 
    <div><h1>nameste react</h1> </div>);
};

const heading2 = ()=>{    // just like arrow function
  return <div><h1>Hello raect is just beast</h1></div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
