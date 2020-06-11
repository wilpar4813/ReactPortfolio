import React from "react";
import Profile from "../assets/photo.png";

function ContactCard(props) {
    return (
        <div className="contact-card">
            <h1 className="text-center contact-box">Contact Information</h1>

            <div className="card contactCard contact-card-details">
                
                <div className="card-content">
                    <ul>
                        <li>
                           <h1>Phone</h1>
                            <a
                                href="tel:+9196054100"
                                className="ml-4 mt-4 font-weight-bold firstInList"
                            >
                                <h2>919-605-4100</h2>
                            </a>
                        </li>
                        <li>
                        <h1>Email</h1>
                            <a
                                href="mailto:webmaster@tripp.parham@gmail.com"
                                className="ml-4 mt-4 font-weight-bold"
                            >
                                <h2>tripp.parham@gmail.com</h2>
                            </a>
                        </li>
                        <li>
                        <h1>LinkedIn</h1>
                            <a
                                href="https://bit.ly/3baM4M9​"
                                className="ml-4 mt-4 font-weight-bold"
                            >
                                <h2>https://bit.ly/3baM4M9​</h2>
                            </a>
                        </li>
                        <li>
                        <h1>GitHub</h1>
                            <a
                                href="https://github.com/wilpar4813"
                                className="ml-4 mt-4 font-weight-bold"
                            >
                                ​<h2>https://bit.ly/3cdMQcP</h2>
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
                            <h1>Thank you for visiting my site</h1>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
