import React from 'react';
import './App.css';
import {useState} from "react";

function App() {

  const [count,setCount] = useState(0);
  const [countTwo,setCountTwo] = useState(0);
  const [countThree,setCountThree] = useState(0);
  const [countFour,setCountFour] = useState(0);

  const resetCounts = () => {
    setCount ( 0), setCountTwo(0), setCountThree(0), setCountFour(0);
  }

  return (

  <section>
    <h1>Fruitmand bezorgservice</h1>
    <h2>Je mag toch niet naar buiten</h2>

    <section className={"form-section"}>
      <form className={"form"} action="#">

        <div className={"fruit-items"}>
          <label htmlFor="strawberry"> Aardbeien</label>
          <button
              name="strawberry"
              id="strawberry"
              value={count}
              onClick={()=> setCount(count + 1)}> +</button>
            <p>{count}</p>
          <button onClick={()=> setCount(count - 1)}>-</button>
        </div>

        <div className={"fruit-items"}>
          <label htmlFor="bananas"> Bananen</label>
          <button
              name="bananas"
              id="bananas"
              value={countTwo}
              onClick={()=> setCountTwo(countTwo + 1)}> +</button>
            <p>{countTwo}</p>
          <button onClick={()=> setCountTwo(countTwo - 1)}>-</button>
        </div>

        <div className={"fruit-items"}>
          <label htmlFor="apples"> Appels</label>
          <button
              name="apples"
              id="apples"
              value={countThree}
              onClick={()=> setCountThree(countThree + 1)}> +</button>
            <p>{countThree}</p>
          <button onClick={()=> setCountThree(countThree - 1)}>-</button>
        </div>

        <div className={"fruit-items"}>
          <label htmlFor="kiwis"> Kiwi's</label>
          <button
              name="kiwis"
              id="kiwis"
              value={countFour}
              onClick={()=> setCountFour(countFour + 1)}> +</button>
            <p>{countFour}</p>
          <button onClick={()=> setCountFour(countFour - 1)}>-</button>
        </div>

        <button
            name="reset"
            id= "reset"
          onClick={()=> {resetCounts()}}
        > Reset</button>

      </form>
    </section>
  </section>

  );
}

export default App;
