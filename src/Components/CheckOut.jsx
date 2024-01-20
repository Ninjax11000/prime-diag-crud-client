import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { name, price, code } = service
    console.log(service);
    const navigate=useNavigate();
    const handleSubmit = event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const testName=form.testName.value;
        const testCode=form.testCode.value;
        const testPrice=form.testPrice.value;
        const testDate=form.testDate.value;
        const formdata={name,email,testName,testCode,testPrice,testDate}
        console.log(formdata);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('booking successful!');
                navigate('/');
            }
        })

    }
    
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Please fill out checkout form!!</h2>

            <form onSubmit={handleSubmit} className="card-body">
                <div className='grid md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' defaultValue={user.email} className="input input-bordered" readOnly required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customer Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <input type="text" name='testName' defaultValue={name} className="input input-bordered" readOnly required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Code</span>
                        </label>
                        <input type="text" name='testCode' defaultValue={code} className="input input-bordered" readOnly required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='testPrice' defaultValue={price} className="input input-bordered" readOnly required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='testDate' defaultValue={price} className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-primary" type="submit" value="Checkout" />
                </div>
            </form>

        </div>
    );
};

export default CheckOut;