import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import AuthApiService, { urls } from '../../../apiServices/AuthApiService';

const UpdateEvents = () => {
  
  const EventData = useSelector((state) => state.authUserInfo.value);
  const updated = useSelector((state) => state.updatadata.value);
  
 console.log(EventData.token); 
    
const [loading , setLoading] = useState(false);
const[msg,setMsg] = useState("");
const eventname = useRef();
  

const EventSave = async(event)=>{
  event.preventDefault();
  var ob={
   event_name:eventname.current.value,
  };
  try {
   setLoading(true);
   const URL = urls.EVENT_UPDATE + "/" + updated.id;

     console.log("Request URL:", URL);
     console.log("Request Body:", ob);
  const response= await AuthApiService.PutApiCall(URL,ob,EventData.token);

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
  
return (
    <div className="login-form-bg m-4">
    <div className="container">
      <div
        className="row justify-content-center"
        style={{ height: "550px;" }}
      >
        <div className="col-xl-">
          <div className="form-input-content">
            <div
              className="card login-form mb-0 ml-5"
              style={{ width: "450px" }}
            >
              <div className="card-body pt-5">
                <a className="text-center" href="index.html">
                  <h4>Update Events Details</h4>
                </a>

                <form className="mt-5 mb-5 login-input" onSubmit={EventSave}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Event Name" ref={eventname}
                      required/>
                  </div>

                  {/* <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Event Budget"
                      required
                    />
                  </div> */}

                  {/* <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Event Description"
                      required
                    />
                  </div> */}

                  <button className="btn login-form__btn submit w-100">
                    Update Event
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateEvents  
