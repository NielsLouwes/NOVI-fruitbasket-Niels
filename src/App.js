import React from 'react';
import './App.css';
import {useState} from "react";
import { useForm } from 'react-hook-form';

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


            // react hook form
      <section>
        <form className="form">
          <div>
          <label htmlFor="firstname">Voornaam</label>
          <input id={"firstname"} type="text"/>
          </div>

          <div>
            <label htmlFor="lastname">Achternaam</label>
            <input id={"lastname"} type="text"/>
          </div>

          <div>
            <label htmlFor="age">Leeftijd</label>
            <input id={"age"}   type="text"/>
          </div>

          <div>
            <label htmlFor="postalcode">Postcode</label>
            <input id={"postalcode"}  type="text"/>
          </div>
          
          <div>
            <label htmlFor="frequency">Bezorgfrequentie</label>
            <select name="delivery" id="delivery">
              <option value="weekly">Iedere week</option>
              <option value="biWeekly">Om de week</option>
              <option value="monthly">Iedere maand</option>
              <option value="other">Anders</option>
            </select>
          </div>
            <label htmlFor="commentbox">Opmerking</label>
            <textarea name="commentbox" id="commentbox" cols="70" rows="8"></textarea>


        </form>

      </section>


    </section>
  </section>

  );
}

export default App;
