import React from 'react'
import { EntreesServe } from './RestoName'

const Classic = () => {
  const imageurl="classic.avif";
  return (
    <div>
      <EntreesServe imageurl={imageurl} name={"The Classics"} description={"Classic dishes serve"}></EntreesServe>
      <>
        <div className="main">
          <div className="pizza1">
            <img id="pizza" src="cury.jpg"></img>
            <div id="pizza-text">
              <p id="bold">Vegetable curry</p>
              <p id="not-bold">
                A quick Vegetable cury with coconut milk and your favourite
                veggies{" "}
              </p>
            </div>
            <p id="price">$750</p>
          </div>
          <div className="pizza2">
            <img
              id="burger"
              src="Skillet Polenta in Creamy Tomato Sauce.jpg"
            ></img>
            <div id="pizza-text">
              <p id="bold">Skillet Polenta</p>
              <p id="not-bold">
                Special Skillet Polenta in Creamy Tomato Sauce
              </p>
            </div>
            <p id="price">$820</p>
          </div>

          <div className="pizza3">
            <img id="pasta" src="onnion soup.jpg"></img>
            <div id="pizza-text">
              <p id="bold">onnion soup</p>
              <p id="not-bold">
                {" "}
                onnion soup is nurarious and quick vegetarian dinner option{" "}
              </p>
            </div>
            <p id="price">$1000</p>
          </div>

          <div className="pizza4">
            <img id="soup" src="Tofu-Stir-Fry-Thumbnail.jpg"></img>
            <div id="pizza-text">
              <p id="bold">Tofu-Stir-Fry</p>
              <p id="not-bold">
                A quick stir-fry with-tofu, mixed Vegetables and soya souce
                makes perfect combination
              </p>
            </div>
            <p id="price">$1100</p>
          </div>

          <div className="pizza5">
            <img id="cury" src="Speedy-pasta.webp"></img>
            <div id="pizza-text">
              <p id="bold">Speedy-pasta</p>
              <p id="not-bold">
                {" "}
                A Speedy-pasta with cherry tomatoes, basils and garlic for
                satisfaying vegetarian meal{" "}
              </p>
            </div>
            <p id="price">$1200</p>
          </div>

          <div className="Drink6">
            <img id="cury" src="qunao-bowl.webp"></img>
            <div id="pizza-text">
              <p id="bold">qunao-bowl</p>
              <p id="not-bold">
                {" "}
                qunao-bowl with roasted Vegetables and a dash of olive oil is
                healthy, quick dinner{" "}
              </p>
            </div>
            <p id="price">$1000</p>
          </div>

          <div className="Drink6">
            <img
              id="cury"
              src="cucumber-chickpea-salad-with-feta-and-lemon.jpg"
            ></img>
            <div id="pizza-text">
              <p id="bold">chickpea-salad</p>
              <p id="not-bold"> chickpea-salad with cucumber, tomatoes and lemon vinaigrette </p>
            </div>
            <p id="price">$800</p>
          </div>

          <div className="Drink6">
            <img id="cury" src="Avacado.jpg"></img>
            <div id="pizza-text">
              <p id="bold">Avacado-with-blackbean</p>
              <p id="not-bold">
              whip up delicious avacado and blackbean quesadilla
            
              </p>
            </div>
            <p id="price">$900</p>
          </div>

        </div>
      </>
    </div>
  );
}

export default Classic
