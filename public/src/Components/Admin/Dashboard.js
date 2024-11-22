import React from 'react'
import Navbar from '../Common/Navbar'
import Sidebar from '../Common/Sidebar'

const Dashboard = () => {
  return <>
    <div className="content-body content">

        <div className="container-fluid mt-3">
        


        <div className="d-sm-flex align-items-center justify-content-between mb-4">
    
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            className=" d-sm-inline-block btn btn-sm btn-info shadow-sm"
            download="Report.pdf">
           <i className="fa-solid fa-download"></i> Generate
            Report
          </a>
        </div>





      
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="card gradient-1">
                        <div className="card-body">
                            <h3 className="card-title text-white">Total Events</h3>
                            <div className="d-inline-block">
                                <h2 className="text-white">4565</h2>
                                <p className="text-white mb-0">Jan - March 2019</p>
                            </div>
                            <span className="float-right display-5 opacity-5"><i className="fa fa-shopping-cart"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card gradient-2">
                        <div className="card-body">
                            <h3 className="card-title text-white">Total Earnings</h3>
                            <div className="d-inline-block">
                                <h2 className="text-white"> $ 8541</h2>
                                <p className="text-white mb-0">Jan - March 2019</p>
                            </div>
                            <span className="float-right display-5 opacity-5"><i className="fa fa-money"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card gradient-3">
                        <div className="card-body">
                            <h3 className="card-title text-white">Total Manager</h3>
                            <div className="d-inline-block">
                                <h2 className="text-white">4565</h2>
                                <p className="text-white mb-0">Jan - March 2019</p>
                            </div>
                            <span className="float-right display-5 opacity-5"><i className="fa fa-users"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card gradient-4">
                        <div className="card-body">
                            <h3 className="card-title text-white">Panding Events</h3>
                            <div className="d-inline-block">
                                <h2 className="text-white">50</h2>
                                <p className="text-white mb-0">Jan - March 2019</p>
                            </div>
                            <span className="float-right display-5 opacity-5"><i className="fa fa-heart"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body pb-0 d-flex justify-content-between">
                                    <div>
                                        <h4 className="mb-1">Earning</h4>
                                        <p>Total Earnings of the Year</p>
                                        <h3 className="m-0">$ 1,25,550</h3>
                                    </div>
                                    <div>
                                        <ul>
                                            <li className="d-inline-block mr-3"><a className="text-dark" href="#">Day</a></li>
                                            <li className="d-inline-block mr-3"><a className="text-dark" href="#">Week</a></li>
                                            <li className="d-inline-block"><a className="text-dark" href="#">Month</a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="chart-wrapper">
                                    <canvas id="chart_widget_2"></canvas>
                                </div>



                                <table className="table table-xs mb-0"><br />       
                                <div>
                                    <span className="ml-5 mr-4">Jan</span>
                                    <span className="ml-5 mr-4" >Feb</span>
                                    <span className="ml-5 mr-4" >Mar</span>
                                    <span className="ml-5 mr-4" >Apr</span>
                                    <span className="ml-5 mr-4" >May</span>
                                    <span className="ml-5 mr-4" >Jun</span>
                                    <span className="ml-5 mr-4" >Jul</span>
                                    <span className="ml-5 mr-4" >Aug</span>
                                    <span className="ml-5 mr-4" >Sep</span>
                                    <span className="ml-5 mr-4" >Oct</span>
                                    <span className="ml-5 mr-4" >Nov</span>
                                    <span className="ml-5 mr-4" >Dec</span>
                                </div>
                                </table>
                                    

                                
                            </div>
                            <hr className="m-4" />
                        </div>
                    </div>
                </div>
            </div>

             */}

                {/* <div className="row bg-none ">

                    <div className="col-lg-6 col-md-6"  >
                        <div className="card" style={{padding: "20px;"}}>
                            <div className="card-body" >
                                <h4 className="card-title">Order Summary</h4>
                                <div id="morris-bar-chart"></div>
                            </div>
                        </div>                            
                    </div>

                
                    <div className="col-lg-6 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                        <h4 className="card-title mb-0">Store Location</h4>
                                    <div id="world-map" style={{height: "470px;"}}></div>
                                </div>        
                            </div>
                        </div>
                </div> */}
            
            <div className="row" >
                <div className="col-lg-3 col-sm-6 ">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <img src="./assets/images/users/8.jpg" className="rounded-circle" alt="" />
                                <h5 className="mt-3 mb-1">Ana Liem</h5>
                                <p className="m-0">Senior Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <img src="./assets/images/users/5.jpg" className="rounded-circle" alt="" />
                                <h5 className="mt-3 mb-1">John Abraham</h5>
                                <p className="m-0">Store Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <img src="./assets/images/users/7.jpg" className="rounded-circle" alt="" />
                                <h5 className="mt-3 mb-1">John Doe</h5>
                                <p className="m-0">Sales Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <img src="./assets/images/users/1.jpg" className="rounded-circle" alt="" />
                                <h5 className="mt-3 mb-1">Mehedi Titas</h5>
                                <p className="m-0">Online Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                


            </div>



            

            <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                        <a href="https://www.facebook.com/" target="_blank"> <div className="social-graph-wrapper widget-facebook">
                                <span className="s-icon"><i className="fa fa-facebook"></i></span>
                            </div></a>
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
                            <a href="https://www.linkedin.com/" target="_blank">
                            <div className="social-graph-wrapper widget-linkedin">
                                <span className="s-icon"><i className="fa fa-linkedin"></i></span>
                            </div>
                            </a>
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
                            <a href="https://www.google.com/" target="_blank">
                            <div className="social-graph-wrapper widget-googleplus">
                                <span className="s-icon"><i className="fa fa-google-plus"></i></span>
                            </div>
                            </a>
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
                            <a href="https://twitter.com/" target="_blank">
                            <div className="social-graph-wrapper widget-twitter">
                                <span className="s-icon"><i className="fa fa-twitter"></i></span>
                            </div>
                            </a>
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
}

export default Dashboard
