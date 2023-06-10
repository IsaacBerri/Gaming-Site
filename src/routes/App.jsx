import React from "react";
import "../style/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import ItemListCotainer from "../container/ItemListCotainer";
import ItemDetailContainer from "../container/ItemDetailContainer";
import ScrollToTop from "../components/ScrollToTop";
import Comunidad from "../pages/Comunidad";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes scrollToTop={true}>
          <Route path="/" element={<Inicio />} />
          <Route path="/navegar" element={<ItemListCotainer />} />
          <Route path="/navegar/:category" element={<ItemListCotainer />} />
          <Route path="/juego/:id" element={<ItemDetailContainer />} />
          <Route path="/comunidad" element={<Comunidad />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
