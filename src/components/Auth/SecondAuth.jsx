import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SecondAuth = () => {
  const dateInputRef = useRef(null);
  const [displayDate, setDisplayDate] = useState("Выбрать дату");

  const handleContainerClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.focus();
      dateInputRef.current.showPicker();
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);

    const day = selectedDate.getDate().toString().padStart(2, "0");
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = selectedDate.getFullYear();

    setDisplayDate(`${day}.${month}.${year}`);
  };

  return (
    <>
      <div
        id="firs-form"
        className="px-4 py-3 flex flex-col justify-between h-[80%]"
      >
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
          <div
            className="relative flex justify-between p-3 bg-[#666] rounded-2xl items-center cursor-pointer"
            onClick={handleContainerClick}
          >
            <h2 className="text-white text-lg">Дата рождения</h2>
            <div className="text-[#3873CC] bg-white px-3 py-1 rounded">
              {displayDate}
            </div>
            <input
              ref={dateInputRef}
              className="opacity-0 absolute w-0 h-0 pointer-events-none"
              type="date"
              onChange={handleDateChange}
              aria-label="Выбрать дату рождения"
            />
          </div>
          <div className="flex justify-between p-3 bg-[#666] rounded-2xl">
            <h2 className="text-white text-lg">Ваш город</h2>
            <select name="city" id="userCity" className="cursor-pointer">
              <option value="Tashkent">Ташкент</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="ml-3">Пол</h2>
          <div className="flex w-full gap-4">
            <div className="bg-[#666] p-3 flex gap-2 items-center w-[48%] rounded-2xl ">
              <input
                className="bg-[#666] cursor-pointer w-[24px] h-[24px] accent-blue-500 p-0 m-0"
                type="radio"
                name="gender"
                id="userMale"
              />
              <label htmlFor="userMale" className="text-lg">
                Парень
              </label>
            </div>
            <div className="bg-[#666] p-3 flex justify-start gap-2 w-[48%] rounded-2xl">
              <input
                className="bg-[#666] cursor-pointer w-[24px] h-[24px] accent-blue-500 p-0 m-0"
                type="radio"
                name="gender"
                id="userFamel"
              />
              <label htmlFor="userFamel" className="text-lg">
                Девушка
              </label>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SecondAuth;
