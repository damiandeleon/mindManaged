import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container, Jumbotron, Card } from "react-bootstrap";
import API from "../utils/API";
import './Journal.css';

function Detail(props) {
  const [entry, setEntry] = useState({})

  // When this component mounts, grab the entry with the _id of props.match.params.id
  // e.g. localhost:3000/entries/599dcb67f0f16317844583fc
  const { id } = useParams()
  useEffect(() => {

    API.getEntry(id)
      .then(res => setEntry(res.data))
      .catch(err => console.log(err));
  })

  return (
    <Container>
      <Jumbotron id="jumbo-bg2" style={{ borderRadius: '20px', background: 'rgba(114, 134, 117, 0.9)' }} className="text-center">
        <h1 style={{textShadow: '4px 4px rgba(50,50,50, 0.8)'}}> Journal Details - {entry.date} <span><h5> at {entry.time}</h5></span></h1>
        <hr></hr>
        <h3 id="moodLevel" style={{textShadow: '4px 4px rgba(50,50,50, 0.8)'}}> Mood Level: {entry.moodLevel}</h3>
        <br></br>
      <Card>
        <p style={{ color:'black', textAlign: 'left', padding: '10px 0px 0px 10px' }}>{entry.text}</p>
      </Card>
      <div  style={{ fontSize: '18px', marginTop: '35px' }}>
        <Link to="/journal" style={{color: 'white'}}>← Back to Journal Page</Link>
      </div>
      </Jumbotron>

      {/* <Row>
        <Col size="md-10 md-offset-1">
          <Card>
            <h2 style={{ textShadow: '1px 1px rgba(75,75,75, 0.6)', textAlign: 'center' }}>Journal Entry</h2>
          </Card>
          <Card id="JournalEntryBox">
            <article>
              <p id="JournalTextBox">{entry.text}</p>
            </article>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/journal">← Back to Journal Page</Link>
        </Col>
      </Row> */}
    </Container>
  );
}


export default Detail;