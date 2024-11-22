import React from 'react'
import { Link } from "react-router-dom"

const Gallery = () => {
  return <>
     <div>
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
							<img className="img-fluid" src="./assets/images/gallery-05.jpg" alt="single image"/>
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
    </div>
  </>
}
export default Gallery