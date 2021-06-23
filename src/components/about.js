import React, { useState } from "react";
import "../scss/about.scss";
import Me from "./myPic";
function About() {
	// const [icon, setIcon] = useState(false);
	return (
		<section className="about">
			<span className="text">
			<Me />
			<div className="about__bio">
				<h2 className="text-secondary">BIO</h2>
				<p><strong>Softwear Engineer</strong> with skills in <strong>React</strong> and <strong>JavaScript</strong> and 15 years experience in the consumer electronics and mobile phone industry with a focus on the user experience. Strong foundation in front-end software development and JavaScript fundamentals. Passion to provide the best experience through technology strengthens my ability to learn and master new ways to build rich end-to-end user experiences. 
				</p>
			</div>
            
        
        <div className="jobs">
            <div className="jobs__job">
                <h2 className="text-secondary">2019-2020</h2>
                <h3>Garten</h3>
                <h6>Account Manager</h6>
                <p>Performed bug hunts on the user experience side of our custom app for client inventory management. </p>
                <p>Set up bug fix tickets focused on MVP features.</p>
            </div>
            <div className="jobs__job">
                <h2 className="text-secondary">2012-2019</h2>
                <h3>Bose Corp</h3>
                <h6>Product Manager(Territory account manager)</h6>
                <p>Tested Bose products and app support before release and collaborated with the tech team about any  issues. </p>
                <p>Experience in making big decisions and creating innovations that impacted hundreds of thousands of customers.</p>
                <p>Influence decision makers resulting in an average yearly quota of 35 million (covering 5 states and 350+ storefronts)</p>
                <p>Built a culture of accountability, became one of the top-ranked territories in the nation for 5 years straight. </p>
            </div>
            <div className="jobs__job">
                <h2 className="text-secondary">2006-2012</h2>
                <h3>BestBuy</h3>
                <h6>Mobile Manager Manager</h6>
                <p>Lead a team in becoming one of the best performing teams in BestBuy Mobile history (helped launch BBM). Growing the business by 150% to 300% Y.O.Y for 5 years. </p>
                <p>Connected with local realtors and set up training classes on smartphone/app integration in the real estate market (2006-2010). </p>
                
            </div>
        </div>
            <div className="social-icons">
                <a href="#!"> <i className="fab fa-linkedin fa-2x"></i></a>
                <a href="#!"> <i className="fab fa-github fa-2x"></i></a>
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
