import {RestrauCrad} from "../constant";
import {useState} from "react";


const Body = () => {
  // const searchtxt = "KFC"; // this is how created varibale in normla javascript it is hardcoded value, 
  // searchtext is a local state variable
  const [searchtext, setSearchText] = useState("KFC");  // this is way  to create state variables comes form react

  const [searchClicked, setsearchCliked] = useState("False");

    return (
        <>
    <div className="search-Box">
      <input type="text" 
      className="search-restaurent" 
      placeholder="Search" 
      value={searchtext}
      onChange={(e)=>{
        setSearchText( e.target.value);
      }}
      />

     <h1>{searchClicked}</h1>
      <button className ="search-btn" 
      onClick={(e)=>{
      setsearchCliked("True")}}
      >Search</button>

    </div>

      <div className="Restrau-list">
      <>
      <RestrauCrad />
      <RestrauCrad />
      <RestrauCrad />
      <RestrauCrad />
      <RestrauCrad />
      <RestrauCrad />
    
      
    
      </>
      </div>
      </>
    )
  }

  export default Body;