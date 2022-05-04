import React from 'react';
import ClientReviews from '../../ClientReviews/ClientReviews';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs';
import Banner from '../Banner/Banner';
import RecentItems from '../RecentItems/RecentItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentItems></RecentItems>
            <WhyChooseUs></WhyChooseUs>
            <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;