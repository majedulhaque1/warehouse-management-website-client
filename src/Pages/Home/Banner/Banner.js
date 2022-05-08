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
                        style={{width: '100%',height: '90vh'}}
                        className=""
                        src={imageSlide2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-1 mb-5'>Advance features and technology.</h3>
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
                        <h3 className='fs-1 mb-5'>Better Performance And environment friendly</h3>
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
                        <h3 className='fs-1 mb-5'>Low mantanence and good choice</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;