import styles from "../style";
import Button from "./Button";
import { logodos } from "../assets";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className='flex-1 flex flex-col'>
      <img
        src={logodos}
        alt='logo'
        className='w-[450px] h-[100px] animate-pulse'
      />{" "}
      <h2 className={styles.heading2}>
        <strong>Navega en la Aplicación Web</strong>
      </h2>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 text-zinc-800 font-semibold`}
      >
        {" "}
        El conocimiento nace apartir de los sentidos y se desarrolla atravéz de
        la razón.Siendo selectiva y sistematica en su rasgo cientifico, en
        cambio es radical en su forma filosofica por la especifica función que
        es el estudio del ser. El conocimiento valido es coherente.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
