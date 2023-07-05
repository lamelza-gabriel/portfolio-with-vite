import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/DinamicProject/DinamicProject.css";
import "../../styles/Navbar.css";
import "../../styles/Footer.css";

const DinamicProject = ({ title, img, description, link }) => {
	return (
		<>
			<div className='navbar-test-container'>
				<Navbar />
			</div>
			<div className='dinamic-main-container'>
				<div className='dinamic-text-container'>
					<h2 className='dinamic-title'>{title}</h2>
					<p className='dinamic-p'>
						This page contains the case study of {title} Website which includes
						the Project Overview and Live Links to the official product.
					</p>
					<a href='https://fakestore-6a2d4.web.app/' target='_blank'>
						<button className='dinamic-link-btn'>Live Link</button>
					</a>
				</div>
			</div>
			<div className='dinamic-overview-container'>
				<h2 className='dinamic-overview-title'>{title} Overview</h2>
				<div className='dinamic-img-container'>
					<img className='project-image' src={img} alt='project image' />
				</div>
				<div className='dinamic-overview-text-container'>
					<h2 className='overview-title'>Project Overview</h2>
					<p className='overview-p'>{description}</p>
					<p className='overview-p'>
						Feel free to check out the Project by visiting the Live Link.
					</p>
				</div>
				<div className='dinamic-btns-container'>
					<a className='dinamic-link' target='_blank' href={link}>
						<button className='dinamic-live-link'>Live Link</button>
					</a>
					<a className='dinamic-link' href='/'>
						<button className='dinamic-go-back'>Go Back</button>
					</a>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default DinamicProject;
