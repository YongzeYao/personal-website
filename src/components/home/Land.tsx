import React from 'react';
import { fullpageApi } from '@fullpage/react-fullpage';
import Typed from 'react-typed';

import './Land.scss';

interface LandInterface {
  fullpageApi: fullpageApi;
}

const Land: React.FC<LandInterface> = ({ fullpageApi }) => {
  return (
    <div className="section land">
      <div className="land__intro">
        <p>Hi, this is</p>
        <p className="land__intro--big">Yongze Yao</p>
        <Typed
          strings={['a gamer', 'a web developer', 'a software engineer']}
          typeSpeed={40}
          backSpeed={60}
          backDelay={700}
        />
      </div>
      <div
        className="mouse-scroll"
        onClick={() => fullpageApi.moveSectionDown()}
      >
        <span className="mouse">
          <span className="mouse-movement"></span>
        </span>
        <span className="mouse-message fadeIn">scroll</span>
      </div>
    </div>
  );
};

export default Land;
