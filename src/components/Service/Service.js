import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, price, image } = props.service;
    return (
        <Col>
            <Card className="border border-secondary border-5">
                <Card.Img className="w-50 mx-auto m-3" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Service Name: {name}</Card.Title>
                    <Card.Text>
                        <h2>Course Price: {price}</h2>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;