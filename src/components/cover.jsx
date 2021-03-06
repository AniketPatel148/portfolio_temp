import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

const Cover = () => {
	return (
		<div className="bg-div" id="home">
			<div className="head mx-5">
				<div className="head-div mx-auto main-div">
					<Fade top cascade>
						<section className="div-1">
							<h1 className="my-1 head-div-first-text">Hi, my name is</h1>
							<h1 className="head-div-second-text">Aniket Patel</h1>
							<h1 className="head-div-third-text">I dream in reality.</h1>
							<p className="head-div-fourth-text">
								I'm a software developer and competitive coder based in India,
								with keen interest and skills in building beautiful and eye
								catching websites.
							</p>
						</section>
					</Fade>
				</div>
			</div>
			<Fade bottom>
				<span className="scroll-btn">
					<a href="#home">
						<span className="mouse">
							<span></span>
						</span>
					</a>
				</span>
			</Fade>
			<div className="social-media">
				<Fade left cascade>
					<ul className="social-media-list">
						{SocialData.map((data, ind) => {
							return (
								<li key={data + ind}>
									<a
										className="social-media-list-link"
										href={data.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon icon={data.icon} className="media-icons" />
									</a>
								</li>
							);
						})}
					</ul>
				</Fade>
			</div>
		</div>
	);
};

export default Cover;

const SocialData = [
	{
		link: "https://github.com/AniketPatel148",
		icon: faGithub,
	},
	{
		link: "https://www.linkedin.com/in/aniketrpatel",
		icon: faLinkedin,
	},
	{
		link: "https://www.twitter.com/aniketitrate",
		icon: faTwitter,
	},
	{
		link: "https://www.instagram.com/aniketitrate",
		icon: faInstagram,
	},
];
