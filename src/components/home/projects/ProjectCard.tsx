import React from 'react';
import Zoom from 'react-medium-image-zoom';

import './ProjectCard.scss';

interface ProjectCard {
  image: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCard> = ({
  image,
  title,
  description,
  url,
}) => {
  return (
    <a
      className="project-card"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <h3>{title}</h3>
      <Zoom>
        <img className="project-card__image" src={image} alt={title} />
      </Zoom>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;
