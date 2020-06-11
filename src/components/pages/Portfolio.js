import React from "react";
import PortfolioCard from "../PortfolioCard";
import projects from "../projects.json";
import "../../index.css";

function Portfolio() {
    return (
        <div>
            <div className="container portfolio-container">
                <h1 className="title">Recent Projects</h1>
               

                {projects.map((item) => (
                    <PortfolioCard
                        name={item.name}
                        image={item.image}
                        project={item.project}
                        location={item.location}
                        description={item.description}
                        github={item.github}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
