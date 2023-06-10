import React from "react";
import { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/scrollbar";
import { Link } from "react-router-dom";

const SliderCategory = () => {
  return (
    <>
    <Swiper
      modules={[Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Link to="/navegar">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/Qt0xXkBR/category-de-todo.jpg" alt="" />
            <b>De todo</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/shooter">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/hGZ5cXD2/category-shooter.webp" alt="" />
            <b>Shooter</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/battle-royale">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/hvQLTjqP/category-battle-royale.jpg" alt="" />
            <b>Battle Royale</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/mmorpg">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/J42bKjh7/category-mmorpg.webp" alt="" />
            <b>MMORPG</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/strategy">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/SjFVT8yv/category-strategy.jpg" alt="" />
            <b>strategy</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/action-rpg">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/yYWzw3Fr/category-accion-rpg.jpg" alt="" />
            <b>Action RPG</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/fighting">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/Sx10VS2b/category-pelea.webp" alt="" />
            <b>Fighting</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/card">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/GmRDmRqY/category-card.jpg" alt="" />
            <b>Card Game</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/racing">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/LsLL9XMz/category-racing.webp" alt="" />
            <b>Racing</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/moba">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/Ss5ncbqy/category-moba.jpg" alt="" />
            <b>MOBA</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/sports">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/j5ckdKVS/category-sports.webp" alt="" />
            <b>Sports</b>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/navegar/social">
          <div className="itemSlider">
            <img src="https://i.postimg.cc/cHKCm1sv/category-social.jpg" alt="" />
            <b>Social</b>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
    
    </>
  );
};

export default SliderCategory;
