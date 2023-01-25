import "./App.css";
import "../src/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home/Home";
import Carro from "./components/Carro/Carro";
import React from "react";
import CartProvider from "./context/CartProvider";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/detalle" element={<ItemDetailContainer />} />
          <Route path="/carro" element={<Carro />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
