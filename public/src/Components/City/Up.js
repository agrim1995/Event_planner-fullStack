import React from "react";
import { Link } from "react-router-dom";

export default function Up() {
  return (
    <>
      <div className="content-body">
        <div className="container-fluid mt-3">
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
                        <Link to="/viewState">
                          <button className="btn btn-primary">
                            View State
                          </button>
                        </Link>
                      </div>
                      <table className="table table-xs mb-0">
                        <thead className=" d-flex justify-content-center">
                          <tr>
                            <th>Uttar Pradesh</th>
                          </tr>
                        </thead>
                        <tbody className=" d-flex justify-content-center">
                          <div>
                            <tr>
                              <td>
                                <span className="float-none">Prayagraj</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="float-left">Varanasi</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="float-left">Agra</span>
                              </td>
                            </tr>
                          </div>
                        </tbody>
                      </table>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="social-graph-wrapper widget-facebook">
                  <span className="s-icon">
                    <i className="fa fa-facebook"></i>
                  </span>
                </div>
                <div className="row">
                  <div className="col-6 border-right">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">89k</h4>
                      <p className="m-0">Friends</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">119k</h4>
                      <p className="m-0">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="social-graph-wrapper widget-linkedin">
                  <span className="s-icon">
                    <i className="fa fa-linkedin"></i>
                  </span>
                </div>
                <div className="row">
                  <div className="col-6 border-right">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">89k</h4>
                      <p className="m-0">Friends</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">119k</h4>
                      <p className="m-0">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="social-graph-wrapper widget-googleplus">
                  <span className="s-icon">
                    <i className="fa fa-google-plus"></i>
                  </span>
                </div>
                <div className="row">
                  <div className="col-6 border-right">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">89k</h4>
                      <p className="m-0">Friends</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">119k</h4>
                      <p className="m-0">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="social-graph-wrapper widget-twitter">
                  <span className="s-icon">
                    <i className="fa fa-twitter"></i>
                  </span>
                </div>
                <div className="row">
                  <div className="col-6 border-right">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">89k</h4>
                      <p className="m-0">Friends</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">119k</h4>
                      <p className="m-0">Followers</p>
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
}
