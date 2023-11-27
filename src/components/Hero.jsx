import styles from "../style";
import { discount, robot, logo } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>10%</span> Descuento En{" "}
            <span className='text-white'>Garnachapp</span> / 2024
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full -z-auto'>
          <h1 className='flex-1 font-montserrat font-bold ss:text-[72px] text-[52px] text-orange-100 ss:leading-[65px] leading-[75px] '>
            <img
              src={logo}
              alt='logo'
              className='w-[500px] h-[100px] animate-bounce '
            />{" "}
            <span className='text-orange-500'>
              Donde el usuario encuentra tu sazón,
            </span>{" "}
            <br
              className='sm:block 
              hidden'
            />{" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-montserrat font-bold ss:text-[38px] text-[52px] text-orange-100 ss:leading-[65px] leading-[75px] w-full'>
          y tu negocio a los clientes.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-orange-100`}>
          Garnachapp, la plataforma diseñada para emprendedores culinarios como
          tú. Facilitamos la venta y promoción de tus delicias gastronómicas,
          desde las más tradicionales hasta tus creaciones innovadoras. Con
          nuestra interfaz adaptable, puedes exhibir tu menú, gestionar pedidos
          y conectarte directamente con una comunidad ávida de nuevos sabores.
          Amplifica tu alcance, construye una clientela fiel y lleva tus platos
          a cada hogar con <strong>Garnachapp</strong>.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt='billing' className='w-[10]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[40%] h-[35%] top-0 blue__gradient' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 white__gradient' />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
