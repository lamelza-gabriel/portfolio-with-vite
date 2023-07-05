import "../styles/Navbar.css";

import LogoIg from "../assets/icons/instagram-brands.svg";
import LogoLI from "../assets/icons/linkedin-in-brands.svg";
import LogoGithub from "../assets/icons/github-brands.svg";
import LogoMail from "../assets/icons/envelope-regular.svg";

const Intro = () => {
	return (
		<section id='home' className='background-container'>
			<div className='main-text-container'>
				<h2 className='main-title'>Hey, I'm Gabriel Lamelza</h2>
				<p className='main-p' style={{ display: "none" }}>
					Un desarrollador web enfocado en frontend que construye sitios web y
					aplicaciones web que conducen al éxito del producto en general.
				</p>
				<p className='main-p'>
					A Frontend focused Web Developer building the Frontend of Websites and
					Web Applications that leads to the success of the overall product
				</p>
				<a href='#projects' className='projects-link'>
					<button className='projects-btn'>Projects</button>
				</a>
			</div>
			<div class='arrows'></div>
			<div className='icons-container'>
				<a
					className='icon'
					href='https://github.com/lamelza-gabriel'
					target='_blank'
				>
					<img src={LogoGithub} alt='logo' />
				</a>
				<a
					className='icon'
					href='https://www.linkedin.com/in/gabriel-lamelza/'
					target='_blank'
				>
					<img src={LogoLI} alt='logo' />
				</a>
				<a
					className='icon'
					href='https://www.instagram.com/gabriel_lamelza/'
					target='_blank'
				>
					<img src={LogoIg} alt='logo' />
				</a>
				<a className='icon' href='#contact'>
					<img src={LogoMail} alt='logo' />
				</a>
			</div>
		</section>
	);
};

export default Intro;
