import React from "react";
import ReactDOM from "react-dom/client";
    // writing code in react in class functional way 
const heading = (
<h1  id="titele" key="h2">                         
i want be an good software enginner
</h1>);


// writing react code in functional component
const Heading1 = function(){       
    return (  
    <div><h1>nameste react</h1> </div>);
};

const HeadingComponent = ()=>{    // just like arrow function  // compoenent composition
  return( 
  
<div className="main">   
<div>

     
     <button type="clik">person</button>
</div>                             
    <Heading1 />    
     {heading}
  <h2>Hello raect is just beast </h2> 
  <h2> hey,i am fronted enginner</h2>
  
</div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent  />);
