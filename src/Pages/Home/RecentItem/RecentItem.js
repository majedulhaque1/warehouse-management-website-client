import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
const RecentItem = ({ recentcar }) => {
    const {_id, img, name, description, price, quantity } = recentcar;
    const navigate = useNavigate();
    const handleInventory = () =>{
        navigate(`inventory/${_id}`);
    }
    return (
        <>
            <Col xs={12} md={6} lg={4}>
            <Card className='mb-5 mx-4 shadow-lg' style={{ width: '22rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Card.Text>
                        Quantity: {quantity}
                    </Card.Text>
                    <Button className="text-white me-5" variant="warning">Update</Button>
                    <Button onClick={handleInventory} className='ms-5 text-white' variant="warning">Inventory</Button>
                </Card.Body>
            </Card>
            </Col>
        </>
    );
};

export default RecentItem;