import React from "react";
import Button from "./Button";

const SectionMixto = ({ section1, section2, section3, section4 }) => {
  if (section1) {
    return (
      <section className="SeccionVideo">
        <video src="../src/assets/Video.mp4" autoPlay muted loop></video>
        <div className="divSeccion1">
          <h3>We hope to see you!</h3>
          <p>
            On our Discord server, you'll find a vibrant and friendly community
            of passionate gamers, streamers, and esports enthusiasts. You will
            be able to discuss the latest game releases, share your gaming
            experiences and connect with other gamers with similar interests.
          </p>
          <Button name={"Discord"} direccion={"#"} tipo={"a"} />
        </div>
      </section>
    );
  } else if (section2) {
    return <section className="seccion2"></section>;
  } else if (section3) {
    return (
      <section className="seccion3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ab
          omnis, est placeat atque non nihil minima. Excepturi quibusdam ducimus
          cupiditate dolorum, mollitia corporis quis, sit accusamus laborum
          officia veniam.
        </p>
      </section>
    );
  } else if (section4) {
    return (
      <section className="seccion4">
        <img src="https://i.postimg.cc/1tQMy4qg/fondo-networt.png" alt="" />
      </section>
    );
  }
};

export default SectionMixto;
