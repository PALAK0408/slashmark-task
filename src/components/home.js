import React from 'react';
import Navbar from './navbar';
import bannerimage from "../assets/banner-image.png"
import image from "../assets/product-photo.png"
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


const Home = () => {
  return( 

     <div classname="home-container">
       <Navbar />
       <div classname="home-banner-container">
         <div classname="home-banner-image-container">
            <img src={bannerimage}></img>
         </div>
         <div className="home-text-section">
            <h1 classname="primary-heading">
               YOUR DREAM SKINCARE ALL HERE
            </h1>
            <h3 classname="primary-text">
               explore your inner skincare enthusiast ,
               healthy skin ,healthy mind
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ipsum magni excepturi neque fugiat nam tenetur est dolorum ratione eum ipsa aliquid beatae voluptas,
               voluptatibus placeat quas delectus voluptate quae quos?
            </h3>
            <button className='secondary-button'>
               Order Now <BsFillArrowRightCircleFill/>
            </button>
            
         </div>
         <div className="home-image-section">
            <img src={image}></img>
         </div>
      
       </div>
      
     </div>
  );
    
  
};

export default Home;