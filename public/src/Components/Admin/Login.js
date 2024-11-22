// import React from 'react'
// import { Link } from 'react-router-dom';

// const Login = () => {
//     return <>
//         <div class="login-form-bg m-4" >
//             <div class="container">
//                 <div class="row justify-content-center" style={{ height: "550px;" }}>
//                     <div class="col-xl-">
//                         <div class="form-input-content">
//                             <div class="card login-form mb-0 ml-5" style={{ width: "450px" }}>
//                                 <div class="card-body pt-5"  >

//                                     <a class="text-center" href="index.html"> <h4>Login</h4></a>


//                                     <form class="mt-5 mb-5 login-input">

//                                         <div class="form-group">
//                                             <input type="text" class="form-control" placeholder="Enter UserName/ Emial" required />
//                                         </div>


//                                         <div class="form-group">
//                                             <input type="password" class="form-control" placeholder="Enter Password" required />
//                                         </div>


//                                         <button class="btn login-form__btn submit w-100">Login</button>
//                                         <button class="btn btn-danger w-100 mt-3 rounded-pill">Login with google</button>

//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </>
// }

// export default Login;



import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authDetailReducer } from '../../reduxData/authSlice';
import AuthApiService, { urls } from '../../apiServices/AuthApiService';
// import AuthApiService, { urls } from '../../apiServices/AuthApiService';


const Login = () => {
    const emailRef = useRef(); // Changed from var to const and updated variable name
    const passwordRef = useRef(); // Changed from var to const and updated variable name
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => { // Defined handleSubmit function
        event.preventDefault();
        const em = emailRef.current.value; // Changed from var to const and updated variable name
        const pass = passwordRef.current.value; // Changed from var to const and updated variable name
        const obj = { email: em, 
                     password: pass };

        try {
            const response = await AuthApiService.PostApiCall(urls.LOGIN,obj);
            console.log("Data is: ", response);
            //console.log("Full response data:", response.data);           //no need to write this line

            if (response.data.status) {
                if (response.data.data.userRole.rolename === "Admin") {
                    const d = dispatch(authDetailReducer({
                        id: response.data.data.id,
                        contact: response.data.data.contact,
                        email: response.data.data.email, 
                        name: response.data.data.name,
                        token: response.data.data.token,
                        role: response.data.data.userRole.rolename,
                        // roleid: response.data.userRole.roleid,
                        islogin: true
                    }))
                    console.log(d)
                    navigate("/admin");


                } else if (response.data.userRole.rolename === "Customer") {
                    const d = dispatch(authDetailReducer({
                        id: response.data.data.id,
                        contact: response.data.data.contact,
                        email: response.data.data.email, 
                        name: response.data.data.name,
                        token: response.data.data.token,
                        role: response.data.data.userRole.rolename,
                        // roleid: response.data.userRole.id,
                        islogin: true
                    }))
                    console.log(d)
                    navigate("/customer");


                } else if (response.data.userRole.rolename === "Manager") {
                    const d = dispatch(authDetailReducer({
                        id: response.data.data.id,
                        contact: response.data.data.contact,
                        email: response.data.data.email, 
                        name: response.data.data.name,
                        token: response.data.data.token,
                        role: response.data.data.userRole.rolename,
                        // roleid: response.data.userRole.id,
                        islogin: true
                    }))
                    console.log(d)
                    navigate("/Manager");


                }

            } else {
                // Handle invalid login scenario
                console.log("Invalid Login")
            }
        } catch (error) {

            console.error("Error:", error);
        }
    };

    return (
        <div className="login-form-bg m-4">
            <div className="container">
                <div className="row justify-content-center" style={{ height: "550px" }}>
                    <div className="col-xl">
                        <div className="form-input-content" style={{ flexDirection: "row" }}>
                            <div className="card login-form mb-0 ml-5" style={{ width: "450px" }}>
                                <div className="card-body pt-5">
                                    <a className="text-center" href="index.html">
                                        <h3>Dreamy Events Management</h3>
                                        <h4>Login to continue</h4></a>
                                    <form className="mt-5 mb-5 login-input" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" ref={emailRef} placeholder="Enter UserName/Email" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" ref={passwordRef} placeholder="Enter Password" required />
                                        </div>
                                        <button type="submit" className="btn login-form__btn submit w-100" onSubmit={handleSubmit}>Login</button>
                                        {/* <button className="btn btn-danger w-100 mt-3 rounded-pill">Login with Google</button> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
