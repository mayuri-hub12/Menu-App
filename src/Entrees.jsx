
import { EntreesServe } from "./RestoName";

export function Entrees(){
        const imageurl="new entree-serve.png";
    return (
      <>
        <EntreesServe
          imageurl={imageurl}
          name={"Entrees"}
          description={"Serve with pasta"}
        ></EntreesServe>
        <div className="main">
          <div className="pizza1">
            <img id="pizza" src="pizza.jpg"></img>
            <div id="pizza-text">
              <p id="bold">chees corn Pizza</p>
              <p id="not-bold">
                Chees burst pizza with olives, mashroom, corn and extra spicy
              </p>
            </div>
            <p id="price">$650</p>
          </div>
          <div className="pizza2">
            <img id="burger" src="burgur.avif"></img>
            <div id="pizza-text">
              <p id="bold">Burger Royal</p>
              <p id="not-bold">
                Bacon burger with swiss chees contain gluten, lactose seasome
              </p>
            </div>
            <p id="price">$520</p>
          </div>

          <div className="pizza3">
            <img id="pasta" src="pasta.jpg"></img>
            <div id="pizza-text">
              <p id="bold">Pasta Arrabaita</p>
              <p id="not-bold">Pasta with spicy souce contain gluten</p>
            </div>
            <p id="price">$400</p>
          </div>

          <div className="pizza4">
            <img id="soup" src="onnion soup.jpg"></img>
            <div id="pizza-text">
              <p id="bold">Royal onnion soup</p>
              <p id="not-bold">
                onnion soup with sweet and sour flavore contain onnnion
                ,coconute milk
              </p>
            </div>
            <p id="price">$200</p>
          </div>

          <div className="pizza5">
            <img id="cury" src="cury.jpg"></img>
            <div id="pizza-text">
              <p id="bold">Sweet potato curry</p>
              <p id="not-bold">
                Vegetarian curry with pumpkine suitable for pregnent women
              </p>
            </div>
            <p id="price">$300</p>
          </div>
        </div>
      </>
    );
}
