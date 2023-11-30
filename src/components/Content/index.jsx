import { Col, Row, Flex } from "antd";
import brindis from "../../assets/brindis.png";
import civil from "../../assets/civil.png";
import "./style.css";

export default function ContentHome({ handleAbrirModal }) {

  return (
    <div className="contenidos">
      <Row gutter={20} justify="center" className="">
        <Col xl={5} lg={5} md={20} xs={20} className="Contentcolumn">
          <Flex vertical justify="center" align="center">
            <img src={civil} />
            <p className="title">Civil</p>
            <p className="subtitle">Día</p>
            <p className="subtitle2">Jueves 11 de Enero - 14hs</p>
            <p className="subtitle">Lugar</p>
            <p className="subtitle2">Registro Civil</p>
            <button className="button-confirm" onClick={handleAbrirModal}>Confirmar asistencia</button>
            <p className="subtitle">Dirección</p>
            <p className="subtitle2">Sarandí 428, Montevideo.</p>
            <button className="button-confirm">¿Cómo llegar?</button>
          </Flex>
        </Col>
        <Col xl={5} lg={5} md={20} xs={20} className="Contentcolumn">
          <Flex vertical justify="center" align="center">
            <img src={brindis} />
            <p className="title">Ceremonia - Brindis</p>
            <p className="subtitle">Día</p>
            <p className="subtitle2">Sábado 15 de Mayo - 17hs</p>
            <p className="subtitle">Lugar</p>
            <p className="subtitle2">Chacra: "La encontrada"</p>
            <button className="button-confirm" onClick={handleAbrirModal}>Confirmar asistencia</button>
            <p className="subtitle">Dirección</p>
            <p className="subtitle2">Camino Zendote 3929, Montevideo.</p>
            <button className="button-confirm">¿Cómo llegar?</button>
          </Flex>
        </Col>
      </Row>
    </div>
  );
}
