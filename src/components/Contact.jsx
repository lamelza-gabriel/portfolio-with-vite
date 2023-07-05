import "../styles/Contact.css";

import { useState } from "react";

const Contact = () => {
	const initialForm = {
		name: "",
		email: "",
		textarea: "",
	};

	const [form, setform] = useState(initialForm);

	const handleChange = (e) => {
		setform({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleReset = () => {
		setform(initialForm);
	};

	const handleSubmit = (e) => {
		fetch("https://formsubmit.co/ajax/lamelzagabriel327@gmail.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				name: "FormSubmit",
				message: `nombre: ${form.nombre}, asunto: ${form.asunto} su correo es: ${form.email} y el mensaje es ${form.textarea}`,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	return (
		<section id='contact' className='contact'>
			<div className='contact-main-info'>
				<h2 className='contact-title'>Contact</h2>
				<p className='contact-p'>
					Feel free to Contact me by submitting the form below and I will get
					back to you as soon as possible
				</p>
			</div>

			<div className='form-container'>
				<form
					onSubmit={handleSubmit}
					id='form'
					action='https://formsubmit.co/lamelzagabriel327@gmail.com'
					method='POST'
				>
					<label htmlFor='nombre'>Name</label>
					<input
						placeholder='Enter your name'
						type='text'
						name='nombre'
						required
						id='nombre'
						value={form.nombre}
						onChange={handleChange}
					/>
					<label htmlFor='email'>Email</label>
					<input
						placeholder='Enter your email'
						type='email'
						required
						name='email'
						id='email'
						value={form.email}
						onChange={handleChange}
					/>

					<label htmlFor='textarea'>Message</label>

					<textarea
						name='textarea'
						placeholder='Enter your message'
						id='textarea'
						cols='30'
						rows='10'
						value={form.textarea}
						onChange={handleChange}
					></textarea>
					<input className='form-btn' type='submit' value='Submit' />
				</form>
			</div>
			<h3
				style={{
					width: "80%",
					maxWidth: "600px",
					margin: "40px auto",
					textAlign: "center",
					border: "1px solid black",
					padding: "10px 20px",
					borderRadius: "7px",
				}}
			>
				Below you will find links to my repositories and my linkedin profile as
				well as social networks
			</h3>
		</section>
	);
};

export default Contact;
