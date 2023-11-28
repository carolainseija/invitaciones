import ContentHome from "./components/Content";
import ContentCard from "./components/ContentCard";
import Gallery from "./components/Gallery/Gallery";

import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <p>Imagen de header</p>
      </div>
      <div className="bodyContent">
        <div className="content_home">
          <div>
            <div className="ondulado"></div>
            <div className="section bg-secundary">
             <h2 className="names">Cris & Caro</h2>
              <p className="names_subtitle">
                Nos llena de alegría que nos acompañes en este día tan
                significativo. Tu presencia hará que nuestra boda sea aún más
                memorable.
              </p>
            </div>
            <div className="ondulado_down"></div>
          </div>
          <div className="section marginTop bg-white">
            <ContentHome />
            <div className="ondulado"></div>
            <div className="section bg-secundary">
              <ContentCard />{" "}
            </div>
            <div className="ondulado_down"></div>
          </div>
          <div className="section bg-white">
            <p className="title">Galería de fotos</p>
            <Gallery />
            <div className="ondulado"></div>
            <div className="section bg-secundary">
              <p className="names_subtitle">
                Nos llena de alegría que nos acompañes en este día tan
                significativo. Tu presencia hará que nuestra boda sea aún más
                memorable.
              </p>
            </div>
            <div className="ondulado_down"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
