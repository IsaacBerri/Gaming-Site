import React from "react";
import Inicio from "../pages/Inicio";
import { Routes, Route } from "react-router-dom";
import ItemListCotainer from "../container/ItemListCotainer";
import ItemDetailContainer from "../container/ItemDetailContainer";

const Main = () => {
  return (
    <main>
      {/* <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/navegar" element={<ItemListCotainer />} />
        <Route path="/navegar/:category" element={<ItemListCotainer />} />
        <Route path="/juego/:id" element={<ItemDetailContainer />} />
      </Routes> */}
    </main>
  );
};

export default Main;
