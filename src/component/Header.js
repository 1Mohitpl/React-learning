const Title = () => (
 
 
    <a href="/">
      <img className="logo" 
      src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png" alt="Logo" />
    
    </a>
  
  );


const HeadingComponent = () => {
    // just like arrow function  // compoenent composition
    return (
      
      <div className="header">
         <Title/>
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

  export default HeadingComponent;