import Image from 'next/image';
import style from '../styles/components/_banner.module.scss';
import milkbottles from '../images/desktop/image-gallery-milkbottles.jpg';
import orange from '../images/desktop/image-gallery-orange.jpg';
import sugarcubes from '../images/desktop/image-gallery-sugarcubes.jpg';
import cone from '../images/desktop/image-gallery-cone.jpg';

function Banner() {
  return ( 
    <div className={style.banner_wrapper}>
      <Image
        src= {milkbottles}
        alt="milkbottles"
      />
      <Image
        src= {orange}
        alt="orange"
      />
      <Image
        src= {cone}
        alt="cone"
      />
      <Image
        src= {sugarcubes}
        alt="sugarcubes"
      />
    </div>
    
  );
}
 
export default Banner;