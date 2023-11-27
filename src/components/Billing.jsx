import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt='billing'
        className='w-[100%] h-[90%] relative z-[5] animate-pulse'
      />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <strong className='text-orange-100'>¿Cuáles son los beneficios</strong>{" "}
        <br className='sm:block hidden' />{" "}
        <strong className='text-orange-100'>de integrar Garnachapp?</strong>
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-orange-100`}>
        La integración de una aplicación web en un negocio de comida preparada
        representa una oportunidad excepcional para expandir y optimizar
        operaciones. Al ofrecer una plataforma digital, se facilita enormemente
        la interacción con los clientes, permitiendo una experiencia de compra
        conveniente y personalizada. Desde la exposición del menú hasta la
        gestión de pedidos en tiempo real, esta herramienta potencia la
        visibilidad del negocio, alcanzando a un público más amplio y generando
        lealtad mediante la comodidad. Además, la aplicación web proporciona
        datos valiosos sobre las preferencias de los clientes, permitiendo
        ajustes precisos y estratégicos en la oferta culinaria, promoviendo así
        un crecimiento constante y una mayor satisfacción tanto para los
        clientes como para el propio negocio.
        <br />
        <strong className='italic text-lime-100'>
          Pronto Garnachapp para movil.
        </strong>
      </p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img
          src={apple}
          alt='apple_store'
          className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
        />
        <img
          src={apple}
          alt='google_play'
          className='w-[128px] h-[42px] object-contain  cursor-pointer'
        />
      </div>
    </div>
  </section>
);

export default Billing;
