import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import RxResults from "../components/RxResults/RxResults";
import Container from "../components/Container/Container";
import { CgSmileMouthOpen } from 'react-icons/cg'
import { Card, Form, ListGroup, Button, Alert, Row, Col, Jumbotron } from 'react-bootstrap';
import "./Medication.css";
import API from "../utils/API";
import { useAuth0 } from '@auth0/auth0-react';

const Medication = () => {
    let today = new Date();
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0');
    var YYYY = today.getFullYear();
    const { user } = useAuth0();
    
    today = MM + '/' + DD + '/' + YYYY

    const [showResults, setShowResults] = useState({
      display: false,
      buttonName: 'Intake Tracker'
    })
    
    const [state, setState] = useState({
        search: "",
        prescriptions: [],
        results: [],
        error: "",
    });
    const [SavedRx, setSavedRx] = useState({
        brand_name: "",
        dosage: "",
        product_number: 0,
        user_id: ""
    })

    const [buttonState, setButtonState] = useState({
        isYes: false,
        isNo: false,
        dates: [],
        user_id: ""
    })

    const toggleChangeYes = () => {
        setButtonState({
            isYes: true,
        });
    }

    const toggleChangeNo = () => {
        setButtonState({
            isNo: true,
        });
    }

    const intakeSubmit = () => {
      let intake = [];
      let skippedDay = today;

      if (buttonState.isNo) {
          intake.push(skippedDay);
          var missedMeds = intake;
      }
      const Dates = {
          dates: missedMeds,
          user_id: user.sub
      }
      API.saveNo(Dates)
        .catch(err => console.log(err));

      window.location.reload();
    }

    const getIntake = (id) => {
        API.getIntake(id)
            .then(res => {
                setButtonState(res.data)
            })
            .catch(err => console.log(err));
    }

    const renderComponent = () => {
      if (showResults.display === false) {
        setShowResults({
          display: true,
          buttonName: 'Search'
        })
      } else {
        setShowResults({
          display: false,
          buttonName: 'Intake Tracker'
        })
      }
    }

    useEffect(() => {
        API.getDrugInfo(state.search)
            .then(res => {

                let products = [];
                res.data.results.forEach((item) => {
                    products = products.concat(item.products)
                })
                setState({ prescriptions: products })
            })
            .catch(err => console.log(err));

        getSavedRx(user.sub)

        getIntake(user.sub)

    }, [state.prescriptions, state.search, user.sub])

    const getSavedRx = (id) => {
        API.getSavedRx(id)
            .then(res => {
                setSavedRx(res.data)
            })
            .catch(err => console.log(err));
    }

    const deleteRx = (id) => {
        API.deleteRx(id)
            .then(() => getSavedRx(user.sub))
            .catch(err => console.log(err));
    };

    const handleInputChange = event => {
        const value = event.target.value;

        setState({
            ...state,
            search: value,
        });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.getDrugInfo(state.search)
            .then(res => {
                let products = [];
                res.data.results.forEach(item => {
                    products = products.concat(item.products)
                })
                setState({
                    ...state,
                    prescriptions: products
                })
            })
            .catch(err => console.log(err));
    };

    const IntakeTracker = () => (
      <Col xs={12} sm={12} md={8} lg={8} style={{margin: '0px auto'}}>
        <Card style={{ backgroundColor: 'rgba(165,200,160,0.975)', borderRadius: '10px', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black' }} className="text-center">
            {buttonState.length ? (
              <div style={{color: 'black', margin: '0px auto', width: 'auto'}}>
                <h1 style={{ margin: '10px' }}>Oops!</h1>
                <p>You didn't take your medication on the following day(s):</p>
                <Card.Body style={{ width: 'auto' }}>
                  <ListGroup variant="flush" style={{ margin: '0px auto', maxHeight: '500px', overflow: 'auto'}}>
                      {buttonState.map((item, itemIdx) => {
                        if(item.dates.length === 0) {
                          return null;
                        }
                        else {
                          return (
                            <div style={{margin: '5px'}}>
                              < ListGroup.Item key={itemIdx} style={{ borderRadius: '10px' }}>
                                    <p style={{ fontSize: 'medium', margin: '0px 0px' }} >{item.dates}</p>
                              </ListGroup.Item>
                            </div>
                          )
                        }
                      })}
                  </ListGroup>
                </Card.Body>
              </div>
            ) : (
              <div>
                <h3 style={{margin: '20px'}}>Hooray, no skipped days!</h3>
                <CgSmileMouthOpen style={{paddingBottom: '4px', fontSize: '50px', marginBottom: '15px'}} id="smiley"/>
              </div>
            )}
        </Card>
      </Col>
    )

    return (
        <Container>
            <Jumbotron id="jumbo-bg" className="text-center" style={{ borderRadius: '20px' }}>
                <div id="fade-in">
                    <h1 id="jumbo-title" style={{ textShadow: '4px 4px rgba(50,50,50, 0.8)' }}>Medication</h1>
                    <h5>- Find and track your medication -</h5>
                    <br></br>
                    <Button onClick={renderComponent} variant="outline-light">{showResults.buttonName}</Button>
                </div>
            </Jumbotron>
            { showResults.display ? <IntakeTracker /> :         
            
            <Container style={{ marginTop: '3%' }}>
            <Row>
                <Col className="search-img" style={{ borderRadius: '10px', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', marginBottom: '3%' }} sm={12} md={12} lg={8}>
                    <Row>
                        <Container className="text-center" style={{ textAlign: 'center' }}>
                            <h2>Search by Brand Name:</h2>
                            <SearchForm
                                handleInputChange={handleInputChange}
                                handleFormSubmit={handleFormSubmit}
                                prescriptions={state.prescriptions}
                                search={state.search}
                            />
                        </Container>
                    </Row>
                    <Row>
                        <RxResults
                            prescriptions={state.prescriptions}
                            getSavedRx={getSavedRx}
                        />
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={4} className="text-center">
                    <Card.Body style={{ backgroundColor: 'rgba(255,255,255,0.95)', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', borderRadius: '10px', height: 'auto' }}>
                        <h2>Hold up!</h2>
                        <hr></hr>
                        <Form.Label id="question">Did you take your meds yet? 🤔</Form.Label>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check id="yes" type="checkbox" checked={buttonState.isYes}
                                onChange={toggleChangeYes} label="Yes" />
                            <Form.Check id="no" type="checkbox" checked={buttonState.isNo}
                                onChange={toggleChangeNo} label="No" />
                        </Form.Group>

                        <hr></hr>

                        <Alert id="alert">
                            <p>To find important information about potentially dangerous drug interactions, please visit the {' '}
                                <Alert.Link href="https://www.drugs.com/drug_interactions.html" target="_blank" rel="noopener noreferrer">Drugs.com interaction checker</Alert.Link>.
                  </p>
                        </Alert>
                        <Button size="small" variant="primary" onClick={intakeSubmit}>Save</Button>
                    </Card.Body>

                    <br></br>

                    <Card.Body style={{ backgroundColor: 'rgba(165,200,160,0.975)', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', borderRadius: '10px', height: 'auto' }}>
                        <h1> Your prescriptions </h1>
                        <hr></hr>
                        {SavedRx.length ? (
                            <ListGroup variant="flush" style={{ overflow: 'auto', height: '350px', borderRadius: '5px' }}>
                                {SavedRx.map(rx => (
                                    <ListGroup.Item key={rx._id}>
                                        <p style={{ fontSize: 'medium' }} > Name: {rx.brand_name}</p>
                                        <p style={{ fontSize: 'medium' }} > Dosage: {rx.dosage} </p>
                                        <Button size="sm" variant="danger" onClick={() => deleteRx(rx._id)}>Delete</Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        ) : (
                                <h4>No Results to Display</h4>
                            )}
                    </Card.Body>
                </Col>
            </Row>
          </Container>}
        </Container>
    );
    // }
}

export default Medication;