import React from 'react'
import { Link } from 'react-router-dom'

export default function Addenquiry() {
    return (
        <div>
            <div className="login-form-bg h-100 m-4">
                <div className="container h-100">
                    <div className="row justify-content-center h-100">
                        <div className="col-xl-6">
                            <div className="form-input-content">
                                <div className="card login-form mb-0">
                                    <div className="card-body pt-5">
                                        <Link className="text-center" to="/addenquiry"> <h4>Add enquiry</h4></Link>

                                        <form className="mt-5 mb-5 login-input">
                                            <div className="form-group">
                                                <input type="Name" className="form-control" placeholder="Enter Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="Contact No" className="form-control" placeholder="Enter no " />
                                            </div>
                                            <div className="form-group">
                                                <input type=" Alternate Contact No" className="form-control" placeholder="Enter alternate no " />
                                            </div>
                                            <div className="form-group">
                                                <input type="Email Id" className="form-control" placeholder="Enter Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="Event Date" className="form-control" placeholder="Enter event Date " />
                                            </div>
                                            <div className="form-group">

                                                <select className="custom-select d-block form-control" id="event" required
                                                    data-error="Please select an item in the list.">
                                                    <option disabled selected>Choose Event Type</option>
                                                    <option value="1">Engagement</option>
                                                    <option value="2">Wedding ceremony</option>
                                                    <option value="3">Birthday party</option>
                                                    <option value="4">Baby Shower</option>
                                                    <option value="5">Anniversary</option>
                                                    <option value="6">Retirement party</option>
                                                    <option value="7">Get-together party</option>
                                                    <option value="8">Pool party</option>
                                                    <option value="9">House party</option>
                                                    <option value="10">Holi party</option>
                                                    <option value="11">Haloween party</option>
                                                    <option value="12">Valentines party</option>
                                                    <option value="13">Freshers party</option>
                                                    <option value="13">Farewell party</option>
                                                    <option value="13">Others</option>
                                                </select>
                                                <div className="help-block with-errors"></div>
                                         
                                                   </div>
                                                   </form>
                                    </div>
                                </div>
                            </div>
                            <button className="btn login-form__btn submit w-100">Add Enquiry</button>
                        
                        <p className="mt-5 login-form__footer"> </p>
                    </div>
                </div>
            </div>
        </div>
    </div >
  )
}
