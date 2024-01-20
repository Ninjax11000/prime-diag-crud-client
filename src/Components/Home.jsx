import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Home = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setServices(data);
    })
    },[])
    return (
        <div className='my-6 space-y-3'>
            <h2 className="text-center font-bold text-3xl">Welcome to Prime diagnostic</h2>
            <p className='text-center mb-6'>Get your accurate medical test reports for fair price</p>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
           {
                services.map(service=><ServiceCard 
                    key={service.code}
                    service={service}
                ></ServiceCard>)
            }
           </div>

            
        </div>
    );
};

export default Home;