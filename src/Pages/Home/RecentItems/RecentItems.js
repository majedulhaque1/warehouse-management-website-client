import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import RecentItem from '../RecentItem/RecentItem';

const RecentItems = () => {
    // const [recentcars, setRecentCars] = useState([]);

    // useEffect( () =>{
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data => setRecentCars(data))
    // }, [])
    const [products, setProducts] = useProducts([]);
    return (
        <div>
            <Container style={{width: "100%", margin: "0 auto"}}>
                <div className="section-title">
                    <h2 className="text-primary fs-1 my-5">Recent Cars</h2>
                </div>
                <Row style={{width: "100%", margin: "0 auto"}} className='gx-5'>
                    {
                        products.map(recentcar => <RecentItem key={recentcar._id} recentcar={recentcar}></RecentItem>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default RecentItems;