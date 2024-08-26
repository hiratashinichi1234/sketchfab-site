import React, { useEffect, useState } from 'react';

  const About: React.FC = () => {
   
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) { // スクロール位置が100pxを超えたら
          setVisible(true);
        } else {
          setVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <section id="myabout">
        <h1>コンテンツ</h1>
        <div className="slider">
          <div className="slide-container">
            <img src="./public/bed11.jpg" alt="Image 1" className="slide" />
            <img src="public/bed12.jpg" alt="Image 2" className="slide" />
            <img src="public/bed13.jpg" alt="Image 3" className="slide" />
          </div>
        </div>
        <div className="about-content">
          <h2>私はこういう者です。</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            Pellentesque lacinia magna at risus gravida, nec tincidunt dolor gravida. Nulla facilisi. Donec
            euismod tortor sit amet nisi fringilla, vel tincidunt libero varius. Phasellus vel vehicula odio, a
            scelerisque erat. Fusce fringilla arcu sit amet massa pharetra, a auctor lectus aliquam. Curabitur nec
            orci nec justo vehicula condimentum. Sed in ante sit amet lorem aliquet elementum nec ut eros. Nam
            faucibus, libero eu sollicitudin cursus, ligula dolor fermentum libero, non auctor ante odio sit amet
            lorem. Vivamus efficitur, orci eget gravida vestibulum, justo urna dapibus urna, sed commodo quam purus
            a metus. Nulla facilisi.
          </p>
        </div>
        
        <div className="new-production">
      <h1>新企画のご案内</h1>
      <div className="images">
        <div className={`image-container ${visible ? 'visible' : ''}`}>
          <img src="./public/bed.jpg" alt="Image 1" />
        </div>
        <div className={`image-container ${visible ? 'visible' : ''}`}>
          <img src="./public/bed2.jpg" alt="Image 2" />
        </div>
        <div className={`image-container ${visible ? 'visible' : ''}`}>
          <img src="./public/bed3.jpg" alt="Image 3" />
        </div>
        <div className={`image-container ${visible ? 'visible' : ''}`}>
          <img src="./public/bed4.jpg" alt="Image 4" />
        </div>
      </div>
      <div className="background-animation"></div>
    </div>
      
      
      </section>

  );
};

export default About;