import Image from 'next/image';
import style from '../styles/components/_footer.module.scss';
import logo from '../images/logo.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';

function Footer() {
  return ( 
    <div className={style.footer_wrapper}>
      <Image 
        src={logo}
        alt='logo'
      />
      
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      
      <div className={style.icon_group}>
        <Image 
          src={facebook}
          alt='facebook'
        />
        <Image 
          src={instagram}
          alt='instagram'
        />
        <Image 
          src={twitter}
          alt='twitter'
        />
        <Image 
          src={pinterest}
          alt='pinterest'
        />
      </div>
    </div>
    
  );
}
 
export default Footer;