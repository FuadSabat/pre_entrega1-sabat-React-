// src/components/ItemListContainer.jsx
import React from "react";
const ItemListContainer = ({ greeting }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <h2>{greeting}</h2>
    </div>
  );
};
export default ItemListContainer;
