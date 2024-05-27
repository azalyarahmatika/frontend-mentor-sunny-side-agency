import Image from 'next/image';
import style from '../styles/components/_testimonials.module.scss';
import emily from '../images/image-emily.jpg';
import jennie from '../images/image-jennie.jpg';
import thomas from '../images/image-thomas.jpg';

function Testimonials() {
  return ( 
    <div className={style.testimonials_wrapper}>
      <h2>CLIENT TESTIMONIALS</h2>
      
      <div className={style.testimonials_group}>
        <div className={style.testimonial}>
          <Image 
            src={emily}
            alt='Emily'
          />
          <p className={style.testimonial_comment}>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <p className={style.testimonial_name}>Emily R.</p>
          <p className={style.testimonial_role}>Marketing Director</p>
        </div>

        <div className={style.testimonial}>
          <Image 
            src={thomas}
            alt='Thomas'
          />
          <p className={style.testimonial_comment}>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <p className={style.testimonial_name}>Thomas S.</p>
          <p className={style.testimonial_role}>Chief Operating Officer</p>
        </div>

        <div className={style.testimonial}>
          <Image 
            src={jennie}
            alt='Jennie'
          />
          <p className={style.testimonial_comment}>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <p className={style.testimonial_name}>Jennie F.</p>
          <p className={style.testimonial_role}>Business Owner</p>
        </div>
      </div>
    </div>
    
  );
}
 
export default Testimonials;