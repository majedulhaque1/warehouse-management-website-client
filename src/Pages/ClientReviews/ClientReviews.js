import React from 'react';
import './ClientReviews.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import imageClient from '../../images/carimage4.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
const ClientReviews = () => {
    return (
        <>
        <div>
            <h2 className='text-center text-warning fs-3 py-5'>CLIENT REVIEWS</h2>
            {/* <div className='underline'></div> */}
        </div>
            <Swiper
            slidesPerView={1}
            className='client-review-container my-5'
            modules={[Navigation]}
            navigation={true}
            >
                <SwiperSlide className='client-review'>
                <Card className='border-0 card-style'>
                            <Card.Img className='img-style' variant='top' src={imageClient}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text className='text-center fs-2'>
                                    kevin
                                </Card.Text>
                                <Card.Text className='text-center'>
                                    your services is really awesome.
                                    your services is really awesome.
                                    your services is really awesome.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </SwiperSlide>
                <SwiperSlide className='client-review'>
                 <Card className='border-0 card-style'>
                            <Card.Img className='img-style' variant='top' src={imageClient}>
                            </Card.Img>
                           <Card.Body>
                                <Card.Text className='text-center fs-2'>
                                    jhon
                                </Card.Text>
                                <Card.Text className='text-center'>
                                    your services is really awesome.
                                    your services is really awesome.
                                    your services is really awesome.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </SwiperSlide>
                <SwiperSlide className='client-review'>
                <Card className='border-0 card-style'>
                            <Card.Img className='img-style' variant='top' src={imageClient}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text className='text-center fs-2'>
                                    Merey
                                </Card.Text>
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