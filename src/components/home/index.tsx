import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import * as eva from 'eva-icons';

import './index.scss';
import Land from './Land';
import Contact from './Contact';
import Projects from './projects';

const Home = () => {
  useEffect(() => {
    eva.replace({
      fill: 'white',
      width: 36,
      height: 36,
      animation: {
        type: 'shake',
        hover: true,
      },
    });
  });

  return (
    <div className="home">
      <div id="home__menu">
        <a
          href="https://www.linkedin.com/in/yongze-yao-95480b132/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i data-eva="linkedin-outline"></i>
        </a>
        <a
          href="https://github.com/YongzeYao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i data-eva="github-outline"></i>
        </a>
      </div>
      <ReactFullpage
        //fullpage options
        licenseKey={'EE6DE51F-AB3C4F53-8B0EF2CE-CD6E647D'}
        scrollingSpeed={1000} /* Options here */
        sectionsColor={['#00b7ff', '#8338ec', '#43aa8b']}
        navigation={true}
        slidesNavigation={true}
        controlArrows={false}
        scrollHorizontally={true}
        menu="#home__menu"
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Land fullpageApi={fullpageApi} />
              <Projects />
              <Contact />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default Home;
