import React from "react";
import "../index.css";

function PortfolioCard(props) {
    return (
        <div className="card projectCard">
            <div className="img-container project-image">
                <img alt={props.name} src={props.image} />
            </div>

            <div className="content">
                <div className="gitButton">
                    <a
                        href={props.github}
                        className="fab fa-github-square"
                        title="Code Repository"
                    >
                       
                    </a>
                </div>

                <a
                    href={props.location}
                    className="btn btn-primary text-block"
                    data-toggle="popover"
                    title={props.description}
                    // data-content={props.description}
                >
                    {props.name}
                </a>
            </div>
        </div>
    );
}

export default PortfolioCard;
