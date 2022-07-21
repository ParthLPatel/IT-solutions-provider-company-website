import React from 'react';
import AboutUsImg from '../src/images/AboutUsPage.svg';
import CommonHome_About from './CommonHome&About';

const HomePage = ()=>{
    const AboutUsData = 'Innovation and simplicity makes us happy. '  
    +'Our goal is to remove any technical or financial barriers that can prevent business owners from making their own website.'
    +'We are excited to help you on your journey!';

    return(
        <React.Fragment>
            <CommonHome_About 
            brandHeading='Welcome to Patel IT Solutions'
            brandName=''
            brandMotto={AboutUsData}
            btnValue='Contact Us'
            btnRouteTo='/contact'
            imgSrc={AboutUsImg}
            />
        </React.Fragment>
    );
}
export default HomePage;