import React from 'react';

const BookingRow = ({ booking, handleDelete }) => {
    const { _id, service, img, date, price } = booking



    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask w-36 h-36">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td> {service} </td>
            <td>$ {price}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost">details</button>
            </th>
        </tr>

    );
};

export default BookingRow;