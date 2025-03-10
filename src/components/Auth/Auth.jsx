import React, { useState } from "react";
import FirstAuth from "./FirstAuth";
import SecondAuth from "./SecondAuth";
import ThirdAuth from "./ThirdAuth";
import { button } from "motion/react-client";

const Auth = () => {
  const [steps, setStep] = useState({
    firstPage: false,
    secondPage: false,
    thirdPage: false,
    fourthPage: false,
  });

  // *** BUTTON CONFIGS ***

  const [pageCount, setPageCount] = useState(0);

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
        <div
          id="step1"
          className={`w-[23dvw] h-1 rounded-md mx-2 bg-blue-800`}
        ></div>
        <div
          id="step2"
          className={`w-[23dvw] h-1 rounded-md mx-2 ${pageCount > 0 ? `bg-blue-800` : `bg-white`}`}
        ></div>
        <div
          id="step3"
          className={`w-[23dvw] h-1 rounded-md mx-2 ${pageCount > 1 ? `bg-blue-800` : `bg-white`}`}
        ></div>
        <div
          id="step4"
          className={`w-[23dvw] h-1 rounded-md mx-2 ${pageCount > 2 ? `bg-blue-800` : `bg-white`}`}
        ></div>
      </div>
      <FirstAuth />
      {/* <SecondAuth styles={}/> */}
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
          <button className="cursor-pointer text-black bg-white p-2 rounded-md w-full text-center">
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
