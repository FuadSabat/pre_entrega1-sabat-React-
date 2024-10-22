// src/App.jsx
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi e-commerce" />
    </div>
  );
}

export default App;
