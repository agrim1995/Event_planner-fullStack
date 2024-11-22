import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthApiService, { urls } from "../../apiServices/AuthApiService";

const AddState = () => {
  
const [stateName, setStateName]= useState('');  
const [error, setError]= useState('');
const admin = useSelector((state)=>state.authUserInfo.value);  
  
const handleSubmit = async(e) =>{
   e.preventDefault();
   try {
    const resp = await AuthApiService.PostApiCallWithUrl(urls.STATE_ADD, {state_name:stateName },admin.token);

    if(resp.status){
        setError('');
        alert(resp.data.message);
        console.log('State added successfully:', resp.data);
    } else{
        setError('Failed to add State');
            alert('Error adding State: ' + resp.data.message);
            console.error('Error adding State:', resp.data);
    }
   } catch (error) {
    setError('Network Error!');
    alert('Network Error! Failed to add State');
    console.error('Error adding State:', error);
   }
}  
  
    return (
    <>
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="login-form-bg h-100">
            <div className="container h-100">
              <div className="row justify-content-center h-100">
                <div className="col-xl-6">
                  <div className="form-input-content">
                    <div className="card login-form mb-0">
                      <div className="card-body pt-5">
                        <Link to="/admin/viewState">
                          <button
                            className="btn btn-primary d-flex justify-content-center"
                            style={{
                              marginTop: "-40px",
                              marginright: "-20px",
                              float: "right",
                            }}
                          >
                            View
                          </button>
                        </Link>

                        <h4>Add State</h4>

                        <form className="mt-5 mb-5 login-input"onSubmit={handleSubmit}>
                          <div className="form-group">
     <input type="text" className="form-control"     placeholder="Enter State Name" value={stateName}
     onChange={(e)=>setStateName(e.target.value)} required
                            />
                          </div>
                    {error && <div className="text-danger">{error}</div>}
                          <div>
                            <button className="btn btn-primary font-weight-bold submit">
                              ADD
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
        </div>
      </div>
    </>
  );
};

export default AddState;
