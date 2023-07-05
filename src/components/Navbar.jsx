import "../styles/Navbar.css";

import { useState } from "react";

import logo3 from "../assets/webicons/3.png";

const Navbar = () => {
	const [menu, setMenu] = useState(true);

	const close = () => {
		setMenu(true);
	};

	return (
		<>
			<nav className='pc-navbar'>
				<div className='navbar-container profile-container '>
					<img className='profile-img' src={logo3} alt='me' />
					<p>Gabriel Lamelza</p>
				</div>
				<div className='navbar-container navigation-container'>
					<a href='/#home' className='navbar-link'>
						Home
					</a>
					<a href='/#about' className='navbar-link'>
						About
					</a>
					<a href='/#projects' className='navbar-link'>
						Projects
					</a>
					<a href='/#contact' className='navbar-link'>
						Contact
					</a>
				</div>
			</nav>
			<nav className='mobile-navbar'>
				<div className='navbar-container profile-container '>
					<img className='profile-img' src={logo3} alt='me' />
					<p>Gabriel Lamelza</p>
				</div>
				<div className='menu-burguer-container'>
					<div onClick={() => setMenu(!menu)} className='xmark-container'>
						{menu ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='1em'
								viewBox='0 0 448 512'
								style={{ fill: "white" }}
							>
								<path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='1em'
								viewBox='0 0 384 512'
								style={{ fill: "white" }}
							>
								<path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
							</svg>
						)}
					</div>

					{menu ? (
						<></>
					) : (
						<div className='navbar-container navigation-container-mobile'>
							<a
								onClick={() => close()}
								href='/#home'
								className='navbar-link-mobile'
							>
								Home
							</a>
							<a
								onClick={() => close()}
								href='/#about'
								className='navbar-link-mobile'
							>
								About
							</a>
							<a
								onClick={() => close()}
								href='/#projects'
								className='navbar-link-mobile'
							>
								Projects
							</a>
							<a
								onClick={() => close()}
								href='/#contact'
								className='navbar-link-mobile'
							>
								Contact
							</a>
						</div>
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
