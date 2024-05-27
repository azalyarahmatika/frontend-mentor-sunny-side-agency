'use client';

import style from '../styles/components/_navigation.module.scss';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
import Image from 'next/image';

import { useState, useEffect } from 'react';

function Navigation() {
  const [isToggled, setToggle] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = async (event) => {
    event.preventDefault();
    setToggle(!isToggled);
  }

  const menu_class = isToggled ? `${style.navigation_menu}` : `${style.display_none} ${style.navigation_menu}`;

  return (
    <nav className={style.navigation_wrapper}>
      <div className={style.navigation_logo}>
        <Image
          src={logo}
          alt="Shortly Logo" 
        />
      </div>
          
      <div className={menu_class}>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li id='contact'>CONTACT</li>
        </ul>
      </div>

      <div className={style.navigation_toggle}>
        <Image
          src={isToggled ? close: hamburger }
          width={30}
          alt="Menu"
          onClick={handleToggle}
        />
      </div>
    </nav>
  );
}
 
export default Navigation;