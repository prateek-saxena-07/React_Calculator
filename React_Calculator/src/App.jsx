import { Numpad } from "./Numpad";
// import { Operation } from './Operation'
import { useRef, useState } from "react";
export const App = () => {
  
  const numbers = [{ key: '0', id: 'zero' }, { key: '1', id: 'one' }, { key: '2', id: 'two' }, { key: '3', id: 'three' }, { key: '4', id: 'four' }, { key: '5', id: 'five' }, { key: '6', id: 'six' }, { key: '7', id: 'seven' }, { key: '8', id: 'eight' }, { key: '9', id: 'nine' }, { key: '*', id: 'multiply' }, { id: 'add', key: '+' }, { id: 'subtract', key: '-' }, { id: 'divide', key: '/' }, { key: '.', id: 'decimal' }];
  const equals=[{key:'=',id:'equals'}]
  
  const [display, setDisplay] = useState('0');
  // const nref = useRef(null);

 const handleDisplay = (key) => {
   setDisplay((latestvalue) => {
    // If the current display is '0', replace it with the new key
    if (latestvalue === '0') {
      return key; // Replace '0' with the clicked key
    } else {
      return latestvalue + key; // Otherwise, append the key to the current value
    }
  });
};
  const handleClear = () =>
  {
    setDisplay('0');
  }
  const handleOperations = () =>
  {
    
    setDisplay(eval(display))
  }

  return (
    <>
      <div id="display">{display}</div>
     
      {numbers.map((num) => (<Numpad id={num.key} key={num.id} onClick={() => handleDisplay(num.key)} ></Numpad>))}
      <button id="equals" onClick={handleOperations}>=</button>
      <div className="clear">
        <button onClick={handleClear}>AC</button>
      </div>
    </>
  )
}




