import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DinamicProject from "./components/DinamicProject/DinamicProject.jsx";

import FakeStore from "../src/assets/projectsImgs/fakeStore.gif";
import Cafe from "../src/assets/projectsImgs/cafe1.gif";
import TvMaze from "../src/assets/projectsImgs/tvMaze.gif";
import Tasks from "../src/assets/projectsImgs/tasks.gif";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<App />} />
				<Route
					path='/projects/1'
					element={
						<DinamicProject
							title='Fake Store'
							img={FakeStore}
							description='Web page of a store with the Fake Store API, it contains a shopping cart with different functionalities such as calculating the total, for example, it contains several routes with different product categories and its design is fully responsive, adapted to mobile phones, tablets and computers. different sizes.
							Its design is minimalist, based on basic colors that look good together, letting the products stand out.
							It was developed with SASS and React, as well as the Redux Toolkit and global state managers.'
							link='https://fakestore-6a2d4.web.app/'
						/>
					}
				/>
				<Route
					path='/projects/2'
					element={
						<DinamicProject
							title='Cafe Web Page'
							img={Cafe}
							description='Website of a cafe, it is a SPA (Single Page Application) that contains several sections in addition to a
							Filterable menu, so that the customer can see the menu of food and drinks. It also contains a responsive design that is perfectly adaptable to cell phones, tablets, and computers of different sizes.
							Its design is quite colorful, it also contains a gallery of images of the coffee products and a section that contains its location on Google maps as well as its opening and closing hours.
							'
							link='https://portafolio-personal-d7f69.web.app/#/cafe'
						/>
					}
				/>
				<Route
					path='/projects/3'
					element={
						<DinamicProject
							title='Web with TvMaze API'
							img={TvMaze}
							description='The series and movie search engine, with the TvMaze API, renders several
							results depending on what the client is looking for.
							It has default images in case the result does not have its own image, its design is fully responsive and very colorful.'
							link='https://portafolio-personal-d7f69.web.app/#/show-search'
						/>
					}
				/>
				<Route
					path='/projects/4'
					element={
						<DinamicProject
							title='Task Manager'
							img={Tasks}
							description='Full stack task manager made with Node.js and MongoDB, React and SASS, this project
							is uploaded to GitHub.
							Contains the functionality to register and log in, as well as receive requests to create, edit and delete tasks.'
							link='https://github.com/lamelza-gabriel/Task-Manager-React-Node'
						/>
					}
				/>
			</Routes>
		</Router>
	</React.StrictMode>
);
