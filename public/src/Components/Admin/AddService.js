// import React from 'react'
// import { Link } from 'react-router-dom'

// const AddService = () => {
//   return<>
//     <div class="login-form-bg m-4" >
//             <div class="container">
//                 <div class="row justify-content-center" style={{height:"550px;"}}>
//                     <div class="col-xl-">
//                         <div class="form-input-content">
//                             <div class="card login-form mb-0 ml-5" style={{width:"450px"}} >
//                                 <div class="card-body pt-5"  >
//                                     <Link to="/admin/viewService"><button class="btn btn-primary d-flex justify-content-center"  style={{marginTop:"-40px", marginRight:"-20px", float: "right"}}>View</button></Link>

//                                         <h4 class="d-flex justify-content-center">Add Service Details</h4>


//                                         <form class="mt-5 mb-5 login-input">

//                                             <div class="form-group">
//                                                 <input type="text" class="form-control"  placeholder="Service Name" required />
//                                             </div>


//                                             <div class="form-group">
//                                                 <input type="text" class="form-control"  placeholder="Service Description" required />
//                                             </div>


//                                             <button class="btn login-form__btn submit w-100">Add Event</button>
//                                         </form>                                        
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//   </>
// }

// export default AddService


// AddService.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService, { urls } from '../../apiServices/AuthApiService';
import { useSelector } from 'react-redux';

const AddService = () => {
    const admin = useSelector((state) => state.authUserInfo.value);
    const serviceNameRef = useRef(null);
    const serviceDescRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form...');
        const serviceData = {
            service_name: serviceNameRef.current.value,
            service_desc: serviceDescRef.current.value
        };
        console.log('Service data:', serviceData);
        try {
            const resp = await AuthApiService.PostApiCallWithUrl(urls.ADD_SERVICE, serviceData, admin.token);
            console.log('Response:', resp);
            if (resp.status) {
                alert('Service added successfully');
                console.log('Service added successfully:', resp.data);
                // Clear input fields after successful submission
                serviceNameRef.current.value = '';
                serviceDescRef.current.value = '';
            } else {
                alert('Error adding service: ' + resp.data.message);
                console.error('Error adding service:', resp.data);
            }
        } catch (error) {
            alert('Network Error! Failed to add service');
            console.error('Error adding service:', error);
        }
    };


    return (
        <>
            <div className="login-form-bg m-4">
                <div className="container">
                    <div className="row justify-content-center" style={{ height: "550px;" }}>
                        <div className="col-xl-">
                            <div className="form-input-content">
                                <div className="card login-form mb-0 ml-5" style={{ width: "450px" }}>
                                    <div className="card-body pt-5">
                                        <Link to="/admin/viewService">
                                            <button className="btn btn-primary d-flex justify-content-center" style={{ marginTop: "-40px", marginRight: "-20px", float: "right" }}>View</button>
                                        </Link>

                                        <h4 className="d-flex justify-content-center">Add Service Details</h4>

                                        <form className="mt-5 mb-5 login-input" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="text" ref={serviceNameRef} className="form-control" placeholder="Service Name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" ref={serviceDescRef} className="form-control" placeholder="Service Description" required />
                                            </div>
                                            <button type="submit" className="btn login-form__btn submit w-100">Add Service</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddService;

