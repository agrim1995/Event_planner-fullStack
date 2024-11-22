import React from "react";
import { Link } from "react-router-dom";
// import Footer from "./Footer";


const Sidebar = () => {
  return (
    <>
      <div className="nk-sidebar">           
            <div className="nk-nav-scroll">
                <ul className="metismenu" id="menu">
                    <li className="nav-label">Manager</li>
                    <li>
                        <Link className="has-arrow" to="#" aria-expanded="false">
                            <span className="nav-text">Manage Venders</span>
                        </Link>
                        <ul aria-expanded="false">
                            <li><Link to='/addvendor'>add venders</Link></li>
                            <li><Link to='/viewvendor'>view venders</Link></li> 
                        </ul>
                    </li>
                    <li className="mega-menu mega-menu-sm">
                        <Link className="has-arrow" to="#" aria-expanded="false">
                            <span className="nav-text">Vender Services</span>
                        </Link>
                        <ul aria-expanded="false">
                            <li><Link to='/addservices'>add services</Link></li>
                            <li><Link to='/viewservices'>veiw services</Link></li>
                        </ul>
                    </li>
                    
                    <li>
                        <Link className="has-arrow" to="#" aria-expanded="false">
                         <span className="nav-text">Manage Enquiries</span>
                        </Link>
                        <ul aria-expanded="false">
                            <li><Link to='/addenquiry'>add Enquiry</Link></li>
                            <li><Link to='/viewenquiry'>veiw Enquiry</Link></li>
                            
                        </ul>
                    </li>
                    <li>
                        <Link className="has-arrow" to="#" aria-expanded="false">
                        <span className="nav-text">Manages Bookings</span>
                        </Link>
                        <ul aria-expanded="false">
                            <li><Link to='/addbookings'>Add Bookings</Link></li>
                            <li><Link to='/viewbookings'>View Bookings</Link></li>
                        </ul>
                    </li>
                    
                        </ul>
                    
                
            </div>
</div>
    </>
  );
};

export default Sidebar;
