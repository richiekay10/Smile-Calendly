import React from "react";
import "../styles/App.css";
import Slate from "../images/pexels-photo-4049992.webp";
import Sleek from "../images/pexels-photo-5588317.webp";
import Think from "../images/pexels-photo-4226140.webp";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaSearchengin } from "react-icons/fa";

function Startups() {
  return (
    <>
      <Container className="cont p-2">
        <Row className="mb-4 mt-3">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Filter..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              <FaSearchengin /> Filter
            </Button>
          </InputGroup>
        </Row>
        <Row className="mb-4 mt-3">
          <Col md={4}>
            <img src={Think} alt="ZOOM" className="img-fluid" />
          </Col>
          <Col md={8}>
            <h3 className="text-primary">Zoom</h3>
            <p>Connect people and collaborate better together.</p>
            <Button variant="outline-primary">VIEW MORE</Button>
            <hr />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={4}>
            <img src={Slate} alt="GOOGLE MEET" className="img-fluid" />
          </Col>
          <Col md={8}>
            <h3 className="text-primary">Google Meet</h3>
            <p>
              Enterprise-grade video conferencing is available to everyone with
              Google Meet
            </p>
            <Button variant="outline-primary">VIEW MORE</Button>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <img src={Sleek} alt="DISCORD" className="img-fluid" />
          </Col>
          <Col md={8}>
            <h3 className="text-primary">Discord</h3>
            <p>
              A free communications app that lets you share voice , video ,text
              chat with friends.
            </p>
            <Button variant="outline-primary">VIEW MORE</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Startups;
