import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import AuthApiService, { urls } from '../apiServices/AuthApiService';


const ViewService = () => {

  const admin = useSelector((state) => state.authUserInfo.value);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [service, setService] = useState([]);


  const ServiceList = async () => {
    try {
      const resp = await AuthApiService.GetApiCall(urls.SERVICE_LIST);
      console.log("AService list", resp)
      if (resp.status) {
        setService(resp.data.data)
        // dispatch(ListManagerReducer(resp.data.data));
      }
    } catch (error) {
      setMsg("Network Error !");
    }
  }
  useEffect(() => {
    ServiceList()
  }, [])
  return <>
    <div className="content-body">
      <div className="container-fluid mt-3" style={{ marginLeft: "180px;" }}>
        <div className="row justify-contect-center">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body" style={{ padding: "0.88rem 0.81rem" }}>
                <div className="active-member">
                  <div className="table-responsive">
                    <div className='d-flex justify-content-between'>
                      <h3 className="pl-2 mt-2"> Service Detalis</h3>

                      <Link to="/admin/addService"><button className="btn btn-primary d-flex justify-content-center float-right"
                      >Add Service</button></Link>
                    </div>

                    <table className="table table-xs mb-0">

                      <thead>
                        <tr>
                          <th>Service Name</th>
                          <th>Service Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody >
                        {service.map((item) => (
                          <tr key={item.id}>
                            <td>{item.service_name}</td>
                            <td>{item.service_desc}</td>
                            <td>
                              <Link to={`/updateService/${item.id}`} data-toggle="tooltip" data-placement="top" title="Edit" className="mr-2">
                                <i className="fa fa-pencil color-muted m-r-5"></i>
                              </Link>
                              <Link to="/" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => alert('Delete Service Details...')}>
                                <i className="fa fa-close color-danger"></i>
                              </Link>
                            </td>
                          </tr>
                        ))}

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
}

export default ViewService
