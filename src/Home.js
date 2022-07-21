import React from 'react';
import homePageImg from '../src/images/homePageImage.svg';
import CommonHome_About from './CommonHome&About';

const HomePage = ()=>{
    return(
        <div>
            <CommonHome_About 
            brandHeading='Grow your business with'
            brandName=' Patel IT Solutions.'
            brandMotto='We are the team of talented developers, making websites.'
            btnValue='Get Started'
            btnRouteTo='/service'
            imgSrc={homePageImg}
            />
        </div>
    );
}
export default HomePage;