import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authDetailReducer } from "../../reduxData/authSlice";
// import Footer from "./Footer";


const Sidebar = () => {

  const user = useSelector(state => state.authUserInfo.value)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logout = () => {

    dispatch(authDetailReducer({
      id: undefined,
      contact: undefined,
      email: undefined,
      name: undefined,
      token: undefined,
      role: undefined,
      roleid: undefined,
      islogin: false

    }))
    navigate("/Login")
    localStorage.removeItem("authInfo")

    console.log("User Info:", user); 
  }
  return (
    <>
      <div className="nk-sidebar scr " style={{ overflowY: "auto", "minHeight": "100vh" }}>
        <style>
          {`
            .nk-sidebar::-webkit-scrollbar {
              width: 0px;
            }
          `}
        </style>
        <div className="nk-nav-scroll">
          <ul className="metismenu" id="menu" style={{ margin: 0, padding: 0 }}>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            {user.islogin == true ? <>

              {user.role == "Admin" ? <><li>
                <li>
                  <Link to="/admin">Home</Link>
                </li>
                <Link
                  className="has-arrow"
                  to=""
                  aria-expanded="false"
                >
                  <span className="nav-text">Manager Details</span>
                </Link>
                <ul aria-expanded="false" className="m-2 bg-gray-600">
                  <li>
                    <Link to="/admin/manager">View Manager</Link>
                  </li>
                </ul>
              </li>
                <li className="mega-menu mega-menu-sm">
                  <Link
                    className="has-arrow"
                    to=""
                    aria-expanded="false"
                  >
                    <span className="nav-text">Event Master</span>
                  </Link>
                  <ul aria-expanded="false" className="m-2 bg-gray-600">
                    <li>
                      <Link to="/admin/viewEvent">View Events</Link>
                    </li>
                  </ul>
                </li>
                <li className="mega-menu mega-menu-sm">
                  <Link
                    className="has-arrow"
                    to=""
                    aria-expanded="false"
                  >
                    <span className="nav-text">Locations</span>
                  </Link>
                  <ul aria-expanded="false" className="m-2 bg-gray-600">
                    <li>
                      <Link to="/admin/viewLocation">View Locations</Link>
                    </li>
                  </ul>
                </li>

               

                <li className="mega-menu mega-menu-sm">
                  <Link
                    className="has-arrow"
                    to=""
                    aria-expanded="false"
                  >
                    <span className="nav-text">Services</span>
                  </Link>
                  <ul aria-expanded="false" className="m-2 bg-gray-600">
                    <li>
                      <Link to="/admin/viewService">View Services</Link>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu mega-menu-sm">
                  <Link
                    className="has-arrow"
                    to=""
                    aria-expanded="false"
                  >
                    <span className="nav-text">City & State</span>
                  </Link>
                  <ul aria-expanded="false" className="m-2 bg-gray-600">
                    <li>
                      <Link to="/admin/viewState">View States</Link>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu mega-menu-sm">
                  <Link
                    className="has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="nav-text">Reports</span>
                  </Link>
                  <ul aria-expanded="false" className="m-2 bg-gray-600">
                    <li>
                      <Link to="/admin/manager">View Reports</Link>
                    </li>
                  </ul>
                </li>

                <li className="mega-menu mega-menu-sm">
                  <Link
                    className="has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="nav-text">Enquiry</span>
                  </Link>
                  <ul aria-expanded="false" className="m-2 bg-gray-600">
                    <li>
                      <Link to="/">View Enquiry</Link>
                    </li>
                  </ul>
                </li> 

                </> : <></>}

              {user.role == "Manager" ? <>
                <li>
                  <Link to="/manager">Home</Link>
                </li><li className="nav-label">Manager</li>
                <li>
                  <Link className="has-arrow" to="#" aria-expanded="false">
                    <span className="nav-text">Manages Bookings</span>
                  </Link>
                  <ul aria-expanded="false">
                    <li><Link to='/manager/addbookings'>Add Bookings</Link></li>
                    <li><Link to='/manager/viewbookings'>View Bookings</Link></li>
                  </ul>
                </li>

                <li>
                  <Link className="has-arrow" to="#" aria-expanded="false">
                    <span className="nav-text">Manage Enquiries</span>
                  </Link>
                  <ul aria-expanded="false">
                    <li><Link to='/manager/addenquiry'>add Enquiry</Link></li>
                    <li><Link to='/manager/viewenquiry'>veiw Enquiry</Link></li>

                  </ul>
                </li>
                <li>
                  <Link className="has-arrow" to="#" aria-expanded="false">
                    <span className="nav-text">Manage Venders</span>
                  </Link>
                  <ul aria-expanded="false">
                    <li><Link to='/manager/addvendor'>add venders</Link></li>
                    <li><Link to='/manager/viewvendor'>view venders</Link></li>
                  </ul>
                </li>
                <li className="mega-menu mega-menu-sm">
                  <Link className="has-arrow" to="#" aria-expanded="false">
                    <span className="nav-text">Vender Services</span>
                  </Link>
                  <ul aria-expanded="false">
                    <li><Link to='/manager/addservices'>add services</Link></li>
                    <li><Link to='/manager/viewservices'>view services</Link></li>
                  </ul>
                </li>


              </> : <></>}
              {user.role == "Customer" ? <>
              
                {/* <li className="mega-menu mega-menu-sm">
                  <Link
                    className="has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="nav-text">Enquiry</span>
                  </Link>
                  <ul aria-expanded="false" className="m-2 bg-gray-600">
                    <li>
                      <Link to="/">View Enquiry</Link>
                    </li>
                  </ul>
                </li>   */}
              
              </> : <></>}

            </> : <></>}




            {/* manager */}
            <li>
              <Link to="/"><span style={{ "cursor": "pointer" }} onClick={Logout}>Logout</span></Link>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Sidebar;
