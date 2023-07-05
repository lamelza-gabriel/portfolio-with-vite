import "../styles/Projects.css";

import Cafe1 from "../assets/projectsImgs/cafe1.gif";
import FakeStore from "../assets/projectsImgs/fakeStore.gif";
import Tasks from "../assets/projectsImgs/tasks.gif";
import TvMaze from "../assets/projectsImgs/tvMaze.gif";

const Projects = () => {
	return (
		<section id='projects' className='projects'>
			<div className='projects-main-info'>
				<h2 className='projects-title'>Projects</h2>
				<p style={{ marginBottom: "40px" }} className='projects-p'>
					Here you will find some of the personal and clients projects that I
					created with each project containing its own case study
				</p>
				<p className='projects-p'>
					In all the projects you can find a link to see them on the web, in
					addition to having all their codes in my Github profile
				</p>
			</div>
			<div className='projects-container'>
				<div className='project-img-container'>
					<img className='project-img' src={FakeStore} alt='project image' />
				</div>
				<div className='project-info-container'>
					<h2 className='project-info-title'>Web With FakeStore API</h2>
					<p className='project-info-p'>
						Web page of a store with the FakeStore API, it contains a shopping
						cart, several routes and its design is responsive.
					</p>
					<a href='/projects/1' target='_blank' style={{ cursor: "pointer" }}>
						<button style={{ cursor: "pointer" }} className='project-info-btn'>
							See Project
						</button>
					</a>
				</div>
			</div>

			<div className='projects-container'>
				<div className='project-img-container'>
					<img className='project-img' src={Cafe1} alt='project image' />
				</div>
				<div className='project-info-container'>
					<h2 className='project-info-title'>Cafe Web Page</h2>
					<p className='project-info-p'>
						Website of a cafe, contains several sections in addition to a
						filterable menu between food and drink and has a responsive design.
					</p>
					<a href='/projects/2' target='_blank' style={{ cursor: "pointer" }}>
						<button style={{ cursor: "pointer" }} className='project-info-btn'>
							See Project
						</button>
					</a>
				</div>
			</div>

			<div className='projects-container'>
				<div className='project-img-container'>
					<img className='project-img' src={TvMaze} alt='project image' />
				</div>
				<div className='project-info-container'>
					<h2 className='project-info-title'>Show Finder with TvMaze API</h2>
					<p className='project-info-p'>
						Series and movie search engine, with the TvMaze API, renders various
						results depending on what the client is looking for.
					</p>
					<a href='/projects/3' target='_blank' style={{ cursor: "pointer" }}>
						<button style={{ cursor: "pointer" }} className='project-info-btn'>
							See Project
						</button>
					</a>
				</div>
			</div>

			<div className='projects-container'>
				<div className='project-img-container'>
					<img className='project-img' src={Tasks} alt='project image' />
				</div>
				<div className='project-info-container'>
					<h2 className='project-info-title'>Task Manager</h2>
					<p className='project-info-p'>
						Full stack task manager made with Node.js and MongoDB, this project
						is uploaded on GitHub.
					</p>
					<a href='/projects/4' target='_blank' style={{ cursor: "pointer" }}>
						<button style={{ cursor: "pointer" }} className='project-info-btn'>
							See Project
						</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
