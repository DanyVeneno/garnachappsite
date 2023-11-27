import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id='clients'
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

    <div
      className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 
      relative z-[1]'
    >
      <h1 className={styles.heading2}>
        <strong className='text-orange-100'>La adopción e integración</strong>
        <br className='sm:block hidden' />
        <strong className='text-orange-100'>
          {" "}
          de tecnología no es exclusiva de...
        </strong>
      </h1>
      <div className='w-full md:mt-0 mt-6'>
        <p
          className={`${styles.paragraph} text-left max-w-[470px] text-orange-100`}
        >
          Negocios grandes o marcas registradas sino tambien para los usuarios
          que aspiren a llegar lejos con su emprendimiento ya que en la
          actualidad el modelo de negocio es la operación hibrida entre lo
          fisico y lo digítal asi que no pierdas la oportunidad de integrar
          tecnología en la operación diaria de tu negocio.
          <br />
          Disrupt yourself or not!.
        </p>
      </div>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container realtive z-[1]'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
