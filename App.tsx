
import './style.css';
import React, { useState } from 'react';

const App = () => {
  const [result, setFResult] = useState("")

  const clickAction = (e) => {
       setFResult(result.concat(e.target.name));
  }
  const clear = () => {
      setFResult("")
  }

  const undo = () =>{
      setFResult(result.slice(0, - 1));
  }
  const solve = () => {
    try{
      setFResult(eval(result).toString());
    }
    catch(err){
      setFResult("Syntaxx Error!")
    }
  }
  return (
    <div>
      <p>My Calculator App</p>
      <div className="container">
         <form>
           <input className="MyInput" type="text" value={result} />
         </form>
         <div className="keys">
          <button className="operators" onClick={clear} id="clear">Del</button>
          <button className="operators" onClick={undo} id="undo">C</button>
          <button className="operators" name="/" onClick={clickAction}>/</button>
          <button name="7" onClick={clickAction}>7</button>
          <button name="8" onClick={clickAction}>8</button>
          <button name="9" onClick={clickAction}>9</button>
          <button className="operators" name="*" onClick={clickAction}>&times;</button>
          <button name="4" onClick={clickAction}>4</button>
          <button name="5" onClick={clickAction}>5</button>
          <button name="6" onClick={clickAction}>6</button>
          <button className="operators" name="-" onClick={clickAction}>-</button>
          <button name="1" onClick={clickAction}>1</button>
          <button name="2" onClick={clickAction}>2</button>
          <button name="3" onClick={clickAction}>3</button>
          <button className="operators" name="+" onClick={clickAction}>+</button>
          <button name="0" onClick={clickAction}>0</button>
          <button name="." onClick={clickAction}>.</button>
          <button className="operators" onClick={solve} id="equal-to">=</button>
         </div>
      </div>
     </div>
  );
}

export default App;
