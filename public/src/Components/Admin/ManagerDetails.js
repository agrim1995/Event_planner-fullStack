import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthApiService, { urls } from "../../apiServices/AuthApiService";
import { useDispatch, useSelector } from "react-redux";
import { ListManagerReducer } from "../../reduxData/managerSlice";
import { updateRec } from "../../reduxData/UpdateSlice";

const ManagerDetails = () => {
  const admin = useSelector((state) => state.authUserInfo.value);
  const manager = useSelector((state) => state.managerInfo.value);
  console.log(manager);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");

const upd = (ob) => {
  dispatch(updateRec(ob));
  navigate("/admin/updateManager");
  };
  

  const ManagerList = async () => {
    try {
      const resp = await AuthApiService.GetApiCall(
        urls.MANAGER_LIST,
        admin.token
      );
      console.log("setting list", resp);
      if (resp.status) {
        dispatch(ListManagerReducer(resp.data.data));
      }
    } catch (error) {
      setMsg("Network Error !");
    }
  };
  useEffect(() => {
    ManagerList();
  }, []);
  return (
    <>
      <div className="content-body">
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div
                  className="card-body"
                  style={{ padding: "0.88rem 0.81rem " }}
                >
                  <div className="active-member">
                    <div className="table-responsive">
                      <div className="d-flex justify-content-between">
                        <h3 className="pl-2"> Managers Detalis</h3>
                        <Link to="/admin/addManager">
                          <button
                            className="btn btn-primary d-flex justify-content-center "
                            style={{ float: "right;" }}
                          >
                            Add Manager
                          </button>
                        </Link>
                      </div>{" "}
                      <hr />
                      <table className="table table-xs mb-0">
                        <thead>
                          <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {manager.map((ob,index) => {
                            return (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{ob.name}</td>
                                <td>
                                  <span>{ob.contact}</span>
                                </td>
                                <td>{ob.email}</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked
                                    data-toggle="toggle"
                                    data-on="Active"
                                    data-off="inActive"
                                    data-onstyle="success"
                                    data-offstyle="secondary"
                                  />
                                </td>
                                <td>
                                  <span>
                                    <Link
                                      to={"/admin/updateManager"}
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Edit" onClick={() => upd(ob)}
                                      className="mr-2"
                                    >
                                      <i className="fa fa-pencil color-muted m-r-5"></i>
                                    </Link>
                                    <Link
                                      to="/"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Delete"
                                      onclick="alert('Delete Manager Details...')"
                                    >
                                      <i className="fa fa-close color-danger"></i>
                                    </Link>
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
        </div>
      </div>
    </>
  );
};

export default ManagerDetails;
