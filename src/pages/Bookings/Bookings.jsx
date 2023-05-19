import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Bookinks = () => {
    const service = useLoaderData()
    const { title, price, _id, img } = service
    const { user } = useContext(AuthContext)

    const handleCheckOut = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const email = user?.email
        const booking = {
            serviceID: _id,
            customerName: name,
            email,
            img,
            price,
            date,
            service: title
        }
        console.log(booking);


        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }




    return (
        <div>
            <h1>Service Name : {title} </h1>

            <form onSubmit={handleCheckOut} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={price} placeholder="due amount" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value='Oder Confirm' className="btn btn-primary btn-block" />
                </div>
            </form>

            <div className="card-body">

            </div>
        </div>

    );
};

export default Bookinks;