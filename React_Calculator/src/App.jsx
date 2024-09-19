import { Numpad } from "./Numpad";
// import { Operation } from './Operation'
import { useState } from "react";
export const App = () => {
  const numbers = [
    { key: "0", id: "zero" },
    { key: "1", id: "one" },
    { key: "2", id: "two" },
    { key: "3", id: "three" },
    { key: "4", id: "four" },
    { key: "5", id: "five" },
    { key: "6", id: "six" },
    { key: "7", id: "seven" },
    { key: "8", id: "eight" },
    { key: "9", id: "nine" },
    { key: "*", id: "multiply" },
    { key: "+", id: "add" },
    { key: "-", id: "subtract" },
    { key: "/", id: "divide" },
    { key: ".", id: "decimal" },
  ];

  const [display, setDisplay] = useState("0");

  const handleDisplay = (key) => {
    setDisplay((latestValue) => {
      // Prevent multiple decimals in a number
      if (key === "." && latestValue.split(/[*+\-/]/).pop().includes(".")) {
        return latestValue; // Ignore if there's already a decimal in the current number
      }

      // Prevent '*' or '/' as the first character or directly after another operator
      if ((key === "*" || key === "/") && (latestValue === "0" || /[*/+-]$/.test(latestValue))) {
        return latestValue; // Ignore the input
      }

      // Replace multiple consecutive operators with the last one, excluding '-'
      if (/[*/+]{2,}/.test(latestValue + key)) {
        return latestValue.slice(0, -1) + key; // Replace last operator with the new one
      }

      // Handle starting value of '0'
      if (latestValue === "0" && key !== ".") {
        return key; // Replace initial '0' with the new number
      } else {
        return latestValue + key; // Append key to the current display value
      }
    });
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleOperations = () => {
    try {
      setDisplay(eval(display).toString()); // Safely evaluate the expression
    } catch (error) {
      setDisplay("Error"); // Handle any errors in the calculation
    }
  };

  return (<center><h1>Calculator</h1>
    <div className="calculator">
      <div id="display" className="display">{display}</div>
      <div className="numpad">
        {numbers.map((num) => (
          <Numpad
            id={num.id}
            key={num.id}
            val={num.key}
            onClick={() => handleDisplay(num.key)}
          />
        ))}
      </div>
      <button id="equals" onClick={handleOperations} className="button equals">
        =
      </button>
      <div className="clear">
        <button onClick={handleClear} id="clear" className="button clear">
          AC
        </button>
      </div>
    </div>
      </center>
  );
};




