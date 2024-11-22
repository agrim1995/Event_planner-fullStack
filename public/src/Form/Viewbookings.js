// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Viewbookings() {
//     return (
//         <div>
//             <div className="content-body">
//                 <div className="container-fluid row">
//                     <div className="col-md-12">
//                         <div className="container-fluid">
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="card">
//                                         <div className="card-body">
//                                             <h4 className="/viewbookings">Enquiry Table</h4>
//                                             <div className="table-responsive">
//                                                 <table className="table table-striped table-bordered zero-configuration">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Operations</th>
//                                                             <th>Name</th>
//                                                             <th>Contact</th>
//                                                             <th> Alt_Contact</th>
//                                                             <th>Email</th>
//                                                             <th>Event Date</th>
//                                                             <th>No of Days</th>
//                                                             <th>Budget</th>
//                                                             <th>Event Location</th>
//                                                             <th>Event type</th>
//                                                             <th>Approval Status</th>


//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr>
//                                                             <td>
//                                                                 <button > <i className="fas fa-edit"></i></button>

//                                                                 <button> <i className="fas fa-trash"></i></button> 

//                                                             </td>
//                                                         <td>Ritu Verma</td>
//                                                         <td>7246832719</td>
//                                                         <td>8246832719</td>
//                                                         <td>ritu24@gamil.com</td>
//                                                         <td>24/4/2024</td>
//                                                         <td>3</td>
//                                                         <td>1000000</td>
//                                                         <td>Itarsi</td>
//                                                         <td>wedding</td>
//                                                         <td>Yes</td>

//                                                     </tr>

//                                                 </tbody>

//                                                 <tbody>
//                                                     <tr>
//                                                         <td>
//                                                             <button > <i className="fas fa-edit"></i></button>

//                                                             <button> <i className="fas fa-trash"></i></button>

//                                                     </td>
//                                                     <td>Anjali choudhary</td>
//                                                     <td>7246832479</td>
//                                                     <td>7246832717</td>
//                                                     <td>anjali24@gamil.com</td>
//                                                     <td>24/6/2023</td>
//                                                     <td>1</td>
//                                                     <td>100000</td>
//                                                     <td>Itarsi</td>
//                                                     <td>Engagement</td>
//                                                     <td>no</td>

//                                                 </tr>

//                                             </tbody>

//                                             <tbody>
//                                                 <tr>
//                                                     <td>
//                                                         <button > <i className="fas fa-edit"></i></button>

//                                                         <button> <i className="fas fa-trash"></i></button> 

//                                                 </td>
//                                                 <td>Tanisha jain</td>
//                                                 <td>7246832719</td>
//                                                 <td>7246836781</td>
//                                                 <td>tanisha24@gamil.com</td>
//                                                 <td>23/12/2023</td>
//                                                 <td>1</td>
//                                                 <td>500000</td>
//                                                 <td>Mandsaur</td>

//                                                 <td> Birthday</td>
//                                                 <td>yes</td>


//                                             </tr>

//                                         </tbody>

//                                         <tbody>
//                                             <tr>
//                                                 <td>
//                                                     <button > <i className="fas fa-edit"></i></button>

//                                                     <button> <i className="fas fa-trash"></i></button> 

//                                             </td>
//                                             <td>Bhavna Dhatrak</td>
//                                             <td>7246832719</td>
//                                             <td>7986832719</td>
//                                             <td>bhavna24@gamil.com</td>
//                                             <td>30/03/2023/</td>
//                                             <td>1</td>
//                                             <td>500000</td>
//                                             <td>khargoan</td>
//                                             <td>Farewell</td>
//                                             <td>yes</td>


//                                         </tr>

//                                     </tbody>

//                                     <tbody>
//                                         <tr>
//                                             <td>
//                                                 <button > <i className="fas fa-edit"></i></button>

//                                                 <button> <i className="fas fa-trash"></i></button> 

//                                         </td>
//                                         <td>Rishika Chimaniya</td>
//                                         <td>723562719</td>
//                                         <td>724683456</td>
//                                         <td>rishika24@gamil.com</td>
//                                         <td>25/05/2022</td>
//                                         <td>1</td>
//                                         <td>500000</td>
//                                         <td>goa</td>
//                                         <td>Retirement</td>
//                                         <td>Yes</td>

//                                     </tr>

//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//             </div >
// 			</div >
// 			</div >
// 		</div >	
//     </div >
//   )
// }



import React, { useState, useEffect } from 'react';
import AuthApiService, { urls } from '../apiServices/AuthApiService';
import { useSelector } from 'react-redux';

export default function Viewbookings() {
    const [bookings, setBookings] = useState([]);
    const admin = useSelector((state) => state.authUserInfo.value);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await AuthApiService.GetApiCall(urls.BOOKING_LIST, admin.token);
            if (response.data.status) {
                setBookings(response.data.data);
            } else {
                console.error('Failed to fetch bookings:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    return (
        <div>
            <div className="content-body">
                <div className="container-fluid row">
                    <div className="col-md-12">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="/viewbookings">Booking Table</h4>
                                            <div className="table-responsive">
                                                <table className="table table-striped table-bordered zero-configuration">
                                                    <thead>
                                                        <tr>
                                                            <th>Operations</th>
                                                            <th>Name</th>
                                                            <th>Contact</th>
                                                            <th>Alt Contact</th>
                                                            <th>Email</th>
                                                            <th>Event Name</th>
                                                            <th>Event Date</th>
                                                            <th>No of Days</th>
                                                            <th>Budget</th>
                                                            <th>Location Name</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {bookings.map(booking => (
                                                            <tr key={booking.id}>
                                                                <td>
                                                                    <button> <i className="fas fa-edit"></i></button>
                                                                    <button> <i className="fas fa-trash"></i></button>
                                                                </td>
                                                                <td>{booking.enquiry.enq_name}</td>
                                                                <td>{booking.enquiry.enq_contact}</td>
                                                                <td>{booking.enquiry.alt_contact ?? "-"}</td>
                                                                <td>{booking.enquiry.email}</td>
                                                                <td>{booking.event.event_name}</td>
                                                                <td>{new Date(booking.event_date).toLocaleDateString()}</td>
                                                                <td>{booking.no_of_days}</td>
                                                                <td>{booking.budget}</td>
                                                                <td>{booking.location.location_name}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
