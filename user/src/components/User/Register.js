import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import WebService from '../../Services/WebService';
import WebAPI from '../../Services/WebAPI';

export const Register = () => {

	const email=useRef();
	const password=useRef();
	const name=useRef();
	const contact=useRef();
  
	const navigate= useNavigate();
  
	const RegisterUser=async(event)=>{
	  event.preventDefault();
	  const em=email.current.value;
	  const pass=password.current.value;
	  const nm=name.current.value;
	  const phone=contact.current.value;
	  const  obj={email:em,password:pass,name:nm,contact:phone};
  
	  const  responce
	   = await WebService.postAPI(WebAPI.RegisterAPI,obj);
	  console.log(" data is : ",responce);
	
	  if(responce.data.status)
		{
			alert(responce.data.message)
		  navigate("/Login")
		}
		else{
			alert(responce.data.message)
		}
	
	
	
	}  




  return (
    <div>
         <div id="contact" className="contact-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="title-box">
						<h2>Register</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-sm-12 col-xs-12">
					<div className="contact-block">
						<form id="contactForm">
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" className="form-control"
											placeholder="Your Name" required data-error="Please enter your name"  ref={name}/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
                                <div className="col-md-12">
									<div className="form-group">
										<input type="text" className="form-control"
											placeholder="Your contact number" required data-error="Please enter your contact"  ref={contact}/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" placeholder="Your Email"  className="form-control"
											name="name" required data-error="Please enter your email "  ref={email}/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="password" placeholder="password"  className="form-control"
											required data-error="Please enter your password"  ref={password}/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								
								<div className="col-md-12">
									<div className="submit-button text-center">
										<button className="btn btn-common" onClick={RegisterUser}>Send Message</button>
										<div id="msgSubmit" className="h3 text-center hidden"></div>
										<div className="clearfix"></div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
