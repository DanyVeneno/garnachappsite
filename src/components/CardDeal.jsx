import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <strong className='text-orange-100'>Garnachapp y el servicio</strong>
        <br className='sm:block hidden' />
        <strong className='text-orange-100'>
          de entrega a domicilio / Delivery.
        </strong>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-orange-100`}>
        El servicio de entrega a domicilio transforma por completo la
        experiencia culinaria para los usuarios y emprendedores. Al ofrecer este
        servicio, no solo brindamos conveniencia a nuestros clientes, sino que
        también amplias la accesibilidad a una gran cantidad de usuarios. Esta
        facilidad en la entrega no solo fomenta la comodidad, sino que también
        potencia la expansión de los negocios culinarios asociados. Los
        emprendedores tienen la oportunidad de llegar a más consumidores,
        construir una base de clientes leales y aumentar sus ingresos. Además,
        al ofrecer este servicio, fortaleces la relación de confianza con tus
        usuarios, convirtiendo cada pedido en una experiencia sin complicaciones
        garantizando la frescura y calidad de cada platillo que llega a sus
        mesas. <br />
        <strong>
          En conclusión puedes incluirlo a las aplicaciones de delivery ya
          conocidas como /Rappi/HuberEats/Didi ó hacer envios por tu propia
          cuenta.
        </strong>
      </p>
      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[80%] animate-bounce' />
    </div>
  </section>
);
export default CardDeal;
