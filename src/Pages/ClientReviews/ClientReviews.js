import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import imageClient from '../../images/gear.png';
const ClientReviews = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Card>
                            <Card.Img style={{width: '100px', height:'100px'}} variant='top' src={imageClient}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    your services is really awesome.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card>
                        <Card.Img style={{width: '100px', height:'100px'}} variant='top' src={imageClient}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    your services is really awesome.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card>
                        <Card.Img style={{width: '100px', height:'100px'}} variant='top' src={imageClient}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    your services is really awesome.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientReviews;