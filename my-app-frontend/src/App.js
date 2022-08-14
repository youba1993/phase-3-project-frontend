import React, { useState, useEffect } from "react";
import './App.css';
import Categorie from "./components/Categorie";
import Donation from "./components/Donation";
import Header from './components/Header';
import User from './components/User';


function App() {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
      fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((categorie) => setCategories(categorie));
  },[])

  return (
    <div className="App">
      <Header />
      <User />
      {categories.map((categorie)=>
         <Categorie key={categorie.id} categorie={categorie}/>
      )}
      <Donation />
    </div>
  );
}

export default App;
