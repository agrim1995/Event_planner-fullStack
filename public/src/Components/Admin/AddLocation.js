import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthApiService, { urls } from "../../apiServices/AuthApiService";

const AddLocation = () => {
  const admin = useSelector((state) => state.authUserInfo.value);
  const [formData, setFormData] = useState({
 
      location_name:"",
      location_address:"",
      location_state_id:"",
      location_city_id:"",
 });
const [error,setError]= useState("");  

const handleChange = (e) =>{
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async(e) =>{
  e.preventDefault();

  try {
    const resp= await AuthApiService.PostApiCallWithUrl(urls.LOCATION_ADD,formData,admin.token);
    if(resp.status){
      setError("");
      alert("Location added Successfully");
    console.log("Lcoation Added successfully",resp.data);
}else{
  setError("Failed to add Location");
  alert("Error adding Location:"+resp.data.message);
  console.error("Error adding Location:", resp.data);
}
  } catch (error) {
    setError("Network Error!");
    alert("Network Error! Failed to add Location");
    console.error("Error adding Location:", error);
  }
};

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
                        <Link to="/admin/addLocation">
                          <button
                            className="btn btn-primary d-flex justify-content-center"
                            style={{
                              marginTop: "-40px",
                              marginRight: "-20px",
                              float: "right",
                            }}
                          >
                            View
                          </button>
                        </Link>

                        <h4>Add Location Details</h4>

                        <form className="mt-5 mb-5 login-input" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter event name"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter event state"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter event city"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter event address"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <button className="btn login-form__btn submit w-100">
                            submit
                          </button>
                        </form>
                        {error && <p className="text-danger">{error}</p>}

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

export default AddLocation;
