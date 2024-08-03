import {RestrauCrad} from "../constant";


const Body = () => {
    return (
        <>
    <div className="search-Box">
      <input type="text" className="search-restaurent" placeholder="Search" value=""/>
         
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