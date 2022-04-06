import React from "react";
import Img from "react-cool-img";
import ProjectIMG from "./../../img/proyecto.gif";

export default function Notes() {
  return (
    <div className="Notas">
      <h1>Â¿QuÃ© vamos a desarrollar?</h1>
      <p>Â¡Hola!</p>
      <p>Esta secciÃ³n incluirÃ¡ el repositorio y explicaciones</p>
      <h3>Recursos</h3>
      <ul>
        <li>
          <span role="img" aria-label="Docs">
            ??
          </span>{" "}
          <a
            href="https://github.com/mikenieva"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </li>
        <li>
          <span role="img" aria-label="Rocket">
            ??{" "}
          </span>
          <a
            href="https://hooks.mikenieva.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </li>
      </ul>

      <h3>Ãndice</h3>
      <ul>
        <li>El proyecto</li>
        <li>Â¿QuÃ© son los Hooks?</li>
      </ul>
      <h2>El proyecto</h2>
      <p>
        En la siguiente imagen, te muestro lo que vamos a desarrollar. SerÃ¡ una
        aplicaciÃ³n muy sencilla de bÃºsqueda.
      </p>
      <p>
        Se filtrarÃ¡ un archivo .json, que es un catÃ¡logo de frutas, y
        encontrarÃ¡ la fruta deseada.
      </p>
      <p>Puedes echarle un vistazo a la demostraciÃ³n en el Ã­ndice.</p>
      <Img src={ProjectIMG} cache width="350px" debounce={1000} />
      <h2>Â¿QuÃ© son los Hooks?</h2>
      <p>React, en sus inicios, tenÃ­a dos formas de construir componentes.</p>
      <ul>
        <li>ÂComponentes funcionalesÂ</li>
        <li>ÂComponentes de claseÂ</li>
      </ul>
      <p>
        Los componentes funcionales eran mÃ¡s ligeros. Sin embargo,{" "}
        <b>
          no podÃ­as gestionar estados ni manejar ciclos de vida dentro de
          ellos.
        </b>{" "}
        Es decir, no contabas con efectos secundarios (como utilizar un API
        externa, por ejemplo).
      </p>
      <p>
        Si tÃº necesitabas usar estos efectos, era necesario usar los
        componentes de clase.
      </p>
      <p>
        Si por alguna razÃ³n, avanzando con tu aplicaciÃ³n de React, eligieras
        un componente funcional y te dieras cuenta que necesitarÃ¡s estos
        efectos, debÃ­as trabajar en una refactorizaciÃ³n hacia los componentes
        de clase.
      </p>
      <p>
        Esto podrÃ­a ser desde muy complejo en aplicaciones grandes. Por esto,
        tener una estrategia de componentes <b>clara</b> era muy importante
        desde el inicio.
      </p>
      <p>
        Con este escenario, en React 16.8, en esta versiÃ³n, se propusieron los
        ÂHooksÂ.{" "}
      </p>
      <p>
        Los Hooks son funciones que agregan caracterÃ­sticas de ÂgestiÃ³n de
        estadoÂ y un mejor manejo de efectos adversos o secundarios, dentro de
        un componente funcional. Es decir, todo lo que podÃ­a hacer el
        componente de clase, ahora sÃ­, lo puede hacer el componente funcional.{" "}
      </p>
      <p>
        La ventaja principal de escribir componentes funcionales es que es menos
        cÃ³digo, la sintaxis es mucho mÃ¡s limpia y en algunas indicaciones del
        equipo de React, se observa una ligera mejora en el desempeÃ±o de la
        aplicaciÃ³n (muy ligera realmente). Otro beneficio, es que realizar
        ÂTestingÂ es mucho mÃ¡s claro y organizado.
      </p>
    </div>
  );
}
