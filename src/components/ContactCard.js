import React from "react";
import Profile from "../assets/photo.png";

function ContactCard(props) {
    return (
        <div className="contact-card">
            <div className="card contact-card-details">
                <h1 className="text-center contact-box">Contact Information</h1>
                <div className="card-content">
                    <ul>
                        <li>
                            <h6>Phone:</h6>
                            <a
                                href="tel:+9196054100"
                                className="ml-4 mt-4 font-weight-bold firstInList"
                            >
                                919-605-4100
                            </a>
                        </li>
                        <li>
                            <h6>Email:</h6>
                            <a
                                href="mailto:webmaster@tripp.parham@gmail.com"
                                className="ml-4 mt-4 font-weight-bold"
                            >
                                tripp.parham@gmail.com
                            </a>
                        </li>
                        <li>
                            <h6>LinkedIn:</h6>
                            <a
                                href="https://www.linkedin.com/in/trippparham/"
                                className="ml-4 mt-4 font-weight-bold"
                            >
                                https://www.linkedin.com/in/trippparham/
                            </a>
                        </li>
                        <li>
                            <h6>GitHub:</h6>
                            <a
                                href="https://github.com/wilpar4813"
                                className="ml-4 mt-4 font-weight-bold"
                            >
                                https://github.com/wilpar4813
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="closer">
                    {/* <div className="thankyou">
                        <img
                            src={Profile}
                            alt="profile"
                            className="contactprofile"
                        ></img>
                    </div> */}
                    <div className="thankyoutext">
                        <p>
                            <h2>Thank you for visiting my site</h2>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
