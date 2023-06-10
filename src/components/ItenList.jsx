import React from 'react'
import Button from './Button';

const ItenList = ({Data, inicio, final}) => {
  return (
    <div className="data" id="dataProductos">
        {Data
          .map((juego) => {
            return (
              <article key={juego.id}>
                <img src={juego.thumbnail} alt="" />
                <h4>{juego.title}</h4>
                <p>
                  Genero: <b>{juego.genre}</b>
                </p>
                <p>
                  Plataforma: <b>{juego.platform}</b>
                </p>
                <Button name={"Info"} direccion={`/juego/${juego.id}`} tipo={"Link"}/>
              </article>
            );
          })
          .slice(inicio, final)}
      </div>
  )
}

export default ItenList