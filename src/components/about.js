import React, { useState } from "react";
import "../scss/about.scss";
import Me from "./myPic";

function About() {
	const [bio, setBio] = useState(false);
	const [skill, setSkill] = useState(false);
    const [link, setLink] = useState(false);
    const changeBio = () => {
		if (window.scrollY >= 150) {
			setBio(true);
		} else {
			setBio(false);
		}
	};
    const changeSkill = () => {
		if (window.scrollY > 350) {
			setSkill(true);
		} else {
			setSkill(false);
		}
	};
     const changeLink = () => {
		if (window.scrollY > 450) {
			setLink(true);
		} else {
			setLink(false);
		}
	};

    window.addEventListener("scroll", changeSkill);
    window.addEventListener("scroll", changeBio);
    window.addEventListener("scroll", changeLink);

	return (
        
		<section className= "about">
            <span className="text">
			<div className={ bio ? "about__bio about__scroll" : "about__bio"}>
                <Me />
				<h2 className="text-secondary">BIO</h2>
				<p>  Tech enthusiast with a passion for developing innovative digital content focused on the user experience. Skilled leader with 15 years of experience and the proven ability to motivate, educate, and manage a team of professionals. Strategic thinker and adaptable creator to develop software that is customized to meet a company’s organizational needs, highlight their core values, and further their success. 
                </p>
                <br></br>
                <p>
                With skills in <strong>React</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>SASS</strong>, and <strong>MongoDB</strong>, among others. Confident problem-solving abilities to overcome glitches with creative solutions that are strategically designed to last long-term. Strong communication skills and the ability to acquire user feedback to determine modifications for optimal user experience.
				</p>
			</div>
            
        
        <div className={ skill ? "skills skills__scroll" : "skills"}>
            <div className="skills__set">
                <h3 className="text-secondary">1. Research</h3>
                <p>Become a subject matter expert after doing a thorough assessment of the clients needs. Determine methods to address the specific must haves of the customer.  </p>
            </div>
            <div className="skills__set">
                <h3 className="text-secondary">2. Design</h3>
                <p>Become a subject matter expert after doing a thorough assessment of the clients needs. Determine methods to address the specific must haves of the customer.  </p>
            </div>
            <div className="skills__set">
                <h3 className="text-secondary">3. Develop</h3>
                <p>Become a subject matter expert after doing a thorough assessment of the clients needs. Determine methods to address the specific must haves of the customer.  </p>
            </div>
            
            
        </div>
            <div className={ link ? "social-icons social-icons__scroll" : "social-icons"}>
                <a href="https://www.linkedin.com/in/tryon-experiences"> <i className="fab fa-linkedin fa-2x "></i></a>
                <a href="https://github.com/banutryon?tab=repositories"> <i className="fab fa-github fa-2x "></i></a>
                <a className="resume" href="/resume.pdf" target="_newtab" download>
					<img src="./icons/file.png" alt="resume" target="_newtab" download />
					<p>Click to download Resume</p>
				</a>
            </div>
				</span>
				{/* <a id="resume" href="/resume.pdf" target="_newtab" download>
					<img src="/Icons/file.png" alt="resume" target="_newtab" download />
					Click to download Resume
				</a> */}
			
		</section>
	);
}

export default About;
