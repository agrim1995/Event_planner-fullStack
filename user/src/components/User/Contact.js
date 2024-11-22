import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import WebService from '../../Services/WebService';
import WebAPI from '../../Services/WebAPI';

const Contact = () => {

	




  return (
    <div>
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
											placeholder="Your Name" required data-error="Please enter your name"/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" placeholder="Your Email" id="email" className="form-control"
											name="name" required data-error="Please enter your email"/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="text" placeholder="Contact number" id="email" className="form-control"
											name="name" required data-error="Please enter your email"/>
										<div className="help-block with-errors"></div>
									</div>
								</div>
								<div className="col-md-12">
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
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<textarea className="form-control" id="message" placeholder="Add another events and Requirements" rows="8"
											data-error="Write your message" required></textarea>
										<div className="help-block with-errors"></div>
									</div>
									<div className="submit-button text-center">
										<button className="btn btn-common" id="submit" type="submit">Send Message</button>
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

export default Contact