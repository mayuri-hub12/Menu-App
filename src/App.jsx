import { useState } from 'react'
import Menu from './menu';
import RestoName from './RestoName';
import {SearchBar} from './RestoName';
import {EntreesServe} from './RestoName';
import {Dishes} from './Dishes';
import Drinks  from './Drinks';

import './App.css'
import './Menu.css'
import './RestoName.css'

function App() {
  return( <>
  <Menu></Menu>
<RestoName></RestoName>
<SearchBar></SearchBar>
<EntreesServe></EntreesServe>
<Dishes></Dishes>
<Drinks></Drinks>

</>

  );
   
}

export default App
