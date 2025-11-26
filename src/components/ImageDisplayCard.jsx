import React from 'react';
import imageDisplay from '../assets/general2.png';

const ImageDisplayCard = () => {
  return (
    // Outer container: Full width (w-full). We set a max height for the effect.
    // h-[50vh] will make it 50% of the viewport height, which is a common way 
    // to achieve a visually "reduced height" banner effect.
    <div className="w-full h-[45vh] flex justify-center items-center bg-white overflow-hidden"> 
      
      {/* The image itself spans the full width and fills the container height */}
      <img 
        src={imageDisplay} 
        alt="Group of happy diverse young people taking a selfie" 
        // w-full: Always full width of the container.
        // h-full: Always full height of the container (50vh).
        // object-cover: Ensures the image covers the area, cropping as necessary.
        className="w-full h-full object-cover block" 
      />
    </div>
  );
};

export default ImageDisplayCard;