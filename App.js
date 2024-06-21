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

const Body = () => {
  return (
    <h2>Body</h2>
  )
}


const Footer = () => {
  return (
    <h2>Footer</h2>
  )
}


const AppLayout = () =>{
  return (
    <React.Fragment>
    <Header/>
    <Body/>
    <Footer />
</React.Fragment>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
