import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const FourthAuth = () => {
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
      <h2>Four  </h2>
    </>
  );
};

export default FourthAuth;
