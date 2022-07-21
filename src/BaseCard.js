import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props)=>{
    return(

        <React.Fragment>
        <div className='col-md-4 col-12 mb-4'>
        <div className="card mb-4 pb-5">
            <img className="card-img-top" src={props.IMGSRC} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.TITLE}</h5>
                <p className="card-text">{props.BODY}</p>
                <NavLink exact to="#" className="btn btn-primary">Explore</NavLink>
            </div>
        </div>
        </div>

        </React.Fragment>
    );
}
export default Card;