import React from 'react'
import "./RestoName.css";
import "./Menu.css";
import { EntreesServe } from './RestoName';

const Desserts = () => {
  const imageurl="Dessert.jpg"
  return (
    <>
    <EntreesServe imageurl={imageurl} name={"Desserts"} description={"Entrees Serve with Dessert"}></EntreesServe>
      <div className="main">
        <div className="pizza1">
          <img id="pizza" src="banana caramel cream dessert.jpg"></img>
          <div id="pizza-text">
            <p id="bold">banana caramel cream dessert</p>
            <p id="not-bold">
              Made with banana, carmal, cream contain mantained amount of sugar{" "}
            </p>
          </div>
          <p id="price">$850</p>
        </div>
        <div className="pizza2">
          <img id="burger" src="Black-Forest-Dessert-Cup.webp"></img>
          <div id="pizza-text">
            <p id="bold">Black-Forest-Dessert-Cup</p>
            <p id="not-bold">
              Black-Forest-Dessert-Cup contain marvalous Chocolate
              flavore,cherrys provide creamy Chocolaty flavore
            </p>
          </div>
          <p id="price">$920</p>
        </div>

        <div className="pizza3">
          <img id="pasta" src="Troubleshooting-French-Macaron.jpg"></img>
          <div id="pizza-text">
            <p id="bold">Troubleshooting-French-Macaron</p>
            <p id="not-bold">
              {" "}
              Special Troubleshooting-French-Macaron with strawberry flavore and
              mouth watering tast
            </p>
          </div>
          <p id="price">$1200</p>
        </div>

        <div className="pizza4">
          <img id="soup" src="strawberry-torte-.jpg"></img>
          <div id="pizza-text">
            <p id="bold">strawberry-torte</p>
            <p id="not-bold">
              Made with naturaly ripped strawberry and excellent flavore{" "}
            </p>
          </div>
          <p id="price">$1500</p>
        </div>

        <div className="pizza5">
          <img id="cury" src="Paleo-Chocolate-Waffles.jpg"></img>
          <div id="pizza-text">
            <p id="bold">Paleo-Chocolate-Waffles</p>
            <p id="not-bold">
              Made with marvalous Chocolate flavore and srve with honey
            </p>
          </div>
          <p id="price">$950</p>
        </div>

        <div className="Drink6">
          <img id="cury" src="DippedFruit.avif"></img>
          <div id="pizza-text">
            <p id="bold">DippedFruit</p>
            <p id="not-bold">fresh ripped strawberry dipped in Chocolate</p>
          </div>
          <p id="price">$900</p>
        </div>
      </div>
    </>
  );
}

export default Desserts
