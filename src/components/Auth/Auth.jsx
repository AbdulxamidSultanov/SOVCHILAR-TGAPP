import React, { useState } from "react";
import FirstAuth from "./FirstAuth";
import SecondAuth from "./SecondAuth";
import ThirdAuth from "./ThirdAuth";
import FourthAuth from "./FourthAuth";
import { motion } from "framer-motion";

const Auth = () => {
  const steps = [FirstAuth, SecondAuth, ThirdAuth, FourthAuth];

  const [pageCount, setPageCount] = useState(0);
  const StepComponent = steps[pageCount];
  // *** BUTTON CONFIGS ***

  function handleNextSubmit(e) {
    e.preventDefault();
    if (pageCount < 3) {
      setPageCount(pageCount + 1);
    }
  }

  function handlePrevSubmit(e) {
    e.preventDefault();
    if (pageCount > 0) {
      setPageCount(pageCount - 1);
    }
  }

  return (
    <form className="componentContainer">
      <div id="steps-bar" className="flex justify-between gap-2 mt-4 w-full">
        {[...Array(steps.length)].map((_, index) => (
          <div
            key={index}
            className={`w-[23dvw] h-1 rounded-md mx-2 ${
              index <= pageCount ? "bg-blue-800" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
      <div>
        <motion.div
          key={pageCount} 
          initial={{ opacity: 0, y: 50 }} // Начальное состояние (прозрачность 0, смещение вправо)
          animate={{ opacity: 1, y: 0 }} // Анимация появления
          exit={{ opacity: 0, y: -50 }} // Анимация ухода (смещение влево)
          transition={{ duration: 0.3 }} // Время анимации
          className="w-full"
        >
          <StepComponent />
        </motion.div>
      </div>
      <div className="flex items-center justify-center w-full bg-[#17212B] p-4 gap-4">
        {pageCount < 3 ? (
          <button
            to="/form/secondAuth"
            onClick={handleNextSubmit}
            className="cursor-pointer text-black bg-white p-2 rounded-md w-full text-center"
          >
            Продолжить
          </button>
        ) : (
          <button
            type="submit"
            className="cursor-pointer text-black bg-white p-2 rounded-md w-full text-center"
          >
            Завершить
          </button>
        )}

        {pageCount > 0 && (
          <button
            to="/form/secondAuth"
            onClick={handlePrevSubmit}
            className="cursor-pointer text-black bg-white p-2 rounded-md w-full text-center"
          >
            Назад
          </button>
        )}
      </div>
    </form>
  );
};

export default Auth;
