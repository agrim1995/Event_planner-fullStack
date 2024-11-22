import React from "react";
import Dashboard from "../Admin/Dashboard";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="nav-header fixed-top" style={{ "position": "fixed" }}>
        <div className="brand-logo">
          <Link to="index.html">
            <b className="logo-abbr">
              <img src="./assets/images/logo.png" alt="" />{" "}
            </b>
            <span className="logo-compact">
              <img src="./assets/images/logo-compact.png" alt="" />
            </span>
            <span>
              {/* <!-- <img src="./assets/images/logo-text.png" alt=""> --> */}
              <h3 className="text-white">Event Planner</h3>
            </span>
          </Link>
        </div>
      </div>

      <div className="header fixed-top" style={{ "position": "fixed" }}>
        <div className="header-content clearfix">
          <div className="nav-control">
            <div className="hamburger">
              <span className="toggle-icon">
                <i className="icon-menu"></i>
              </span>
            </div>
          </div>
          <div className="header-left">
            <div className="input-group icons">
              <div className="input-group-prepend">
                <span
                  className="input-group-text bg-transparent border-0 pr-2 pr-sm-3"
                  id="basic-addon1"
                >
                  <i className="mdi mdi-magnify"></i>
                </span>
              </div>
              <input
                type="search"
                className="form-control"
                placeholder="Search Dashboard"
                aria-label="Search Dashboard"
              />
              <div className="drop-down animated flipInX d-md-none">
                <form action="#">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="header-right">
            <ul className="clearfix">
              <li className="icons dropdown">
                <Link to="javascript:void(0)" data-toggle="dropdown">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="badge badge-pill gradient-1">1</span>
                </Link>
                <div className="drop-down animated fadeIn dropdown-menu">
                  <div className="dropdown-content-heading d-flex justify-content-between">
                    <span className="">1 New Messages</span>
                    <Link to="javascript:void()" className="d-inline-block">
                      <span className="badge badge-pill gradient-1">1</span>
                    </Link>
                  </div>
                  <div className="dropdown-content-body">
                    <ul>
                      <li className="notification-unread">
                        <Link to="javascript:void()">
                          <img
                            className="float-left mr-3 avatar-img"
                            src="./assets/images/avatar/1.jpg"
                            alt=""
                          />
                          <div className="notification-content">
                            <div className="notification-heading">Saiful Islam</div>
                            <div className="notification-timestamp">
                              08 Hours ago
                            </div>
                            <div className="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="icons dropdown">
                <Link to="javascript:void(0)" data-toggle="dropdown">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="badge badge-pill gradient-2">1</span>
                </Link>
                <div className="drop-down animated fadeIn dropdown-menu dropdown-notfication">
                  <div className="dropdown-content-heading d-flex justify-content-between">
                    <span className="">1 New Notifications</span>
                    <Link to="javascript:void()" className="d-inline-block">
                      <span className="badge badge-pill gradient-2">1</span>
                    </Link>
                  </div>
                  <div className="dropdown-content-body">
                    <ul>
                      <li>
                        <Link to="javascript:void()">
                          <span className="mr-3 avatar-icon bg-success-lighten-2">
                            <i className="icon-present"></i>
                          </span>
                          <div className="notification-content">
                            <h6 className="notification-heading">
                              Events near you
                            </h6>
                            <span className="notification-text">
                              Within next 5 days
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="icons dropdown d-none d-md-flex">
                <Link
                  to="javascript:void(0)"
                  className="log-user"
                  data-toggle="dropdown"
                >
                  <span>Settings</span>{" "}
                  <i className="fa fa-angle-down f-s-14" aria-hidden="true"></i>
                </Link>
                <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
                  <div className="dropdown-content-body">
                    <ul>
                      <li>
                        <Link to="javascript:void()">Setting</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="icons dropdown">
                <div
                  className="user-img c-pointer position-relative"
                  data-toggle="dropdown"
                >
                  <span className="activity active"></span>
                  <img
                    src="./assets/images/user/1.png"
                    height="40"
                    width="40"
                    alt=""
                  />
                </div>
                <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
                  <div className="dropdown-content-body">
                    <ul>
                      <li>
                        <Link to="app-profile.html">
                          <i className="icon-user"></i> <span>Profile</span>
                        </Link>
                      </li>

                      <hr className="my-2" />

                      <li>
                        <Link to="page-login.html">
                          <i className="icon-key"></i> <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </>
  );
};

export default Navbar;
