import React from "react";
import Profile from "../assets/tripp.jpeg";

function AboutCard() {
    return (
        <div className="about-container">
            <h1 className="title">About Me</h1>
            <hr />

            <img
                src={Profile}
                alt="profile"
                className="profile float-left"
            ></img>
            <div>
                <div className="mt-3 aboutText">
                    <p>
                        First, thank you for visiting my webpage. I am from
                        Raleigh, North Carolina. I have recently certified in
                        Full-Stack web development at the University of North
                        Carolina in Chapel Hill. I am currently seeking to
                        launch a bright career as a Full Stack Web Developer.
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
            </div>
        </div>
    );
}

export default AboutCard;
