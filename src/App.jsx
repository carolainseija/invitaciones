import ContentHome from "./components/Content";
import ContentCard from "./components/ContentCard";
import Gallery from "./components/Gallery/Gallery";

import "./App.css";
import { useState } from "react";

const ConfirmacionAsistenciaModal = ({ isOpen, onClose, onConfirmar }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Confirmar Asistencia</h2>
        <p>¿Confirmas tu asistencia a la ceremonia?</p>
        <label>
          Nombre y apellido:
          </label>
          <input
            type="text"
            placeholder="Escribe tu nombre y apellido"
            // value={nombre}
            // onChange={(e) => setNombre(e.target.value)}
          />
        <button onClick={onConfirmar}>Sí, Confirmar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};
function App() {



  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAbrirModal = () => {
    setModalIsOpen(true);
  };

  const handleCerrarModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirmarAsistencia = () => {
    // Lógica para confirmar la asistencia, por ejemplo, enviar una solicitud al servidor.
    // También puedes cerrar el modal después de confirmar.
    handleCerrarModal();
  };
  return (
    <>
      <div className="header"></div>
      <div className="bodyContent">
      {/* <button onClick={handleAbrirModal}>Confirmar Asistencia</button> */}
      <ConfirmacionAsistenciaModal
        isOpen={modalIsOpen}
        onClose={handleCerrarModal}
        onConfirmar={handleConfirmarAsistencia}
      />
        <div className="content_home">
          <div>
            <div className="ondulado-header"></div>
            <div className="section bg-secundary">
              <h2 className="names">Cris & Caro</h2>
              <p className="names_subtitle">
                Nos llena de alegría que nos acompañes en este día tan
                significativo. Tu presencia hará que nuestra boda sea aún más
                memorable.
              </p>
            </div>
            <div className="ondulado_down-header"></div>
          </div>
          <div className="section marginTop bg-white">
            <ContentHome handleAbrirModal={handleAbrirModal} />
            <div className="ondulado"></div>
            <div className="section bg-secundary">
              <ContentCard />{" "}
            </div>
            <div className="ondulado_down"></div>
          </div>
          <div className="section bg-white gallery-white">
            <p className="title">Galería de fotos</p>
            <Gallery />
            <div className="ondulado"></div>
            <div className="section bg-secundary">
              <p className="names_subtitle">
                Les informamos que la fecha límite para confirmar su asistencia
                a nuestra ceremonia es el 10 de diciembre. Agradecemos su pronta
                respuesta para preparar todo y compartir este día especial
                juntos.
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
