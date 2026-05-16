import "./Background.css";

import image8 from "../assets/research page.jpg";
import image6 from "../assets/systems biology.jpg";
import image7 from "../assets/data analytics.jpg";




const images = [image8, image6, image7];

const Background = ({ heroCount }) => {
  return (
    <div className="background-container">
      
      <img
        src={images[heroCount]}
        className="background"
        alt="background"
      />
     
    </div>
  );
};

export default Background;
