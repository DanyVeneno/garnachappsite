import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-orange-300 hover:bg-zinc-700 font-montserrat font-bold text-[18px] text-zinc-800 hover:text-orange-100 outline-none ${styles} rounded-[10px]`}
    >
      <a
        href='https://garnachapp.vercel.app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Navega en la App
      </a>
    </button>
  );
};

export default Button;
