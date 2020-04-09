import React from "react";
import Profile from "../assets/photo.png";

function ContactCard(props) {
    return (
        <div className="contact-card">
            <div className="card contact-card-details">
                <h1 className="text-center contact-box">Contact Information</h1>
                <div className="card-content">
                    <a
                        href="tel:+9196054100"
                        className="ml-4 mt-4 font-weight-bold"
                    >
                        Phone
                    </a>
                    <a
                        href="mailto:webmaster@tripp.parham@gmail.com"
                        className="ml-4 mt-4 font-weight-bold"
                    >
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/trippparham/"
                        className="ml-4 mt-4 font-weight-bold"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/wilpar4813"
                        className="ml-4 mt-4 font-weight-bold"
                    >
                        GitHub
                    </a>
                    <div className="thankyou">
                        <img
                            src={Profile}
                            alt="profile"
                            className="contactprofile float-left"
                        ></img>
                        <p className="thankyoutext float-right">
                            <h2>Thank you for visiting my site</h2>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
