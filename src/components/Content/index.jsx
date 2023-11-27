import { Col, Row, Flex } from "antd";
import brindis from "../../assets/brindis.png";
import "./style.css";

export default function ContentHome() {

  return (
    <div className="contenidos">
      <Row gutter={20} justify="center" className="">
        <Col xl={5} lg={5} md={20} xs={20}>
          <Flex vertical justify="center" align="center">
            <img src={brindis} />
            <p className="title">Civil</p>
            <p className="subtitle">Día</p>
            <p className="subtitle2">Sábado 15 de Mayo - 17hs</p>
            <p className="subtitle">Lugar</p>
            <p className="subtitle2">Parroquia Nuestra Señora de Lujan</p>
            <button className="button-confirm">Confirmar asistencia</button>
            <p className="subtitle">Dirección</p>
            <p className="subtitle2">Parroquia Nuestra Señora de Lujan</p>
            <button className="button-confirm">¿Cómo llegar?</button>
          </Flex>
        </Col>
        <Col xl={5} lg={5} md={20} xs={20}>
          <Flex vertical justify="center" align="center">
            <img src={brindis} />
            <p className="title">Ceremonia - Brindis</p>
            <p className="subtitle">Día</p>
            <p className="subtitle2">Sábado 15 de Mayo - 17hs</p>
            <p className="subtitle">Lugar</p>
            <p className="subtitle2">Parroquia Nuestra Señora de Lujan</p>
            <button className="button-confirm">Confirmar asistencia</button>
            <p className="subtitle">Dirección</p>
            <p className="subtitle2">Parroquia Nuestra Señora de Lujan</p>
            <button className="button-confirm">¿Cómo llegar?</button>
          </Flex>
        </Col>
      </Row>
    </div>
  );
}
