import React from 'react';
import './ClientReviews.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import imageClient1 from '../../images/person1.jpg';
import imageClient2 from '../../images/person2.jpg';
import imageClient3 from '../../images/person2.jpg';
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
                            <Card.Img className='img-style' variant='top' src={imageClient1}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text className='text-center fs-2'>
                                    kevin
                                </Card.Text>
                                <Card.Text className='text-center'>
                                    I am really satisfied buy car.Your service is really awesome.if i buy a car than i will visit your site.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </SwiperSlide>
                <SwiperSlide className='client-review'>
                 <Card className='border-0 card-style'>
                            <Card.Img className='img-style' variant='top' src={imageClient2}>
                            </Card.Img>
                           <Card.Body>
                                <Card.Text className='text-center fs-2'>
                                    jhon
                                </Card.Text>
                                <Card.Text className='text-center'>
                                    your service is really good.And you are provided best price.I really like this.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </SwiperSlide>
                <SwiperSlide className='client-review'>
                <Card className='border-0 card-style'>
                            <Card.Img className='img-style' variant='top' src={imageClient3}>
                            </Card.Img>
                            <Card.Body>
                                <Card.Text className='text-center fs-2'>
                                    Jhon
                                </Card.Text>
                                <Card.Text className='text-center'>
                                    your car service and maintanence is very good.And service is relaiable.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </SwiperSlide>
            </Swiper>
            
        </>
    );
};

export default ClientReviews;