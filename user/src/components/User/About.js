import React from 'react'

const About = () => {
  return (
    <div>
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
    </div>
  )
}

export default About