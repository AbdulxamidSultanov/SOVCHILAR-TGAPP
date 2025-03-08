import React from "react";
import { Link } from "react-router-dom";

const DescThird = () => {
  return (
    <div className="flex flex-col justify-around h-[100dvh] p-4 bg-black text-white">
      <div className="bg-[#1c1c1d] rounded-2xl flex flex-col items-center justify-center gap-6 min-h-[70%]">
        <div className="w-[75px] h-[75px] rounded-[50%] bg-white">
          <img className="" src="" alt="" />
        </div>
        <div className="flex flex-col items-center gap-5 px-4">
          <h1 className="text-white font-mono text-3xl">SOVCHILAR</h1>
          <p className="text-white text-xl text-center font-mono">
            Знакомства в Telegram. Присоединяйтесь к сообществу амбициозных и
            реальных людей.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Link
          to="/form"
          className="bg-white w-full py-3 rounded-2xl font-bold text-lg text-center text-black"
        >
          Создать профиль
        </Link>
        <button className="text-white font-bold text-md">
          Войти с существующим профилем
        </button>
      </div>
    </div>
  );
};

export default DescThird;
