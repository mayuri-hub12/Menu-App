function RestoName() {
  return (
    <div className="head">
      <h1 id="head"> The Yummy Place</h1>
      <p id="head-para"> Restaurant - Cocktail - bar</p>
    </div>
  );
}
export default RestoName;


export function EntreesServe({imageurl,name,description}) {
  return (
    <div className="entrees">
      <img id="food-serve" src={imageurl}></img>
      <div className="entree-text">
        <div className="steam">
          {" "}
          <img id="steam" src="steam.jpg"></img>
          <p id="h1">{name}</p>
          <img id="steam" src="steam.jpg"></img>
        </div>
        <p id="p2">{description}</p>
      </div>
    </div>
  );
}
