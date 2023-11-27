import { Card, Col, Row } from "antd";
import dress from "../../assets/dress.png";
import "../../App.css"

export default function ContentCard() {

  return (
    <div className="contenidos">
      <Row gutter={20} justify="center">
        <Col xl={10} lg={5} md={20} xs={20}>
        <Card
            className="cards"
            hoverable
            title="Código de vestimenta"
            cover={<img alt="example" className="icon" style={{ width: "90px", height: "auto", margin: "0px auto"}} src={dress} />}
          >
            <button className="button-more">Ver más</button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
