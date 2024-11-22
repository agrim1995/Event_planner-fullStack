import React from 'react'
import { Link } from 'react-router-dom'

export default function Addvendor() {
  return (
    <>
     <div className="login-form-bg h-100 m-4">
        <div className="container h-100">
            <div className="row justify-content-center h-100">
                <div className="col-xl-6">
                    <div className="form-input-content">
                        <div className="card login-form mb-0">
                            <div className="card-body pt-5">
                                <Link className="text-center" to="/addvendor"> <h4>Add Venders</h4></Link>
        
                                <form className="mt-5 mb-5 login-input">
                                    <div className="form-group">
                                        <input type="Venders Id" className="form-control" placeholder="Venders Id"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="Venders Name" className="form-control" placeholder="Venders Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="Venders Address" className="form-control" placeholder="Venders Address"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="Descreption" className="form-control" placeholder="description"/>
                                    </div>
                                    <button className="btn login-form__btn submit w-100">Add Venders</button>
                                </form>
                                <p className="mt-5 login-form__footer">Dont have account? <Link href="page-register.html" className="text-primary">Sign Up</Link> now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    </>
  )
}
