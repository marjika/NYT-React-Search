import React from "react";
import { Col, Row, Container } from "../../components/Grid";
//import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-6" style={{textAlign: "center"}}>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji" className="emoji-span">
              🙄
            </span>
          </h1>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;