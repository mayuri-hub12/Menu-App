import { Link } from "react-router-dom";
import RestoName from "./RestoName";
import { EntreesServe } from "./RestoName";
import "./RestoName.css";
import "./Menu.css";
// import SearchBar from "./Searchbar";

function SearchBar() {
  return (
    <>
      
      <div className="searchbar">
        <Link to={"Entrees"}>Entrees</Link>
        <Link to={"Drinks"}>Drinks</Link>
        <Link to={"Desserts"}>Desserts</Link>
        <Link to={"Classic"}>The classic</Link>
      </div>
    </>
  );
}

export default SearchBar;
