import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthApiService, { urls } from "../../../apiServices/AuthApiService";

const UpdateService = () => {
  
  const serviceData = useSelector((state) => state.authUserInfo.value);
  const updated = useSelector((state) => state.updatadata.value);
  
 console.log(serviceData.token); 
  
const [loading , setLoading] = useState(false);
const[msg,setMsg] = useState("");
const servname = useRef();
const servdesc = useRef();


const serviceSave = async(event)=>{
   event.preventDefault();
   var ob={
    service_name:servname.current.value,
    service_desc:servdesc.current.value,
   };
   try {
    setLoading(true);
    const URL = urls.UPDATE_SERVICE + "/" + updated.id;

      console.log("Request URL:", URL);
      console.log("Request Body:", ob);
   const response= await AuthApiService.PutApiCall(URL,ob,serviceData.token);

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
      <div class="login-form-bg m-4">
        <div class="container">
          <div class="row justify-content-center" style={{ height: "550px" }}>
            <div class="col-xl-">
              <div class="form-input-content">
                <div
                  class="card login-form mb-0 ml-5"
                  style={{ width: "450px" }}
                >
                  <div class="card-body pt-5">
                    <Link to="/admin/viewService">
                      <button
                        class="btn btn-primary d-flex justify-content-center"
                        style={{
                          marginTop: "-40px",
                          marginRight: "-20px",
                          float: "right",
                        }}
                      >
                        View
                      </button>
                    </Link>

                    <h4 class="d-flex justify-content-center">
                      Update Service Details
                    </h4>

         <form class="mt-5 mb-5 login-input" onSubmit={serviceSave}>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Service Name" ref={servname}
                          required
                        />
                      </div>

                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                        placeholder="Service Description" ref={servdesc}
                          required
                        />
                      </div>

                      {/* <button class="btn login-form__btn submit w-100 ">
                        Update
                      </button> */}

                     <div className="text-center">
                    <button type="submit" className="btn btn-primary my-4">
                      {loading ? "updating..." : "Update"}
                    </button>
                  </div>
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

export default UpdateService;
