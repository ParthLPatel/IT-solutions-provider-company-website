import React from 'react';
import Card from './BaseCard';
import ServiceData from './ServiceData';

const ServicePage = ()=>{
    return(
        <React.Fragment>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>

            <div className='container mb-5 '>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row mb-4'>
                    {ServiceData.map( (item,index) =>{
                        return <Card 
                        key={index}
                        TITLE={item.title}
                        IMGSRC={item.imgSrc}
                        BODY={item.body}
                        BTNROUTE={item.btnRoute}                        
                        />
                    })}
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}
export default ServicePage;