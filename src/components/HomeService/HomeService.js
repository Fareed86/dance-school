import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeService = (props) => {
    const { name, price, image } = props.homeService;
    return (
        <Col>
            <Card className="border border-secondary border-5">
                <Card.Img className="w-50 mx-auto my-4" variant="top" src={image} />
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

export default HomeService;