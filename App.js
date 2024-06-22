import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/logo.png";
// writing code
// writing react code in functional component
const Title = () => (
  <a href="/">
    <div className="icon-name">
      <img src={logo} alt="Logo" />
      <h2 id="title">Eat&Chat</h2>
    </div>
  </a>
);

const HeadingComponent = () => {
  // just like arrow function  // compoenent composition
  return (
    <div className="header">
      <Title />
      <div className="nave-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestrauCrad = () => {
  return (
    <div className="Card">
         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b78fb4af57487179b0043cf69fadf8a8"/>
          <h2>Pizza Hut</h2>
          <h4> 4.3 stars Rating</h4>

    </div>
  )
}

const Body = () => {
  return (
    <div className="Restrau-list">
    <>
    <RestrauCrad />
    <RestrauCrad />
    <RestrauCrad />
    <RestrauCrad />
    <RestrauCrad />
    <RestrauCrad />
  
    
    <h2>Body</h2>
    </>
    </div>
  )
}


const Footer = () => {
  return (
    <h2>Footer</h2>
  )
}


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
