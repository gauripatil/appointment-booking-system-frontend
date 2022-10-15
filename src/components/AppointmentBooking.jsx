import React from "react";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function AppointmentBooking() {
    return (
        <Container className="col-lg-7">
            <Row>
                <Col>
                    <Card>   
                        <Card.Header className="card-header">Login for Booking Appointment</Card.Header>    
                        <Card.Body className="login-card-body">
                            <Form className="signin-form mx-auto">
                                <Stack>
                                    <Form.Group className="mb-3 form-controls" controlId="formBasicEmail">
                                        <Form.Label className="form-labels">Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className="form-labels">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password" />
                                    </Form.Group>
                                    <Button className="mb-3 mt-3" variant="primary" type="submit">
                                        Login
                                    </Button>
                                    <Form.Text>New User? Do not have an account? </Form.Text>
                                    <Button className="mb-3 mt-3" variant="primary" >
                                        Create New Account
                                    </Button>
                                </Stack>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AppointmentBooking;