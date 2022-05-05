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
        <div id='recentitems#items'>
            <Container style={{width: "100%", margin: "0 auto"}}>
                <div className="section-title">
                    <h2 className="text-warning text-center my-5">Recent Added</h2>
                </div>
                <Row style={{width: "100%", margin: "0 auto"}} className='gx-5'>
                    {
                        products.slice(0,6).map(recentcar => <RecentItem key={recentcar._id} recentcar={recentcar}></RecentItem>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default RecentItems;