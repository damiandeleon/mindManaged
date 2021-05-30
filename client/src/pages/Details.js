import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/API";

function Detail(props) {
    const [entry, setEntry] = useState({})
  
    // When this component mounts, grab the entry with the _id of props.match.params.id
    // e.g. localhost:3000/entries/599dcb67f0f16317844583fc
    const {id} = useParams()
    useEffect(() => {

      API.getEntry(id)
        .then(res => setEntry(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
        <Container fluid>
          <Row>
            <Col size="md-12">
                <h1>
                  {entry.date}
                </h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <h1>Entry</h1>
                <p>Entry Date:  {entry.date}</p>
                <p> Mood Level: {entry.moodLevel}</p>
                <h3>Journal Text</h3>
                <p>{entry.text}</p>
              </article>
            </Col>
          </Row>
          <Row>
            <Col size="md-2">
              <Link to="/journal">← Back to Journal Page</Link>
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default Detail;