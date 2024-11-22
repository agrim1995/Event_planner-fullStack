// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Addbookings() {
//     return (
//         <div>
//             <div className="login-form-bg h-100 m-4">
//                 <div className="container h-100">
//                     <div className="row justify-content-center h-100">
//                         <div className="col-xl-6">
//                             <div className="form-input-content">
//                                 <div className="card login-form mb-0">
//                                     <div className="card-body pt-5">
//                                         <Link className="text-center" to="/addbookings"> <h4> Bookings</h4></Link>

//                                         <form className="mt-5 mb-5 login-input">
//                                             <div className="form-group">
//                                                 <input type="Name" className="form-control" placeholder="Enter Name"/>
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type="Contact No" className="form-control" placeholder="Enter no "/>
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type=" Alt Contact No" className="form-control" placeholder="Enter alternate no "/>
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type="Email Id" className="form-control" placeholder="Enter Email" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type="Event Date" className="form-control" placeholder="Enter event Date "/>
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type=" No of days" className="form-control" placeholder="Enter  no days "/>
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type="Budget" className="form-control" placeholder="Enter Budget" />
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type="Event Location" className="form-control" placeholder="Enter event Location "/>
//                                             </div>
//                                             <div className="form-group">

//                                                 <select className="custom-select d-block form-control" id="event" required
//                                                     data-error="Please select an item in the list.">
//                                                     <option disabled selected>Choose Event Type</option>
//                                                     <option value="1">Engagement</option>
//                                                     <option value="2">Wedding ceremony</option>
//                                                     <option value="3">Birthday party</option>
//                                                     <option value="4">Baby Shower</option>
//                                                     <option value="5">Anniversary</option>
//                                                     <option value="6">Retirement party</option>
//                                                     <option value="7">Get-together party</option>
//                                                     <option value="8">Pool party</option>
//                                                     <option value="9">House party</option>
//                                                     <option value="10">Holi party</option>
//                                                     <option value="11">Haloween party</option>
//                                                     <option value="12">Valentines party</option>
//                                                     <option value="13">Freshers party</option>
//                                                     <option value="13">Farewell party</option>
//                                                     <option value="13">Others</option>
//                                                 </select>
//                                                 <div className="help-block with-errors"></div>
//                                             </div>
//                                             </form>
//                                     </div>

//                                     <div className="form-group">

//                                         <select className="custom-select d-block form-control" id="event" required
//                                             data-error="Please select an item in the list.">
//                                             <option disabled selected>Customer approved</option>
//                                             <option value="1">yes</option>
//                                             <option value="2">no</option>

//                                         </select>
//                                         <div className="help-block with-errors"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="btn login-form__btn submit w-100">Submit Booking</button>

//                     <p className="mt-5 login-form__footer"></p>
//                 </div>
//             </div>
//         </div>
//     </div >
//   )
// }


import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import AuthApiService, { urls } from '../apiServices/AuthApiService';

export default function Addbookings() {
    const [events, setEvents] = useState([]);
    const [enquiries, setEnquiries] = useState([]);
    const [locations, setLocations] = useState([]);
    const admin = useSelector((state) => state.authUserInfo.value);
    const eventRef = useRef();
    const enquiryRef = useRef();
    const locationRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const daysRef = useRef();
    const budgetRef = useRef();
    const approvedRef = useRef();

    useEffect(() => {
        fetchEvents();
        fetchEnquiries();
        fetchLocations();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await AuthApiService.GetApi(urls.EVENTS_LIST);
            if (response.data.status) {
                setEvents(response.data.data);
            } else {
                console.error('Failed to fetch events:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const fetchEnquiries = async () => {
        try {
            const response = await AuthApiService.GetApiCall(urls.ENQUIRY_LIST, admin.token);
            if (response.data.status) {
                setEnquiries(response.data.data);
            } else {
                console.error('Failed to fetch enquiries:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching enquiries:', error);
        }
    };

    const fetchLocations = async () => {
        try {
            const response = await AuthApiService.GetApi(urls.LOCATION_LIST);
            if (response.data.status) {
                setLocations(response.data.data);
            } else {
                console.error('Failed to fetch locations:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookingData = {
            booking_event_id: eventRef.current.value,
            no_of_days: daysRef.current.value,
            budget: budgetRef.current.value,
            booking_location_id: locationRef.current.value,
            event_date: dateRef.current.value,
            event_time: timeRef.current.value,
            booking_enquiry_id: enquiryRef.current.value,
            booking_user_manager_id: admin.id
        };
        try {
            const response = await AuthApiService.PostApiCallWithUrl(urls.BOOKING_SAVE, bookingData, admin.token);
            if (response.data.status) {
                console.log('Booking added successfully:', response.data.message);
                alert(response.data.message)
                // Optionally reset form fields
                eventRef.current.value = '';
                daysRef.current.value = '';
                budgetRef.current.value = '';
                locationRef.current.value = '';
                dateRef.current.value = '';
                timeRef.current.value = '';
                enquiryRef.current.value = '';
                approvedRef.current.value = '';
            } else {
                console.error('Failed to add booking:', response.data.message);
                alert(response.data.message)

            }
        } catch (error) {
            console.error('Error adding booking:', error);
        }
    };

    return (
        <div>
            <div className="login-form-bg h-100 m-4">
                <div className="container h-100">
                    <div className="row justify-content-center h-100">
                        <div className="col-xl-6">
                            <div className="form-input-content">
                                <div className="card login-form mb-0">
                                    <div className="card-body pt-5">
                                        <h4 className="text-center">Bookings</h4>
                                        <form className="mt-5 mb-5 login-input" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <select ref={enquiryRef} className="custom-select d-block form-control" required>
                                                    <option disabled selected>Select Enquiry For</option>
                                                    {enquiries.map(enquiry => (
                                                        <option key={enquiry.id} value={enquiry.id}>{enquiry.enq_name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select ref={eventRef} className="custom-select d-block form-control" required>
                                                    <option disabled selected>Select Event Type</option>
                                                    {events.map(event => (
                                                        <option key={event.id} value={event.id}>{event.event_name}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <select ref={locationRef} className="custom-select d-block form-control" required>
                                                    <option disabled selected>Select Location</option>
                                                    {locations.map(location => (
                                                        <option key={location.id} value={location.id}>{location.location_name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <input ref={dateRef} type="date" className="form-control" placeholder="Enter event Date " />
                                            </div>
                                            <div className="form-group">
                                                <input ref={timeRef} type="time" className="form-control" placeholder="Enter event Date " />
                                            </div>
                                            <div className="form-group">
                                                <input ref={daysRef} type="No of days" className="form-control" placeholder="Enter  no days " />
                                            </div>
                                            <div className="form-group">
                                                <input ref={budgetRef} type="Budget" className="form-control" placeholder="Enter Budget" />
                                            </div>

                                            <div className="form-group">
                                                <select ref={approvedRef} className="custom-select d-block form-control" required>
                                                    <option disabled selected>Customer Approved</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="btn login-form__btn submit w-100">Submit Booking</button>
                                        </form>
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
