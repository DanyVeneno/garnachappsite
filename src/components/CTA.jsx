import styles from "../style";
import Button from "./Button";
import { tarjeta } from "../assets";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className='flex-1 flex flex-col'>
      <img
        src={tarjeta}
        alt='tarjeta'
        className=' hover:animate-bounce w-[330px] h-[200px]'
      />{" "}
      <h2 className={styles.heading2}>
        <strong>Navega en la Aplicación Web</strong>
      </h2>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 text-zinc-800 font-semibold`}
      >
        {" "}
        Cuando termines de hacer tu pedido utiliza los datos de la tarjeta de
        prueba para hacer el pago de tu compra.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
