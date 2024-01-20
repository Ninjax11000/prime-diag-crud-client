import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {name,price,image,_id}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>$ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;