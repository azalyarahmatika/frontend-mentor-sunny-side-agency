'use client';

import Image from 'next/image';
import style from '../styles/components/_features.module.scss';
import transformImg from '../images/desktop/image-transform.jpg';
import transformImgMobile from '../images/mobile/image-transform.jpg';
import standOutImg from '../images/desktop/image-stand-out.jpg';
import standOutImgMobile from '../images/mobile/image-stand-out.jpg';
import graphicDesignImg from '../images/desktop/image-graphic-design.jpg';
import graphicDesignImgMobile from '../images/mobile/image-graphic-design.jpg';
import photographyImg from '../images/desktop/image-photography.jpg';
import photographyImgMobile from '../images/mobile/image-photography.jpg';
import { useState, useEffect } from 'react';

function Features() {
  const [isDesktop, setDesktop] = useState(true);

  useEffect(() => {
    function desktopChecker() {
      var screenWidth = window.innerWidth;

      if (screenWidth < 700) { 
        setDesktop(false);
      } else {
        setDesktop(true);
      }
    }

    desktopChecker();
    window.addEventListener('resize', desktopChecker);
    return () => window.removeEventListener('resize', desktopChecker);
  }, []);

  return ( 
    <div className={style.features_wrapper}>
      <div className={style.feature} id='first_row'>
        <div className={style.feature_description}>
          <h2>Transform your brand</h2>
          <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <a>LEARN MORE</a>
        </div>
        <div className={style.feature_img}>
          <Image
            src= {isDesktop ? transformImg : transformImgMobile}
            alt="header"
          />
        </div>
        
      </div>

      <div className={style.feature} id='second_row'>
        <div className={style.feature_img}>
          <Image
            src= {isDesktop ? standOutImg : standOutImgMobile}
            alt="header"
          />
        </div>
        <div className={style.feature_description}>
          <h2>Stand out to the right audience</h2>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
          <a id='pink_link'>LEARN MORE</a>
        </div>
      </div>

      <div className={style.feature} id='third_row'>
        <div id='third_row_1'>
          <div className={style.feature_img}>
            <Image
              src= {isDesktop ? graphicDesignImg: graphicDesignImgMobile}
              alt="header"
            />
          </div>

          <div className={style.feature_description}>
            <h2>Graphic design</h2>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div>
        </div>

        <div id='third_row_2'>
          <div className={style.feature_img}>
            <Image
              src= {isDesktop ? photographyImg : photographyImgMobile}
              alt="header"
            />
          </div>

          <div className={style.feature_description}>
            <h2>Photography</h2>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}
 
export default Features;