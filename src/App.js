import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

// writing code
// writing react code in functional component










const AppLayout = () =>{
  return (
    <> 
   <HeadingComponent/>
    <Body/>
    <Footer />


</>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
