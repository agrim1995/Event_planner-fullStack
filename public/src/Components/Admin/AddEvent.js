import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthApiService, { urls } from "../../apiServices/AuthApiService";
import { useSelector } from "react-redux";

const AddEvent = () => {
  const [eventName, setEventName] = useState("");
  const [error, setError] = useState("");
  const admin = useSelector((state) => state.authUserInfo.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await AuthApiService.PostApiCallWithUrl(
        urls.EVENT_SAVE,
        { event_name: eventName },
        admin.token
      );
      if (resp.status) {
        setError("");
        alert(resp.data.message);
        console.log("Event added successfully:", resp.data);
      } else {
        setError("Failed to add event");
        alert("Error adding event: " + resp.data.message);
        console.error("Error adding event:", resp.data);
      }
    } catch (error) {
      setError("Network Error!");
      alert("Network Error! Failed to add event");
      console.error("Error adding event:", error);
    }
  };

  return (
    <>
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
                    <Link to="/admin/viewEvent">
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
                      <h4>Add Events Details</h4>
                    </a>

                    <form
                      className="mt-5 mb-5 login-input"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Event Name"
                          value={eventName}
                          onChange={(e) => setEventName(e.target.value)}
                          required
                        />
                      </div>
                      {error && <div className="text-danger">{error}</div>}
                      <button
                        type="submit"
                        className="btn login-form__btn submit w-100"
                      >
                        Add Event
                      </button>
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

export default AddEvent;
