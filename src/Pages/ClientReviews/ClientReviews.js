import React from 'react';
import './ClientReviews.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import imageClient from '../../images/gear.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
const ClientReviews = () => {
    return (
        <>
            <Swiper
            slidesPerView={1}
            style={{height:'70vh', padding:'100px 0'}}
            modules={[Navigation]}
            navigation={true}
            >
                <SwiperSlide>
                <Card>
                            <Card.Img className='img-style shadow-lg' variant='top' src={imageClient}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text className='text-center'>
                                    your services is really awesome.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </SwiperSlide>
                <SwiperSlide>
                 <Card>
                            <Card.Img className='img-style shadow-lg' variant='top' src={imageClient}>
                            </Card.Img>
                           <Card.Body>
                                <Card.Text className='text-center'>
                                    your services is really awesome.
                                    your services is really awesome.
                                    your services is really awesome.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </SwiperSlide>
                <SwiperSlide>
                <Card>
                            <Card.Img className='img-style shadow-lg' variant='top' src={imageClient}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text className='text-center'>
                                    your services is really awesome.
                                    your services is really awesome.
                                    your services is really awesome.
                                    your services is really awesome.
                                    your services is really awesome.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </SwiperSlide>
            </Swiper>
            
        </>
    );
};

export default ClientReviews;