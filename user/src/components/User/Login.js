import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WebService from '../../Services/WebService';
import WebAPI from '../../Services/WebAPI';
import { storeUserInfo } from '../../Services/Slice';
import { Link } from 'react-router-dom';

export default function Login() {

  const  email=useRef();
  const  password=useRef();

  const  dispatch= useDispatch();
  const  navigate= useNavigate();

  const  LoginUser=async(event)=>{
    event.preventDefault();
    const  em=email.current.value;
    const  pass=password.current.value;
    const  obj={email:em,password:pass};

    const  responce = await WebService.postAPI(WebAPI.loginAPI,obj);
    console.log(" data is : ",responce);

    // if(responce.data.status)
    //   {
    //     console.log(" hello");
    //   }

    if(responce.data.status)
    {
      if(responce.data.data.userRole.rolename == "customer" ||responce.data.data.userRole.rolename == "Customer"  ){
     
    const d=  dispatch(storeUserInfo({
      name: responce.data.data.name,
      contact:  responce.data.data.phone,
      email:  responce.data.data.email,
      userRole: "costomer",
      islogin:true
      }))
      console.log("d,d",d)
      navigate("/Home");
  }
    }

  }




return (
    <div>
      <div className="contact-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="title-box">
                <h2>Login</h2>
                {/* <p>Contact for enquiry</p> */}
              </div>
            </div>
          </div>

          <div>
          <div className="row">
            <div className="col-lg-8 col-sm-8 col-xs-8">
              <div className="contact-block">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-8">
                    
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <input type="text" placeholder="Your Email" className="form-control"
                          name="name" required data-error="Please enter your email"  ref={email}/>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <input type="password" placeholder="password"  className="form-control"
                          required data-error="Please enter your password" ref={password}/>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      
                    </div>
                    <div className="col-md-8">
                      
                      <div className="submit-button text-center">
                        <button className="btn btn-common" id="submit" type="submit" onClick={LoginUser}>Login</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <span>if your not Register <Link to="/Register">Click Here</Link></span>
                </form>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}
