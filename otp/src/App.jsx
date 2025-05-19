import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const OTP_DIGITS = 5;
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));

const refArr = useRef([])

useEffect(() => {
refArr.current[0]?.focus();
},[])

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue  && refArr.current[index+1]?.focus();
  };

  const handleOnKeyDown = (e,index) => {
if( !e.target.value && e.key === "Backspace")
refArr.current[index-1]?.focus()
  }

  return (
    <div className="App">
      <h1>Validate OTP</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            className="otp-input"
            key={index}
            type="text"
            value={inputArr[index]}
            ref = {input => refArr.current[index] = input}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) =>  handleOnKeyDown(e,index)}
            ></input>
        );
      })}
    </div>
  );
};

export default App;
