import "../styles/About.css";
import IconNew from "../assets/webicons/newIcon.png";

const About = () => {
	return (
		<section id='about' className='about'>
			<div className='about-main-title'>
				<h2 className='about-title'>About Me</h2>
				<p className='about-p'>
					Here you will find more information about me, what I do, and my
					current skills mostly in terms of programming and technology
				</p>
			</div>
			<div className='new-icon-container'>
				<img
					style={{
						width: "220px",
						margin: " 10px auto",
						display: "block",
						border: "1px solid gray",
						borderRadius: "7px",
						padding: "10px",
					}}
					src={IconNew}
					alt=''
				/>
			</div>
			<div className='about-info'>
				<div className='about-personal'>
					<h3 className='personal-title'>Get to know me!</h3>
					<p className='personal-p'>
						I'm a Frontend Web Developer building the Front-end of Websites and
						Web Applications that leads to the success of the overall product.
						Check out some of my work in the Projects section. I also like
						sharing content related to the stuff that I have learned over the
						years in Web Development so it can help other people of the Dev
						Community. Feel free to Connect or Follow me on my Linkedin where I
						post useful content related to Web Development and Programming I'm
						open to Job opportunities where I can contribute, learn and grow. If
						you have a good opportunity that matches my skills and experience
						then don't hesitate to contact me.
					</p>
					<a href='#contact'>
						<button className='about-contact-btn'>Contact</button>
					</a>
				</div>
				<div className='about-skills'>
					<h3 className='skills-title'>My Skills</h3>
					<div class='skills'>
						<div class='skills__skill'>HTML</div>
						<div class='skills__skill'>CSS</div>
						<div class='skills__skill'>JavaScript</div>
						<div class='skills__skill'>React</div>
						<div class='skills__skill'>Redux Toolkit</div>
						<div class='skills__skill'>SASS</div>
						<div class='skills__skill'>GIT</div>
						<div class='skills__skill'>Github</div>
						<div class='skills__skill'>Responsive Design</div>
						<div class='skills__skill'>SEO</div>
						<div class='skills__skill'>Terminal</div>
						<div class='skills__skill'>Firebase</div>
						<div class='skills__skill'>MongoDB</div>
						<div class='skills__skill'>Committed And Hardworking</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
