import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { storeUserInfo } from '../../Services/Slice';
const Nav = () => {

	const user = useSelector((state) => state.userData.value);
	// console.log(user);
	const dispatch=useDispatch();
	const navigate = useNavigate();

	const Logout=()=>{
 
		dispatch(storeUserInfo({ name: undefined,
            contact: undefined,
            email: undefined,
            userRole: undefined,
            islogin:false}))
		navigate("/Login")
	 
 }
 
 




  return (
    <>
        <header className="top-header">
		<nav className="navbar header-nav navbar-expand-lg">
			<div className="container">
				<Link className="navbar-brand" to="index.html"><img src="assets/images/logo.png" alt="assets/image" height="80px"/></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd"
					aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
					<ul className="navbar-nav">
						<li><Link className="nav-link active" to="/#home" >Home</Link></li>
						<li><Link className="nav-link" to="/#about">About Us</Link></li>
						<li><Link className="nav-link" to="/#gallery">Gallery</Link></li>
						<li><Link className="nav-link" to="/#events">Events</Link></li>
						<li><Link className="nav-link" to="/#contact">Contact</Link></li>

						{user.islogin ? 
						<li><Link className="nav-link" onClick={Logout}>logout</Link></li>
						:
						<li><Link className="nav-link" to="/Login">Login</Link></li>
						}
						<li><Link className="nav-link" to="/Register">Register</Link></li>

					</ul>
				</div>
			</div>
		</nav>
	</header>
    </>
  )
}

export default Nav