import React from "react";
import ReactTooltip from "react-tooltip";
import "../index.css";

function PortfolioCard(props) {
    return (
        <>
        <ReactTooltip html effect="solid" wrapper="div" data-place="right" data-multiline />

        <div className="card projectCard" data-tip={props.datatip}>
            <div className="img-container project-image">
                <img alt={props.name} src={props.image} />
            </div>

            <div className="content">
                <div className="gitButton">
                    <a
                        href={props.github}
                        target="_blank"
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
                    data-content={props.description}
                    target="_blank"
                >
                    {props.name}
                </a>
            </div>
        </div>
        </>
    );
}

export default PortfolioCard;
