import React from 'react';

// Import static images
import FreeImage1 from '../../images/t1.jpg';
import FreeImage2 from '../../images/t3.jpg';
import FreeImage3 from '../../images/t2.jpg';
import FreeImage4 from '../../images/t4.jpg';
import FreeImage5 from '../../images/t6.jpg';
import FreeImage6 from '../../images/t5.jpg';
import FreeImage7 from '../../images/Asset 1.png';
import FreeImage8 from '../../images/Asset 2.png';
import FreeImage9 from '../../images/Asset 3.png';
import FreeImage10 from '../../images/Asset 4.png';
import FreeImage11 from '../../images/image.png';





const BlogSection = () => {
  return (
    <section className="image-section">
      <div className="image-container">
        <div className="image-wrapper">
          <img src={FreeImage1} alt="Image 1" className="free-image1" />
        </div>
        <div className="image-wrapper" >
          <img src={FreeImage2} alt="Image 2" className="free-image2" />
        </div>
        <div className="image-wrapper">
          <img src={FreeImage3} alt="Image 3" className="free-image3" />
        </div>
        <div className="image-wrapper">
          <img src={FreeImage4} alt="Image 4" className="free-image4" />
        </div>
        <div className="image-wrapper" >
          <img src={FreeImage5} alt="Image 5" className="free-image5" />
        </div>
        <div className="image-wrapper" >
          <img src={FreeImage6} alt="Image 6" className="free-image6" />
        </div>
        <div className="image-wrapper" >
          <img src={FreeImage7} alt="Image 7" className="free-image7" />
        </div> 
        <div className="image-wrapper" >
          <img src={FreeImage8} alt="Image 8" className="free-image8" />
        </div>
         <div className="image-wrapper" >
          <img src={FreeImage9} alt="Image 9" className="free-image9" />
        </div>
         <div className="image-wrapper" >
          <img src={FreeImage10} alt="Image 10" className="free-image10" />
        </div>
        <div className="image-wrapper" style={{ top: '70px', left: '-15px' }}>
          <img src={FreeImage11} alt="Image 11" className="free-image11" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
