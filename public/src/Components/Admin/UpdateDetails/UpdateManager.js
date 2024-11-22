import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthApiService, { urls } from "../../../apiServices/AuthApiService";

const UpdateManager = () => {
  
const managerData = useSelector((state) => state.authUserInfo.value);
const updated = useSelector((state) => state.updatadata.value);
    
   console.log(managerData.token); 
    
  const [loading , setLoading] = useState(false);
  const[msg,setMsg] = useState("");
  const Manname = useRef();
  const Mancontact = useRef(); 
  const Manemail = useRef();  
  


const managerSave = async(event)=>{
    event.preventDefault();
    var ob={
     name:Manname.current.value,
     contact:Mancontact.current.value,
     email:Manemail.current.value,

    };

    try {
     setLoading(true);
     const URL = urls.UPDATE_MANAGER + "/" + updated.id;
 
    //    console.log("Request URL:", URL);
    //    console.log("Request Body:", ob);
    const response= await AuthApiService.PutApiCall(URL,ob,managerData.token);
 
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
    <>
      <div className="login-form-bg m-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-">
              <div className="form-input-content">
                <div
                  className="card login-form mb-0"
                  style={{ width: "500px" }}
                >
                  <div className="card-body pt-5">
                    <a className="text-center" href="index.html">
                      <h4>Update Manager Details</h4>
                    </a>

        <form className="mt-5 mb-5 login-input" onSubmit={managerSave}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name" ref={Manname}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          name="contact"
                          placeholder="Contact" ref={Mancontact}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email" ref={Manemail}
                          required
                        />
                      </div>
                      <button
                        className="btn login-form__btn submit w-100"
                        type="submit"
                      >
                        Update
                      </button>
                    </form>
                    {/* {msg && <p>{msg}</p>} */}
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

export default UpdateManager;
