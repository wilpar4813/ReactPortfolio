import React from "react";
import Profile from "../assets/tripp.jpeg";

function AboutCard() {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <hr />

            <img
                src={Profile}
                alt="profile"
                className="profile float-left"
            ></img>
            <div>
                <div className="mt-3">
                    <p>
                        My name is Tripp Parham. I am from Raleigh, North
                        Carolina. I have recently certified in Full-Stack web
                        development at the University of North Carolina at
                        Chapel Hill. I am currently seeking to launch a bright
                        career as a Full Stack Web Developer.
                    </p>
                    <p>
                        Prior to learning to code, I hold a Bachelors of Science
                        in the Biological Sciences and an Associates Degree in
                        Network Security form ECPI University. I worked as a
                        hardware engineer for VCE, now Dell/EMC. There I
                        assembled EMC storage arrays with configurations based
                        on software development and testing needs. My duties
                        included rack and stack, equipment maintenace and
                        rotation, advanced troubleshooting, and repronding to
                        ticket request.
                    </p>

                    <p>
                        I am interested in learning about new opportunities and
                        can be reached through this portfolio,
                    </p>
                </div>

                <div className="card-body contactLinks">
                    <a
                        href="https://www.linkedin.com/in/trippparham"
                        className="card-link"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/wilpar4813"
                        className="card-link"
                    >
                        GitHub
                    </a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;
