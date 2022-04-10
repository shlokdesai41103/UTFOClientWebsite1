import React from 'react';
import './contact_style.css';
const Card = props => {
return(

    <div className="card text-center">
        <div className="text-dark">
            <h4 className="title">{props.title}</h4>
            <p className="intro">{props.intro}</p>
            <h6 className='phone'>{props.phone}</h6>
            <p className='phoneNumber'>{props.phoneNumber}</p>
            <h6 className='email'>{props.email}</h6>
            <p className='emailAddress'>{props.emailAddress}</p>
            
            <a href="#" className="btn btn-outline-success"> Go Anywhere </a>
            <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            <a href="#" className="btn btn-outline-success">Go Anywhere</a>
        </div>
    </div>

);


}

export default Card;