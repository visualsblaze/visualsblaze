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




const BlogSection = () => {
  return (
    <section className="image-section">
      <div className="image-container">
        <div className="image-wrapper" style={{ top: '30px', left: '40px' }}>
          <img src={FreeImage1} alt="Image 1" className="free-image1" />
        </div>
        <div className="image-wrapper" style={{ top: '20px', left: '950px' }}>
          <img src={FreeImage2} alt="Image 2" className="free-image2" />
        </div>
        <div className="image-wrapper" style={{ top: '200px', left: '590px' }}>
          <img src={FreeImage3} alt="Image 3" className="free-image3" />
        </div>
        <div className="image-wrapper" style={{ top: '370px', left: '350px' }}>
          <img src={FreeImage4} alt="Image 4" className="free-image4" />
        </div>
        <div className="image-wrapper" style={{ top: '540px', left: '850px' }}>
          <img src={FreeImage5} alt="Image 5" className="free-image5" />
        </div>
        <div className="image-wrapper" style={{ top: '670px', left: '300px' }}>
          <img src={FreeImage6} alt="Image 6" className="free-image6" />
        </div>
        <div className="image-wrapper" style={{ top: '660px', left: '1630px' }}>
          <img src={FreeImage7} alt="Image 7" className="free-image7" />
        </div> <div className="image-wrapper" style={{ top: '70px', left: '1500px' }}>
          <img src={FreeImage8} alt="Image 8" className="free-image8" />
        </div>
         <div className="image-wrapper" style={{ top: '300px', left: '-10px' }}>
          <img src={FreeImage9} alt="Image 9" className="free-image9" />
        </div>
         <div className="image-wrapper" style={{ top: '170px', left: '-30px' }}>
          <img src={FreeImage10} alt="Image 10" className="free-image10" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
