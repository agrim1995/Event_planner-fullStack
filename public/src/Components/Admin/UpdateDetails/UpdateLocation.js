import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService, { urls } from '../../../apiServices/AuthApiService';
import { useSelector } from 'react-redux';

const UpdateLocation = () => {

const LocationData = useSelector((state) => state.authUserInfo.value);
const updated = useSelector((state) => state.updatadata.value);
    
console.log(LocationData.token); 

const [loading , setLoading] = useState(false);
const[msg,setMsg] = useState("");
const eventname = useRef();
const estate = useRef();
const ecity= useRef();
const eaddress= useRef();


const LocationSave = async(event)=>{
    event.preventDefault();
    var ob={
     event_name:eventname.current.value,
     state:estate.current.value,
     city:ecity.current.value,
     address:eaddress.current.value
    };
    try {
     setLoading(true);
     const URL = urls.LOCATION_UPDATE + "/" + updated.id;
  
    //    console.log("Request URL:", URL);
    //    console.log("Request Body:", ob);
    const response= await AuthApiService.PutApiCall(URL,ob,LocationData.token);
  
     console.log(response);
     if (response.data.status) {
         setMsg(response.data.msg); 
       } else {
         setMsg(response.data.msg);
       }
     } catch (error) {
         setLoading(false);
       } finally {
         setLoading(false);
       }
  }  


return <>
<div className="content-body">

<div className="container-fluid mt-3">


    <div className="login-form-bg h-100">
        <div className="container h-100">
            <div className="row justify-content-center h-100">
                <div className="col-xl-6">
                    <div className="form-input-content">
                        <div className="card login-form mb-0">
                            <div className="card-body pt-5">
                                <Link to="/admin/viewLocation"><button className="btn btn-primary d-flex justify-content-center" style={{marginTop:"-40px", marginRight:"-20px", float: "right"}}>View</button></Link>
                         
                                <h4>Update Location Details</h4>
                           
                                

<form className="mt-5 mb-5 login-input" onSubmit={LocationSave}>
                                    
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter event name" ref={eventname}required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter event state" ref={estate}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter event city" ref={ecity}
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter event address" ref={eaddress}
                                            required />
                                    </div>
                                    
                                    <button className="btn login-form__btn submit w-100">Update</button>
                                </form>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</div>
  </>
}

export default UpdateLocation
