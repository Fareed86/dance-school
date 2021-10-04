import React from 'react';
import { Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <Card>
            <Card.Header as="h5" className="text-info fw-bold fs-1">Contact Us</Card.Header>
            <Card.Body>
                <Card.Title className="text-warning fs-2">THE DANCE SOUL
                </Card.Title>
                <Card.Text className="fs-3">
                    15 South Jersey Ave
                    Setauket, NY 11733
                </Card.Text>
                <Card.Text className="fs-3">
                    Phone: (631) 675-6040
                </Card.Text>
                <Card.Text className="fs-3">
                    Email: shinedancelongisland@gmail.com
                </Card.Text>
            </Card.Body>
        </Card >
    );
};

export default Contact;