import React from 'react';
import { Carousel } from 'react-bootstrap';
import imageSlide1 from '../../../images/carimage1.jpg';
import imageSlide2 from '../../../images/carimage2.jpg';
import imageSlide3 from '../../../images/carimage3.jpg';
const Banner = () => {
    return (
        <div>
            <Carousel style={{ backgroundSize: 'cover',height: '90vh'}}>
                <Carousel.Item className='banner-img-style'>
                    <img
                        style={{width: '100%',height: '100vh'}}
                        className=""
                        src={imageSlide2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Amazing car we have</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: '100%',height: '90vh'}}
                        className=""
                        src={imageSlide1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Awesome Cars</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: '100%',height: '90vh'}}
                        className=""
                        src={imageSlide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Very good looking cars.</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;