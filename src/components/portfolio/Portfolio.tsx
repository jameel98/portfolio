import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Transportation.png";
import IMG2 from "../../assets/Tourism.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Transportation Project",
    github: "https://github.com/Sam-Eldin/Transportation",
    demo: "https://software-final-project-9c0fe.web.app/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Golan Tourism Project",
    github: "https://github.com/Rabmah/web-project",
    demo: "https://web-project-60a94.web.app/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
