import React from "react";
import { Fade } from "react-reveal";

const Quote = () => {
	return (
		<div className="quote-div">
			<div className="head mx-5">
				<div className="main-div">
					<Fade top cascade>
						<section className="div-1 quote">
							<p className="my-3">
								“ Curving back within myself I create again and again. ”
							</p>
							<span>
								- <em>The Bhagwad Gita</em>
							</span>
						</section>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default Quote;
