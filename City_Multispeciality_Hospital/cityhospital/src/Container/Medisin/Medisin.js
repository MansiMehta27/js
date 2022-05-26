import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

function Medisin(props) {
    const data = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            status: true
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            status: true
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            status: false
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            status: true
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
        }
    ];
    return (
        <div>
           
                <Card>
              
                <CardBody>
                    <CardTitle tag="h5">
                        {data.name}

                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6">
                        {data.id}
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
              
            </Card>
            
           
        </div>
    );
}

export default Medisin;