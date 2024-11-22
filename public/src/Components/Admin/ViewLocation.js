import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthApiService, { urls } from "../../apiServices/AuthApiService";
import { ListManagerReducer } from "../../reduxData/managerSlice";
import { updateRec } from "../../reduxData/UpdateSlice";

const ViewLocation = () => {
  const admin = useSelector((state) => state.authUserInfo.value);
  const manager = useSelector((state) => state.managerInfo.value);
  console.log(manager);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [location,setLocation] = useState([]);

  const upd = (ob) => {
    dispatch(updateRec(ob));
    navigate("/admin/viewLocation");
  };
  
  const LocationList = async () => {
    try {
      const resp = await AuthApiService.GetApiCall(urls.LOCATION_LIST,admin.token);
      console.log("lOCATION  list", resp);
      if (resp.status) {
        setLocation(resp.data.data);
        //dispatch(ListManagerReducer(resp.data.data));
      }
    } catch (error) {
      setMsg("Network Error !");
    }
  };
  useEffect(() => {
    LocationList();
  }, []);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div
                  className="card-body"
                  style={{ padding: "0.88rem 0.81rem" }}
                >
                  <div className="active-member">
                    <div className="table-responsive">
                      <div className="d-flex justify-content-between">
                        <h4 className=""> Location Detalis</h4>
                        <Link to="/admin/addLocation">
                          <button
                            className="btn btn-primary d-flex justify-content-center"
                            style={{ float: "right" }}
                          >
                            Add Location
                          </button>
                        </Link>
                      </div>
                      <table className="table table-xs mb-0">
                        <thead>
                          <tr>
                          <th>S.No</th>
                          <th>location_name</th>
                            <th>state</th>
                            <th>city</th>
                            <th>location_address</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                       

<tbody>
                          {location.map((ob, index) => {
                            return (
                              <tr>
                                <td>{index+1}</td>
                                <td>{ob.location_name}</td>
                                <td>{ob.state.state_name}</td>
                                <td>{ob.city.city_name}</td>
                                <td>{ob.location_address}</td>
                                <td>                                  <span>
<Link to="/admin/updateLocation" data-toggle="tooltip" data-placement="top" title="Edit" onClick={() => upd(ob, index)} className="mr-2">
        <i className="fa fa-pencil color-muted m-r-5"></i></Link>
                                    
<Link to="/admin/updateLocation" data-toggle="tooltip" data-placement="top" title="Delete" onclick="alert('Delete Event Details...')"><i className="fa fa-close color-danger"></i></Link>
                                  </span>
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

          {/* <div className="row">
        
        
        <div className="col-xl-6 col-lg-12 col-sm-12 col-xxl-12">
            <div className="card">
                <div className="card-body">
                        <h4 className="card-title mb-0">Store Location</h4>
                    <div id="world-map" style={{height: "470px;"}}></div>
                </div>        
            </div>
        </div>
    </div> */}

          
        </div>
      </div>
    </>
  );
};

export default ViewLocation;
