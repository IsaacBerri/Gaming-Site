import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

const Pagination = ({
  productosPorPages,
  totalProductos,
  paginaActual,
  setPaginaActual,
  url,
}) => {
  const numberPages = [];

  for (let i = 1; i <= Math.ceil(totalProductos / productosPorPages); i++) {
    numberPages.push(i);
  }

  const nextPages = () => {
    if (paginaActual < numberPages.length) {
      setPaginaActual(paginaActual + 1);
    }
  };
  const previousPages = () => {
    if (paginaActual !== 1) {
      setPaginaActual(paginaActual - 1);
    }
  };
  useEffect(() => {
    setPaginaActual(1);
  }, [url.category]);
  const onSpecificPages = (n) => {
    setPaginaActual(n);
  };
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a
        href="#dataProductos"
        className="pagination-previous"
        onClick={previousPages}
      >
        <Icon
          icon="material-symbols:arrow-back-ios"
          color="#01d457"
          width="40"
          height="40"
        />
      </a>
      <a href="#dataProductos" className="pagination-next" onClick={nextPages}>
        <Icon
          icon="material-symbols:arrow-forward-ios"
          color="#01d457"
          width="40"
          height="40"
        />
      </a>
      <ul className="pagination-list">
        {numberPages.map((page) => (
          <li key={page}>
            <a
              href="#dataProductos"
              className={`pagination-link ${
                page === paginaActual ? "is-current" : ""
              }`}
              onClick={() => onSpecificPages(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
