import React from "react";
// import Container from "../Container/Container"
import { Card, Alert } from 'react-bootstrap';
import "./RxResults.css";

function RxResults(props) {
    const { prescriptions } = props;

    return (
        <>

            {
                prescriptions.map((item, idx) => {
                    console.log("prescription item\n\n\n", item)
                    let dosage = '';

                    item.active_ingredients.forEach((ingredient) => {
                        dosage = ingredient.strength
                    })
                    return (
                        <Card key={idx} style={{ width: '18rem' }}>
                            <Card.Img variant="top" id="happy-pills" src="https://previews.123rf.com/images/lefttime/lefttime1707/lefttime170700008/82264314-green-red-and-blue-pills-smiling-different-emotion-cartoon-style-vector-illustration-on-white-backgr.jpg" />
                            <Card.Body>
                                <Card.Title>{item.brand_name}</Card.Title>
                                <Card.Text>
                                    {dosage}MG
                                </Card.Text>
                            </Card.Body>
                            <Alert>
                                To find important information about potentially dangerous drug interactions, please visit the {' '}
                                <Alert.Link href="https://www.drugs.com/drug_interactions.html" target="_blank" rel="noopener noreferrer">Drugs.com interaction checker</Alert.Link>.
        </Alert>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default RxResults;