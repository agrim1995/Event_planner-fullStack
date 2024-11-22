import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthApiService, { urls } from "../../apiServices/AuthApiService";
import { useSelector } from "react-redux";

const AddManager = () => {
  const admin = useSelector((state) => state.authUserInfo.value);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await AuthApiService.PostApiCallWithUrl(urls.ADD_MANAGER,formData,admin.token);
      if (resp.status) {
        setError("");
        // Show success message in alert box
        alert("Manager added successfully");
        // Redirect or show success message after adding manager
        console.log("Manager added successfully:", resp.data);
      } else {
        setError("Failed to add manager");
        // Show error message in alert box
        alert("Error adding manager: " + resp.data.message);
        console.error("Error adding manager:", resp.data);
      }
    }catch (error) {
      setError("Network Error!");
      // Show error message in alert box
      alert("Network Error! Failed to add manager");
      console.error("Error adding manager:", error);
    }
  };

  return (
    <div className="login-form-bg m-4">
      <div className="container">
        <div className="row justify-content-center" style={{ height: "550px" }}>
          <div className="col-xl-">
            <div className="form-input-content">
              <div
                className="card login-form mb-0 ml-5"
                style={{ width: "450px" }}
              >
                <div className="card-body pt-5">
                  <Link to="/admin/manager">
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
                  <a className="text-center" href="index.html">
                    <h4>Add Manager Details</h4>
                  </a>
                  <form
                    className="mt-5 mb-5 login-input"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        name="contact"
                        placeholder="Contact"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn login-form__btn submit w-100"
                    >
                      Add Manager
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
  );
};

export default AddManager;
