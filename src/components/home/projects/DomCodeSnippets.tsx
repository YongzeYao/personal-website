import React from 'react';

import './DomCodeSnippets.scss';
import gif from './dom-code-snippets.gif';
import ProjectCard from './ProjectCard';

const title = 'Dom Code Snippets';
const description =
  'A Visual Studio Code extension to generate four frequently used vanilla JS DOM methods. It supports .js, .ts, .jsx, .tsx and .vue files. It already has more than 3,800 installments! Please do not hesitate to try this awesome extension!';
const url =
  'https://marketplace.visualstudio.com/items?itemName=yongzeyao.dom-code-snippets';

const DomCodeSnippets = () => {
  return (
    <div className="slide dom-code-snippets">
      <ProjectCard
        image={gif}
        title={title}
        description={description}
        url={url}
      />
    </div>
  );
};

export default DomCodeSnippets;
