import React from 'react';

import './SortAnime.scss';
import ProjectCard from './ProjectCard';
import gif from './sort-anime.gif';

const title = 'Sort Anime';
const description =
  'A visualization of common sort algorithms made with Vue.js. This web-app supports customizing `sort algorithm`, `array size` and `animation interval`.';
const url = 'https://sort-anime.yongzeyao.now.sh/';

const SortAnime = () => {
  return (
    <div className="slide sort-anime">
      <ProjectCard
        image={gif}
        title={title}
        description={description}
        url={url}
      />
    </div>
  );
};

export default SortAnime;
