import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'

const Event = () => {
  return (
    <div>
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
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="event-inner">
						<div className="event-img">
							<img className="img-fluid" src="./assets/images/event-img-01.jpg" alt="" />
						</div>
						<h2 style={{textAlign: "center"}}>Events</h2>
						<p>We'll provide best arrangements and facilities for your auspicious events</p>
						<AnchorLink href="#events">View Events </AnchorLink>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="event-inner">
						<div className="event-img">
							<img className="img-fluid" src="./assets/images/event-img-02.jpg" alt="" />
						</div>
						<h2 style={{textAlign: "center"}}>Parties</h2>
						<p>Make unforgettable memories and leave the party preparations on us</p>
						<Link href="http://127.0.0.1:5500/the-real-wedding/view_parties.html">View Parties </Link>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="event-inner">
						<div className="event-img">
							<img className="img-fluid" src="./assets/images/event-img-03.jpg" alt="" />
						</div>
						<h2 style={{textAlign: "center"}}>Shoots</h2>
						<p>Capture your beautiful memories with our best shoot options</p>
						<Link href="http://127.0.0.1:5500/the-real-wedding/view_shoots.html">View Shoots </Link>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Event