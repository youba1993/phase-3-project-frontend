import React from "react";
import { Accordion } from "react-bootstrap";

function Categorie({categorie}){

        return (
            
              <Accordion.Item eventKey={categorie.id}>
                <Accordion.Header>{categorie.name}</Accordion.Header>
                <Accordion.Body>
                <h3>{categorie.bio}</h3>
                <a href={categorie.website}>Visit {categorie.name}!</a>
                </Accordion.Body>
              </Accordion.Item>
          );
}
export default Categorie;