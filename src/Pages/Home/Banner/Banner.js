import React from 'react';
import { Carousel } from 'react-bootstrap';
import imageSlide from '../../../images/gear.png';
const Banner = () => {
    return (
        <div>
            <Carousel style={{height: '80vh'}}>
                <Carousel.Item>
                    <img
                        style={{width: '100%',height: '80vh'}}
                        className="d-block"
                        src={imageSlide}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Amazing car we have</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: '100%',height: '80vh'}}
                        className="d-block w-100"
                        src={imageSlide}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Awesome Cars</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{width: '100%',height: '80vh'}}
                        className="d-block w-100"
                        src={imageSlide}
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