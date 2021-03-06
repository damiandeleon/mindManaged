import React from "react";
import { Card, Button } from 'react-bootstrap';
import "./RxResults.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';

function RxResults(props) {
    const { prescriptions, getSavedRx } = props;

    const { user } = useAuth0();

    const saveRx = (item) => {
        let dosage = '';

        item.active_ingredients.forEach((ingredient) => {
            dosage = ingredient.strength
        })
        const chosenRx = {
            brand_name: item.brand_name,
            dosage: dosage,
            product_number: item.product_number,
            user_id: user.sub
        }
        API.saveRx(chosenRx)
            .then(() => {
              getSavedRx(user.sub)
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            {
                prescriptions.map((item, idx) => {
                    let dosage = '';

                    item.active_ingredients.forEach((ingredient) => {
                        dosage = ingredient.strength
                    })
                    return (
                        <Card key={idx} style={{ width: '18rem', borderRadius: '10px', padding: '5px 10px 5px 10px', textAlign: 'center', margin: '10px auto' }}>
                            <Card.Img variant="top" id="happy-pills" src="https://previews.123rf.com/images/lefttime/lefttime1707/lefttime170700008/82264314-green-red-and-blue-pills-smiling-different-emotion-cartoon-style-vector-illustration-on-white-backgr.jpg" style={{ alignSelf: 'center' }} />
                            <Card.Body>
                                <Card.Title>{item.brand_name}</Card.Title>
                                <Card.Text>
                                    {dosage}
                                </Card.Text>
                            </Card.Body>
                            <Button onClick={() => saveRx(item)} id="save" variant="outline-success">Save Rx</Button>{' '}
                        </Card>
                    )
                })
            }
        </>
    )
}

export default RxResults;