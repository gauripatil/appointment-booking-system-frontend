import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar  from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from 'react-router-bootstrap';

function Dashboard() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>   
                        <Card.Header>Dr. Ajit Raut Homeopathy Clinic Appointment Booking System</Card.Header>    
                        <Card.Body gap={5 } className="card-body">
                            
                            <ButtonToolbar className="d-flex justify-content-around" >
                                <LinkContainer to="/book-appointment">
                                    <Button >Book Appointment</Button>
                                </LinkContainer>
                                <LinkContainer to="/current-token">
                                    <Button >See Current Token Number</Button>
                                </LinkContainer>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                
                    <Card>
                        <Card.Body className="card-body" gap={5}>
                            <Card.Title className="card-title">Annoucement Board</Card.Title>
                            <Card.Text>
                                Patients with prior appointments will only be attended.
                            </Card.Text>
                            <Card.Text>
                                Please don't insist for consultation without appointment.
                            </Card.Text>
                            <Card.Text>
                                Appointment patients be present in time.
                            </Card.Text>
                            <Card.Text>
                                Please REFRESH the page for booking's sharp at 8:00am.
                            </Card.Text>
                            <Card.Text>
                                Patients with first 5 tokens are requested to be present at 8am.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;