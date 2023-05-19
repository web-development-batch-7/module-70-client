import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from '../BookingRow/BookingRow';

const BookingService = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])


    const uri = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [])


    const handleDelete = id => {
        const proceed = confirm('are you sure!')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = bookings.filter(booking => booking._id != id)
                    setBookings(remaining)
                })

        }
    }

    return (
        <div>
            <h1 className='text-center text-5xl pb-6' >Booking Service : {bookings.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Avatar</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            >

                            </BookingRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default BookingService;