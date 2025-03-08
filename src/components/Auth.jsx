import React from "react";

const Auth = () => {
  return (
    <form className="componentContainer">
      <div className="px-4 py-3 flex flex-col justify-between h-[80%]">
        <div className="flex flex-col gap-2 mt-6">
          <h1 className="text-white font-bold font-sans text-2xl">
            Создание профиля
          </h1>
          <input
            className="bg-[#666] rounded-2xl p-3 placeholder:text-[#989898]"
            type="text"
            placeholder="Имя"
            id="userName"
          />
          <input
            className="bg-[#666] rounded-2xl p-3 placeholder:text-[#989898]"
            type="text"
            placeholder="Расскажите нам о себе"
            id="userAbout"
          />
          <span className="text-sm text-[#626262] ml-5">
            Пример: Дизайнер из Дубая. Люблю сёрфинг. Макс. 120 символов
          </span>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <div className="flex justify-between p-3 bg-[#666] rounded-2xl">
            <h2 className="text-white text-lg">Дата рождения</h2>
            <input
              className="color-[#3873CC]"
              type="date"
              placeholder="Дата рождения"
            />
          </div>
          <div className="flex justify-between p-3 bg-[#666] rounded-2xl">
            <h2 className="text-white text-lg">Ваш город</h2>
            <select name="city" id="userCity">
              <option value="Tashkent">Ташкент</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="ml-3">Пол</h2>
          <div className="flex w-full gap-4">
            <div className="bg-[#666] p-3 flex gap-2 items-center w-[48%] rounded-2xl ">
              <input
                className="bg-[#666] w-[24px] h-[24px] accent-blue-500 p-0 m-0"
                type="radio"
                name="male"
                id="userMale"
              />
              <label for="male" className="text-lg">
                Парень
              </label>
            </div>
            <div className="bg-[#666] p-3 flex justify-start gap-2 w-[48%] rounded-2xl">
              <input
                className="bg-[#666] w-[24px] h-[24px] accent-blue-500 p-0 m-0"
                type="radio"
                name="female"
                id="userFamel"
              />
              <label for="male" className="text-lg">
                Девушка
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 m-0 bg-[#17212B] w-full">
        <button className="text-black bg-white w-[100%] p-2 rounded-md">Продолжить</button>
      </div>
    </form>
  );
};

export default Auth;
