'use client';

import Image from 'next/image';
import headerImg from '../images/desktop/image-header.jpg';
import headerImgMobile from '../images/mobile/image-header.jpg';
import style from '../styles/components/_header.module.scss';
import arrow from '../images/icon-arrow-down.svg';
import { useState, useEffect } from 'react';

function Header() {
  const [isDesktop, setDesktop] = useState(true);

  useEffect(() => {
    function desktopChecker() {
      var screenWidth = window.innerWidth;

      if (screenWidth < 900) { 
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
    <div className={style.header_wrapper}>
      <Image
        src= {isDesktop ? headerImg : headerImgMobile}
        alt="header"
      />
      <h1>WE ARE CREATIVES</h1>
      <Image
        src= {arrow}
        alt="arrow"
      />
    </div>
    
  );
}
 
export default Header;