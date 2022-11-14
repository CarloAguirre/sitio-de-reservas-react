import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardModel from './Card-model';

const CardGrid = ()=> {


  return (
    <Container>
    <Row mt-5>
      <Col xs={12} md={6} lg={4} > {<CardModel />} </Col>
      <Col xs={12} md={6} lg={4} > {<CardModel />} </Col>
      <Col xs={12} md={6} lg={4} > {<CardModel />} </Col>
      <Col xs={12} md={6} lg={4} > {<CardModel />} </Col>
      <Col xs={12} md={6} lg={4} > {<CardModel />} </Col>
      <Col xs={12} md={6} lg={4} > {<CardModel />} </Col>
    </Row>
  </Container>
);
}

export default CardGrid;