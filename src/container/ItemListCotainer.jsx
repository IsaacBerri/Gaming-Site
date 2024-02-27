import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navegar from "../pages/Navegar";
import Pagination from "../components/Pagination";
import ItenList from "../components/ItenList";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";

const ItemListCotainer = () => {
  const [data, setData] = useState([]);
  const [productosPorPages, setProductosPorPages] = useState(16);
  const [paginaActual, setPaginaActual] = useState(1);
  const [filter, setfilter] = useState("");

  const totalProductos = data.length;

  const lastIndex = paginaActual * productosPorPages;
  const firstIndex = lastIndex - productosPorPages;

  const nameURL = useParams();

  useEffect(() => {
    if (!nameURL.category) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2c65a5b22emsh1601df4f8a83b5ep1781f7jsn371d18df0b0f",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response));
    } else {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2c65a5b22emsh1601df4f8a83b5ep1781f7jsn371d18df0b0f",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${nameURL.category}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response));
    }
  }, [nameURL.category]);

  const handleChange = (e) => {
    setfilter(e.target.value);
  };

  const filtederedGames = data.filter((game) => {
    return game.title.toLowerCase().startsWith(filter.toLowerCase());
  });

  console.log(nameURL);
  return (
    <>
      <NavBar principal={true} />
      <Navegar />
      <div className="bannerCategory">
        <h4>
          <b>Games</b>
        </h4>
        <span>
          <input type="text" value={filter} onChange={handleChange} />
          <Icon
            icon="material-symbols:search"
            color="black"
            width="40"
            height="40"
          />
        </span>
      </div>
      <ItenList Data={filtederedGames} inicio={firstIndex} final={lastIndex} />
      {filter ? null : (
        <Pagination
          productosPorPages={productosPorPages}
          totalProductos={totalProductos}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          url={nameURL}
        />
      )}
      <Footer />
    </>
  );
};

export default ItemListCotainer;
