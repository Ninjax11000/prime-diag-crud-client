import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState(null);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    // console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [])
    const handleDelete= (id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                const remaining= bookings.filter(booking=>booking._id !==id);
                setBookings(remaining);
            }        
        })
    }
    const handleConfirm = id=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status: 'confirmed'})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                const remaining= bookings.filter(booking=>booking._id !==id);
                const update= bookings.find(booking=>booking._id ===id);
                update.status='confirmed';
                const newBooking=[update, ...remaining];
                setBookings(newBooking);
            }
        })
    }
    return (
        <div>
            <h2 className="font-bold text-3xl">All of your bookings</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                   Delete
                                </label>
                            </th>
                            <th>TestName</th>
                            <th>Customer Name</th>
                            <th>Test Code</th>
                            <th>Test Price</th>
                            <th>Test Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            bookings?.map(booking=><BookingRow 
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                                ></BookingRow>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;