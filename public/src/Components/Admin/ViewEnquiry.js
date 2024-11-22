// import React from 'react'

// export default function Viewenquiry() {
//   return (
//     <div>
//         <div className="content-body">
//             <div className="container-fluid row">
// 			 <div className="col-md-12">
//         <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h4 className="card-title">Enquiry Table</h4>
//                                 <div className="table-responsive">
//                                     <table className="table table-striped table-bordered zero-configuration">
//                                         <thead>
//                                             <tr>

//                                                 <th>Name</th>
//                                                 <th>Contact</th>
//                                                 <th> Alt_Contact</th>
//                                                 <th>Email</th>
//                                                 <th>Event Date</th>
//                                                 <th>Event type</th>
//                                                 <th>Operations</th>

//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr>

//                                                 <td>Ritu Verma</td>
//                                                 <td>7246832719</td>
//                                                 <td>8246832719</td>
//                                                 <td>ritu24@gamil.com</td>
//                                                 <td>24/4/2024</td>
//                                                 <td>wedding</td>
//                                                 <td>
//                                                     <button > <i className="fas fa-edit"></i></button>

//                                                     <button> <i className="fas fa-trash"></i></button>
//                                                     <button>Make Booking</button>

//                                                    </td>
//                                             </tr>

//                                         </tbody>

//                                         <tbody>
//                                             <tr>

//                                                 <td>Anjali choudhary</td>
//                                                 <td>7246832479</td>
//                                                 <td>7246832717</td>
//                                                 <td>anjali24@gamil.com</td>
//                                                 <td>24/6/2023</td>
//                                                 <td>Engagement</td>
//                                                 <td>
// 												 <button > <i className="fas fa-edit"></i></button>

//                                                  <button> <i className="fas fa-trash"></i></button>
//                                                  <button>Make Booking</button>

// 												</td>
//                                             </tr>

//                                         </tbody>

//                                         <tbody>
//                                             <tr>

//                                                 <td>Tanisha jain</td>
//                                                 <td>7246832719</td>
//                                                 <td>7246836781</td>
//                                                 <td>tanisha24@gamil.com</td>
//                                                 <td>23/12/2023</td>
//                                                 <td> Birthday</td>
//                                                 <td>
//                                                     <button > <i className="fas fa-edit"></i></button>

//                                                     <button> <i className="fas fa-trash"></i></button>
//                                                     <button>Make Booking</button>

//                                                    </td>
//                                             </tr>

//                                         </tbody>

//                                         <tbody>
//                                             <tr>

//                                                 <td>Bhavna Dhatrak</td>
//                                                 <td>7246832719</td>
//                                                 <td>7986832719</td>
//                                                 <td>bhavna24@gamil.com</td>
//                                                 <td>30/03/2023/</td>
//                                                 <td>Farewell</td>
//                                                 <td>
//                                                     <button > <i className="fas fa-edit"></i></button>

//                                                     <button> <i className="fas fa-trash"></i></button>
//                                                     <button>Make Booking</button>
//                                                    </td>
//                                             </tr>

//                                         </tbody>

//                                         <tbody>
//                                             <tr>

//                                                 <td>Rishika Chimaniya</td>
//                                                 <td>723562719</td>
//                                                 <td>724683456</td>
//                                                 <td>rishika24@gamil.com</td>
//                                                 <td>25/05/2022</td>
//                                                 <td>Retirement</td>
//                                                 <td>
//                                                     <button > <i className="fas fa-edit"></i></button>

//                                                     <button> <i className="fas fa-trash"></i></button>
//                                                     <button>Make Booking</button>
//                                                    </td>
//                                             </tr>

//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
// 			</div>
// 			</div>
// 		</div>
//     </div>
//   )
// }



import React, { useState, useEffect } from "react";
import AuthApiService, { urls } from "../../apiServices/AuthApiService";
import { useSelector } from "react-redux";

export default function ViewEnquiry() {
  const admin = useSelector((state) => state.authUserInfo.value);

  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await AuthApiService.GetApiCall(
          urls.ENQUIRY_LIST,
          admin.token
        );
        if (response.data.status) {
          setEnquiries(response.data.data);
        } else {
          console.error("Error retrieving enquiries:", response.data.message);
        }
      } catch (error) {
        console.error("Error retrieving enquiries:", error);
      }
    };
    fetchEnquiries();
  }, []);

  return (
    <div>
      {" "}
      <div className="content-body">
        <div className="container-fluid row">
          <div className="col-md-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Enquiry Table</h4>
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered zero-configuration table-responsive">
                          <thead>
                            <tr>
                              <th>S.no</th>

                             <th>Name</th>
                              <th>Contact</th>
                              <th>Alt Contact</th>
                              <th>Email</th>
                              <th>Event Date</th>
                              <th>Event Type</th>
                              <th>Message</th>
                              <th>Actions</th>
                            </tr>
                            
                          </thead>
                          <tbody>
                            {enquiries.map((enquiry, index) => {
                              return (
                                <tr key={enquiry.id}>
                                  <td>{index + 1}</td>

                                  <td>{enquiry.enq_name}</td>
                                  <td>{enquiry.enq_contact}</td>
                                  <td>{enquiry.alt_contact || "-"}</td>
                                  <td>{enquiry.email}</td>
                                  <td>
                                    {new Date(
                                      enquiry.event_date
                                    ).toLocaleDateString()}
                                  </td>
                                  <td>{enquiry.event.event_name}</td>
                                  <td>{enquiry.enq_msg}</td>
                                  <td>
                                    <button>
                                      <i className="fas fa-edit"></i>
                                    </button>
                                    <button>
                                      <i className="fas fa-trash"></i>
                                    </button>
                                    <button>Make Booking</button>
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
      </div>
    </div>
  );
}
