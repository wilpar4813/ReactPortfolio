import React from "react";
import Profile from "../assets/tripp.jpeg";
import { Link } from "react-router-dom";

function AboutCard() {
    return (
        <div className="about-container">
            <h1 className="title">About Me</h1>

            <img
                src={Profile}
                alt="profile"
                className="profile float-left"
            ></img>
            <div>
                <div className="mt-4 aboutText">
                    <p>First, thank you for visiting my webpage.    
                        As you might have guessed, my name is Tripp Parham. 
                        </p>

                    <p>
                        I am a Full Stack web developer with deep hands-on
                        experience in datacenter systems engineering and working
                        simultaneously with multiple software development teams.
                        As a datacenter internal support engineer at EMC, I
                        generated consistent praise for processing and closing
                        high ticket volumes with excellent customer satisfaction
                        in a fast-paced constantly changing environment.
                    </p>
                    <p>
                        Recently certified in Full Stack Web Development from
                        the University of North Carolina, I acquired additional skills in
                        JavaScript, Node, React, CSS, Bootstrap and responsive
                        web design. I am a creative resilient problem solver
                        with a lifelong interest in coding.
                    </p>
                    <p>
                        I applied aspects of UX and agile development in a
                        recent project where I worked on a four person team to
                        develop a multiple page MERN app that helps video gamers
                        track the latest game releases, get gaming news, and
                        look up information for specific games.{" "}
                    </p>
                    <p>
                        I am open minded to learning about new opportunities.
                        Looking forward to utilizing my unique perspective and
                        skillset in the future with a passionate quality-driven
                        team that works together to create a better customer
                        experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;
