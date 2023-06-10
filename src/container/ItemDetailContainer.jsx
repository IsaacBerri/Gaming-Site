import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "../style/detail.scss";
import "../style/mediaQuery.css"
import Button from "../components/Button";
import NavBar from "../components/NavBar";

const ItemDetailContainer = () => {
  const [juego, setjuego] = useState({});
  const [screenshots, setScreenshots] = useState([]);
  const [requirements, setRequirements] = useState({});

  const nameURL = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2c65a5b22emsh1601df4f8a83b5ep1781f7jsn371d18df0b0f",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${nameURL.id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setjuego(response);
        setScreenshots(response.screenshots);
        setRequirements(response.minimum_system_requirements)
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(juego);
  console.log(requirements);

  return (
    <section className="containerDetail">
      <NavBar secundaria={true}/>
      <div className="containerInfo">
        <div className="imagenes">
          <Carousel>
            <Carousel.Item>
              <img
                src={juego.thumbnail}
                alt="First slide"
              />
            </Carousel.Item>
            {screenshots.map((x) => (
              <Carousel.Item key={x.id}>
                <img src={x.image} alt={`${juego.title}-${x.id} `} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="infoJuego">
          <h4><b>{juego.title}</b></h4>
          <p>Developer: <b>{juego.publisher}</b></p>
          <p>Genre: <b>{juego.genre}</b></p>
          <p>Launch: <b>{juego.release_date}</b></p>
          <h6><b>{juego.short_description}</b></h6>
          <Button name={"Discharge"} direccion={juego.game_url} tipo={"a"}/>
        </div>
      </div>
      <div className="systemRequirements">
        <div className="description">
          <h3>Description</h3>
          <p><b>{juego.description}</b></p>
        </div>
        {!requirements ? null: <div className="requirements">
          <h3>Requirements</h3>
          <p>Graphics: <b>{requirements.graphics}</b></p>
          <p>Memory: <b>{requirements.memory}</b></p>
          <p>System: <b>{requirements.os}</b></p>
          <p>Processor: <b>{requirements.processor}</b></p>
          <p>Storage: <b>{requirements.storage}</b></p>
        </div>}
        
      </div>
    </section>
  );
};

export default ItemDetailContainer;

// screenshots
