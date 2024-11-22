import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthApiService, { urls } from "../../apiServices/AuthApiService";
import { updateRec } from "../../reduxData/UpdateSlice";

const ViewEvent = () => {
  const admin = useSelector((state) => state.authUserInfo.value);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [event, setEvent] = useState([]);

  const upd = (ob) => {
    dispatch(updateRec(ob));
    navigate("/admin/updateEvents");
  };

  const deleteEvent = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Event?"
    );
    if (confirm) {
      try {
        const URL = urls.EVENT_DELETE + "/" + id;

        // Use the admin object for the token
        const response = await AuthApiService.DelApiCall(URL, admin.token);
        console.log(response);

        if (response.status) {
          setMsg("Event deleted successfully!");
          await EventList(); // Refresh the Event list

          // Navigate back after 2 seconds so users can see the message
          setTimeout(() => {
            navigate("/admin/viewEvent");
          }, 2000);
        } else {
          setMsg("Failed to delete the Event!");
        }
      } catch (error) {
        console.error(error);
        setMsg("Oops! Something went wrong while deleting the Event.");
      }
    }
  };

  const EventList = async () => {
    try {
      const resp = await AuthApiService.GetApiCall(urls.EVENTS_LIST);
      console.log("Event list", resp);
      if (resp.status) {
        setEvent(resp.data.data);
        // dispatch(ListManagerReducer(resp.data.data));
      }
    } catch (error) {
      setMsg("Network Error !");
    }
  };
  useEffect(() => {
    EventList();
  }, []);
  return (
    <>
      <div className="content-body">
        <div className="container-fluid mt-3 ">
          <div
            className="row justify-contect-center"
            style={{ marginLeft: "150px;" }}
          >
            <div className="col-lg-10">
              <div className="card">
                <div
                  className="card-body"
                  style={{ padding: "0.88rem 0.81rem" }}
                >
                  <div className="active-member">
                    <div className="table-responsive">
                      <div className="d-flex justify-content-between">
                        <h3 className="pl-2 mt-2"> Events Details</h3>
                        <Link to="/admin/addEvent">
                          <button
                            className="btn btn-primary d-flex justify-content-center"
                            style={{ float: "right;" }}
                          >
                            Add Event
                          </button>
                        </Link>
                      </div>
                      <table className="table table-xs mb-0">
                        <thead>
                          <tr>
                            <th>Sr.no</th>
                            <th>Event Name</th>
                            <th>Event Budget</th>
                            <th>Event Description</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {event.map((ob, index) => {
                            return (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{ob.event_name}</td>
                                <td></td>
                                <td></td>
                                <td>
                                  <Link
                                    to="/admin/updateEvents"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                    onClick={() => upd(ob, index)}
                                    className="mr-2"
                                  >
                                    <i className="fa fa-pencil color-muted m-r-5"></i>
                                  </Link>

                                  <Link
                                    to="/admin/updateEvents"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete"
                                    onClick={() =>
                                      deleteEvent(ob.id)
                                    
                                    }
                                  >
                                    <i className="fa fa-close color-danger"></i>
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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

export default ViewEvent;
