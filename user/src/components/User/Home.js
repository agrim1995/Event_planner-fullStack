import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import WebService from '../../Services/WebService';
import WebAPI from '../../Services/WebAPI';
import Contact from './Contact';
import { storeUserInfo } from '../../Services/Slice';
import { useSelector } from 'react-redux';


const Home = () => {
	const user = useSelector((state) => state.userData.value);

	// console.log("user : " ,user);

	const [eventList,setEventList] = useState([]);
	const email=useRef();
	const yname=useRef();
	const Nevent=useRef();
	const message=useRef();
	const Contact=useRef();
	const date=useRef();
	const navigate= useNavigate();


    useEffect(()=>{
        loadEventList()
    },[])

    const loadEventList = async ()=>{
     // console.log("User List : "+data.token)
      const response = await WebService.getAPIUsing(WebAPI.EventList);
         console.log("List Response is: ",response);
         console.log("List Response is string: "+JSON.stringify(response));
        setEventList(response.data.data)
		// console.log("eventlist :", eventList);

    }



  
	const EnquiryUser=async(e)=>{
	e.preventDefault();
	  const eml=email.current.value;
	  const name=yname.current.value;
	  const event=Nevent.current.value;
	  const cont=Contact.current.value;
	  const msg=message.current.value;
	  const dt= date.current.value;

	  const obj={email:eml,enq_name:name,enq_event_id:event,enq_contact:cont,alt_contact:null,event_date:dt,};
  if(user.islogin){
	  const responc = await WebService.postAPI(WebAPI.Enquiry,obj);
	  console.log(" data is : ",responc);
	  if(responc.data.status){
		alert(responc.data.message)
	  }
	//   console.log(" data is : ",JSON.stringify(responc));
}
else{
	alert("please Login");
	navigate("/Login")
}
}
	 


  return (
    <div>
        <div id='home' className="ulockd-home-slider">
		<div className="container-fluid">
			<div className="row">
				<div className="pogoSlider" id="js-main-slider">
					<div className="pogoSlider-slide" data-transition="zipReveal" data-duration="1500"
						style={{backgroundImage:"url(./assets/images/slider-01.jpg)"}}>
						<div className="lbox-caption">
							<div className="lbox-details">
								<h1>We Make your Dreams come true</h1>

							</div>
						</div>
					</div>
					<div className="pogoSlider-slide" data-transition="blocksReveal" data-duration="1500"
						style={{backgroundImage:"url(assets/images/slider-02.jpg)"}}>
						<div className="lbox-caption">
							<div className="lbox-details">
								<h1>We Make your Dreams come true</h1>
							</div>
						</div>
					</div>
					<div className="pogoSlider-slide" data-transition="shrinkReveal" data-duration="2000"
						style={{backgroundImage:"url(assets/images/slider-03.jpg)"}}>
						<div className="lbox-caption">
							<div className="lbox-details">
								<h1>We Make your Dreams come true</h1>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		</div>
		
		{/* About */}

		<div id="about" className="about-box">
		<div className="about-a1">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-box">
							<h2>Dreamy <span>Events</span></h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="row align-items-center about-main-info">
							<div className="col-lg-8 col-md-6 col-sm-12">

								<p style={{fontStyle:" italic"}}>Welcome to Dreamy Events, where we specialize in crafting unforgettable events. Our personalized approach, innovative technology, and commitment to excellence ensure that every detail is meticulously planned and flawlessly executed. Trust us to make your event extraordinary.


								</p>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="about-img">
									<img className="img-fluid rounded" src="./assets/images/about-img-01.jpg" alt="" />
								</div>
							</div>
						</div>
						<div className="row align-items-center about-main-info">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="about-img">
									<img className="img-fluid rounded" src="./assets/images/about-img-02.jpg" alt="" />
								</div>
							</div>
							<div className="col-lg-8 col-md-6 col-sm-12">

								<p style={{fontStyle:" italic"}}>Customer satisfaction is at the heart of everything we do. We pride ourselves on our commitment to excellence, reliability, and professionalism, earning the trust of clients from all walks of life. Whether you're hosting a small intimate gathering or a grand-scale affair, you can count on Dreamy Events to make your event an extraordinary success.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	{/* Gallery */}

	<div id="gallery" className="gallery-box">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div className="title-box">
						<h2>Gallery</h2>
						
					</div>
				</div>
			</div>
			<div className="row">
				<ul className="popup-gallery clearfix">
					<li>
						<Link to="">
							<img className="img-fluid" src="./assets/images/gallery-01.jpg" alt="single image" />
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</Link>
					</li>
					<li>
						<Link to="">
							<img className="img-fluid" src="./assets/images/gallery-02.jpg" alt="single image"/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</Link>
					</li>
					<li>
						<Link to="">
							<img className="img-fluid" src="./assets/images/gallery-03.jpg" alt="single image"/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</Link>
					</li>
					<li>
						<Link to="">
							<img className="img-fluid" src="./assets/images/gallery-04.jpg" alt="single image"/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</Link>
					</li>
					<li>
						<Link to="">
							<img className="img-fluid" src="./assets/images/event-img-01.jpg" alt="single image"/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</Link>
					</li>
					<li>
						<Link to="">
							<img className="img-fluid" src="./assets/images/gallery-06.jpg" alt="single image"/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</Link>
					</li>
					<li>
						<Link to="">
							<img className="img-fluid" src="./assets/images/gallery-07.jpg" alt="single image"/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</Link>
					</li>
					<li>
						<Link to="">
							<img className="img-fluid" src="./assets/images/gallery-08.jpg" alt="single image"/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</div>

	{/* Event */}

	<div id="events" className="events-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="title-box">
						<h2>Events</h2>
						<p>Events are not just about what happens, but how they make you feel. Let us create moments that linger in your memory long after the last guest has gone </p>
					</div>
				</div>
			</div>
			<div className="row">
			{eventList.map((data)=>{
				return<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="event-inner">
						<div className="event-img">
							<img className="img-fluid" src="./assets/images/gallery-05.jpg" alt="" />
						</div>
						<h2 style={{textAlign: "center"}}>{data.event_name}</h2>
						<p>We'll provide best arrangements and facilities for your auspicious events</p>
						{/* <AnchorLink href="#events">View Events </AnchorLink> */}
					</div>
				</div>})}
			</div>
		</div>
	</div>

	{/* Contact */}

	<div id="contact" className="contact-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="title-box">
						<h2>Contact with us</h2>
						<p>Contact for enquiry</p>
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
										<input type="text" className="form-control" id="name" name="name"
											placeholder="Your Name" required data-error="Please enter your name" ref={yname}/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" placeholder="Your Email" id="email" className="form-control"
											name="name" required data-error="Please enter your email" ref={email}/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" placeholder="Contact number" id="email" className="form-control"
											name="name" required data-error="Please enter your email" ref={Contact}/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<select className="custom-select d-block form-control" id="event" required
											data-error="Please select an item in the list." ref={Nevent}>
											<option disabled selected>Choose Event Type</option>
											{eventList.map((data)=>{
												return<option value={data.id}>{data.event_name}</option>
											})}
										</select>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="date" className="form-control" 
											placeholder="Event Date" required data-error="Please enterEvent Date" ref={date}/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<textarea className="form-control" id="message" placeholder="Add another events and Requirements" rows="8"
											data-error="Write your message" required ref={message}></textarea>
										<div className="help-block with-errors"></div>
									</div>
									<div className="submit-button text-center">
										<button className="btn btn-common" id="submit" type="submit" onClick={EnquiryUser}>Send Message</button>
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

export default Home