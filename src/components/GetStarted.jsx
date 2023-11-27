import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient p-[5px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%]`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-montserrat font-bold text-[16px] leading-[23px] mt-2 pt-0'>
          <span className='text-orange-100'>Disrupt</span>
          <span className='text-orange-100'>
            <br
              className='sm:block 
              hidden'
            />{" "}
            yourself
          </span>
          <span className='text-orange-100'>
            <br
              className='sm:block 
              hidden'
            />{" "}
            or not!
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
