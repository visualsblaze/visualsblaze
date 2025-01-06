


import React, { useState, useEffect } from 'react';

// Import static images
import FreeImage1 from '../../images/t1.jpg';
import FreeImage2 from '../../images/t3.jpg';
import FreeImage3 from '../../images/t2.jpg';
import FreeImage4 from '../../images/t4.jpg';
import FreeImage5 from '../../images/t6.jpg';
import FreeImage6 from '../../images/t5.jpg';
import FreeImage12 from '../../images/t7.jpg';
import FreeImage13 from '../../images/t8.jpg';
import FreeImage14 from '../../images/t9.jpg';
import FreeImage15 from '../../images/t10.jpg';
import FreeImage16 from '../../images/t11.jpg';
import FreeImage17 from '../../images/t6.jpg';
import FreeImage7 from '../../images/Asset 1.png';
import FreeImage8 from '../../images/Asset 2.png';
import FreeImage9 from '../../images/Asset 3.png';
import FreeImage10 from '../../images/Asset 4.png';
import FreeImage11 from '../../images/image.png';
const BlogSection = () => {
  const [showFirstSet, setShowFirstSet] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstSet((prev) => !prev);
    }, 5000); // Toggle every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="image-section">
      <div className={`image-container ${showFirstSet ? 'fade-in' : 'fade-out'}`}>
      <div className="mission-vision-icon" >

        <span className="background-text">Reviews</span>
        </div>
        <h2 className='client'>Reviews</h2>

        {showFirstSet ? (
          <>
            <div className="image-wrapper"><img src={FreeImage1} alt="Image 1" className="free-image1" /></div>
            <div className="image-wrapper"><img src={FreeImage2} alt="Image 2" className="free-image2" /></div>
            <div className="image-wrapper"><img src={FreeImage3} alt="Image 3" className="free-image3" /></div>
            <div className="image-wrapper"><img src={FreeImage4} alt="Image 4" className="free-image4" /></div>
            <div className="image-wrapper"><img src={FreeImage5} alt="Image 5" className="free-image5" /></div>
            <div className="image-wrapper"><img src={FreeImage6} alt="Image 6" className="free-image6" /></div>
          </>
        ) : (
          <>
            <div className="image-wrapper"><img src={FreeImage12} alt="Image 12" className="free-image12" /></div>
            <div className="image-wrapper"><img src={FreeImage13} alt="Image 13" className="free-image13" /></div>
            <div className="image-wrapper"><img src={FreeImage14} alt="Image 14" className="free-image14" /></div>
            <div className="image-wrapper"><img src={FreeImage15} alt="Image 15" className="free-image15" /></div>
            <div className="image-wrapper"><img src={FreeImage16} alt="Image 16" className="free-image16" /></div>
            <div className="image-wrapper"><img src={FreeImage17} alt="Image 17" className="free-image17" /></div>
          </>
        )}
            <div className="image-wrapper"><img src={FreeImage7} alt="Image 12" className="free-image7" /></div>
            <div className="image-wrapper"><img src={FreeImage8} alt="Image 12" className="free-image8" /></div>
            <div className="image-wrapper"><img src={FreeImage9} alt="Image 12" className="free-image9" /></div>
            <div className="image-wrapper"><img src={FreeImage10} alt="Image 12" className="free-image10" /></div>
            <div className="image-wrapper"><img src={FreeImage11} alt="Image 12" className="free-image11" /></div>


      </div>
    </section>
  );
};

export default BlogSection;
