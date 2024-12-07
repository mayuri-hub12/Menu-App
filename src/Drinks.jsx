import RestoName from './RestoName';
import {SearchBar} from './RestoName';
import {EntreesServe} from './RestoName';
import './RestoName.css'
import './Menu.css'
function Drinks(){
    return(
        <>
        <RestoName></RestoName>
        <SearchBar></SearchBar>
        <EntreesServe></EntreesServe>
       
<div className="main">
        <div className="pizza1">
        <img id="pizza" src="Berry-Vodka-Cocktails.jpg">
        </img><div id="pizza-text"><p id="bold">Berry-Vodka-Cocktails</p><p id="not-bold">Made with black berry contain alcoholic element </p></div><p id="price">$650</p></div>
<div className="pizza2">
        <img id="burger" src="blue-lagoon-drink.webp">
        </img><div id="pizza-text"><p id="bold">blue-lagoon-drink</p><p id="not-bold">Special drink for low alcohol consumer contain alcoholic element</p></div><p id="price">$720</p></div>

<div className="pizza3">
<img id="pasta" src="Cranberry-gin-fizz.jpg">
        </img><div id="pizza-text"><p id="bold">Cranberry-gin-fizz</p><p id="not-bold"> Special drink for chrismase with medium red crismosic color contain alcoholic element</p></div><p id="price">$1200</p></div>

<div className="pizza4">
<img id="soup" src="tequila sunrise cocktail drink.jpg">
        </img><div id="pizza-text"><p id="bold">tequila sunrise cocktail drink</p><p id="not-bold">Made with yello fruits have rich flavore contain alcoholic element</p></div><p id="price">$800</p></div>

<div className="pizza5">
        <img id="cury" src="Tropical-Breeze-Cocktail.jpg">
        </img><div id="pizza-text"><p id="bold">Tropical-Breeze-Cocktail</p><p id="not-bold">Made with citric fruits contain alcoholic element</p></div><p id="price">$950</p></div>


        <div className="Drink6">
        <img id="cury" src="Vodka-Spritzer.webp">
        </img><div id="pizza-text"><p id="bold">Vodka-Spritzer</p><p id="not-bold">  contain high alcoholic element</p></div><p id="price">$900</p></div>

       </div>
        
       
        
        </>
    );
}

export default Drinks;