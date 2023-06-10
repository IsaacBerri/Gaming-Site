import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/comunidad.scss";
import { Icon } from "@iconify/react";

const Comunidad = () => {
  return (
    <>
      <NavBar principal={true} />
      <section className="videoComunidad">
        <video
          src="../dist/assets/Comunidad.mp4"
          autoPlay
          muted
          loop
          preload="true"
        ></video>
        <div className="mensajeVideo">
          <Icon
            icon="ic:baseline-discord"
            color="#01d457"
            width="40"
            height="40"
          />
          <Icon icon="mdi:instagram" color="#01d457" width="40" height="40" />
          <Icon icon="mdi:twitter" color="#01d457" width="40" height="40" />
          <p>
            Join the community of our competitive gaming team on all social
            media! Connect with other gaming fans and stay up to date with our
            latest news, live streams and tournament results. Don't miss out on
            the excitement and fun! Follow us now!
          </p>
        </div>
      </section>
      <div className="slogan">
        <h4>"One team. One passion. Playing to win!"</h4>
      </div>
      <section className="imagenComunidad">
        <img src="https://i.postimg.cc/xjNNN6GL/img2-comunidad.jpg" alt="" />
        <div>
          <h5>Esports Community</h5>
          <p>
            Our site's community is incredibly active and engaged, with members
            from all over the world connecting across multiple online platforms
            to share news, strategies, and tips on the latest games and
            tournaments. They are also very engaged in organizing and
            participating in live events, which gives them the opportunity to
            meet and connect with other members of the community in person.
          </p>
        </div>
      </section>
      <div className="imagenComunidad2">
        <img src="https://i.postimg.cc/vBgjdJJP/img1-comunidad.jpg" alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Comunidad;
