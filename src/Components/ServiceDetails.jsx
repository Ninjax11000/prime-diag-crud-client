import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const data = useLoaderData();
    const { name, price, code, image, deliveryTime, details,_id } = data;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl mx-3" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-2 text-3xl">{details}</p>
                    <p className="py-2 text-3xl">{deliveryTime}</p>
                    <p className="py-2 text-3xl">{code}</p>
                    <h2 className="text-3xl font-bold">{price}</h2>
                   <Link to={`/checkout/${_id}`}> <button className="btn btn-primary my-3">Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;