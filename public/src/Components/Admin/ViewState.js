import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthApiService, { urls } from "../../apiServices/AuthApiService";

const ViewState = () => {
  const admin= useSelector((state)=> state.authUserInfo.value);
  
const navigate = useNavigate();
const dispatch = useDispatch();
const [msg, setMsg]= useState("");
const [stateLis ,setStateLis] = useState([]);   
  
const StateList = async() =>{
    try {
        
      const resp = await AuthApiService.GetApiCall(urls.STATE_LIST);
      console.log("State List",resp)
      
      if(resp.status){
        setStateLis(resp.data.data);

      }
      
    } catch (error) {
        setMsg("Network Error !");

    }
};

useEffect(()=>{
    StateList();
},[]);

    return (
    <>
      <div className="content-body">
        <div className="container-fluid mt-3 ">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4">
              <div className="card">
                <div
                  className="card-body"
                  style={{ padding: "0.88rem 0.81rem" }}
                >
                  <div className="active-member">
                    <div className="table-responsive">
                      <div className="d-flex justify-content-between">
                        <h4>View States</h4>
                        <Link to="/admin/addState">
                          <button className="btn btn-primary">Add state</button>
                        </Link>
                      </div>
                      <table className="table table-xs mb-0">
                        <thead className=" d-flex justify-content-center">
                          <tr>
                          <th>Sr.no</th>
                          <th>State Name</th>
                          </tr>
                        </thead>
                        <tbody>

                        {stateLis.map((ob, index) => {
                            return (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{ob.state_name}</td>
                                <td>
                                 
                                </td>
                              </tr>
                            );
                          })}
                          <tr>
                            
                          </tr>

                        </tbody>
                      </table>
                      <br />
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

export default ViewState;
