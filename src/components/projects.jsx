import React from "react";
import CardComponent from "./card-component";
import Covid from "../assets/img/covid.jpg";
import AmazonLite from "../assets/img/amazonlite.jpg";
import Burger from "../assets/img/burger.jpg";
import { Fade } from "react-reveal";

const Projects = () => {
	return (
		<div
			style={{ background: "#0b0b0d", color: "white" }}
			className="main-div"
			id="project"
		>
			<Fade left cascade>
				<section className="div-1">
					<h1 className="heading">Featured Projects..</h1>
					<div>
						{ProjectData.map((data, ind) => {
							const { github, external, img, title, text, skills } = data;
							return (
								<CardComponent
									key={data + ind}
									github={github}
									external={external}
									img={img}
									title={title}
									text={text}
									skills={skills}
								/>
							);
						})}
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<a
							href="https://github.com/AniketPatel148"
							target="_blank"
							rel="noopener noreferrer"
							type="button"
							className="btn btn-outline-light"
							style={{ width: "fit-content" }}
						>
							More Projects
						</a>
					</div>
				</section>
			</Fade>
		</div>
	);
};

export default Projects;

const ProjectData = [
	{
		title: "Amazon Lite",
		img: AmazonLite,
		skills: "React.js, FireBase, React context API, Stripe",
		github: "https://github.com/AniketPatel148/E-commerce",
		text: "Designed and developed an ecommerce site where user can purchase different products and make payments along with the signin and signup functionality.",
		external: "https://clone-4c2d0.firebaseapp.com/",
	},
	{
		title: "Burger",
		img: Burger,
		skills: "CSS, React.js, Redux, Firebase",
		github: "https://github.com/AniketPatel148/Burger",
		text: "An app for user to design/build their own burger and order it",
		external: "https://burger-81ef7.web.app/",
	},
	{
		title: "Covid Tracker",
		img: Covid,
		skills: "React.js, Axios,node js",
		github: "https://github.com/AniketPatel148/covid-19-india-statewise",
		text: "A simple tracker developed to get daily updates on spreading of covid-19 virus in India",
		external: "",
	},
];
