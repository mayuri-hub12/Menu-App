
 function RestoName(){
    return(<div className="head"><h1 id="head"> The Yummy Place</h1>
    <p id="head-para"> Restaurant - Cocktail - bar</p>
    </div>);

}
export  default RestoName;


export  function SearchBar(){
    return (
        <div className="searchbar">
            <p id="p1">Entrees</p>
             <a href="Drinks.jsx" target="_blank"><p id="p1">Drinks</p></a>
             <p id="p1">Desserts</p>
              <p id="p1">The classic</p>
               
        </div>
    );
}

export function EntreesServe(){
    return(
        <div className="entrees">
            <img id="food-serve" src="public/new entree-serve.png">
            </img>
            <div className="entree-text"><div className="steam"> <img id="steam" src="public/steam.jpg"></img><p id="h1">Entrees</p><img id="steam" src="public/steam.jpg"></img></div>
            <p id="p2">Serve with pasta</p></div>
        </div>
    );
}