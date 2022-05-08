import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className='whychoose-section'>
            <div>
                <h1 className='text-center text-warning pb-5'>WHY CHOOSE US</h1>
            </div>
            <div className='whychoose-container'>
            <div className='why-choose-item'>
                <h2 className='py-5 fs-3'>Car Service And Maintance</h2>
                <p>
                    We provide better car service and maintainence for you.We ensure good service for your car.
                </p>
            </div>
            <div className='why-choose-item'>
                <h2 className='py-5 fs-3'>Wide Range of brands</h2>
                <p>
                    We have multiple brand choice for you.Like BMW, Mercedes, audi.You can choice good car.
                </p>
            </div>
            <div className='why-choose-item'>
                <h2 className='py-5 fs-3'>Trusted</h2>
                <p>
                    We are trused. you can buy car without any hassle.Our community is good and they are trust us.
                </p>
            </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;