import React from "react";
import Card from "react-bootstrap/Card";
import { Accordion } from "react-bootstrap";
import "../Card-Karir/listKarir.css";

const ListKarir = () => {
  return (
    <Card className="karirCard" style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Title>IT</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Web Developer</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          quae reiciendis animi officia harum nihil totam et magni recusandae
          aliquam.
        </Card.Text>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Persyaratan</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default ListKarir;
