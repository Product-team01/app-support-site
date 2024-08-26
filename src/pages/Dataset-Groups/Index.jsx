import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import TextComponent from './TextComponent';
import WhatAreDatasetsComponent from './WhatAreDatasetsComponent';
import WhyDatasetGroupsComponent from './WhyDatasetGroups';
import NewGroupComponent from './newgroupdataset';
import DatasetGroupsComponent from './DatasetGroups';
import CardinalityComponent from './Cardinality';
import TheDatasetLandingPageComponent from './ERdiagrams';
import QandAComponent from './QandAComponent';
import './UniqueVideoPlayerComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

// Import local icons
import bookIcon from './icons/book.png';
import questionIcon from './icons/message-question.png';

const VideoPlayerComponent = () => {
  // Setting the initial states
  const [currentSection, setCurrentSection] = useState('component');  // Display component by default
  const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
  const [videoData, setVideoData] = useState({
    title: 'Module Overview',
    description: 'This is the overview of the module. Here you will learn about the structure and contents of the course.',
    videoId: '',
  });
  const [imageData, setImageData] = useState('');
  const [completedVideos, setCompletedVideos] = useState([false, false, false, false]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentStatusId, setCurrentStatusId] = useState('');
  const [currentComponent, setCurrentComponent] = useState(<DatasetGroupsComponent />);  // Load DatasetGroupsComponent on initial load
  const [activeTab, setActiveTab] = useState(0);  // Set active tab to the first item
  const [expandedSections, setExpandedSections] = useState([]);

  const courseContents = [
    {
      type: 'component',
      title: 'Module Overview',
      icon: bookIcon,
      component: <DatasetGroupsComponent />
    },
    {
      type: 'component',
      title: 'What are datasets',
      icon: bookIcon,
      component: <WhatAreDatasetsComponent />
    },
    {
      type: 'component',
      title: 'Why dataset groups',
      icon: bookIcon,
      component: <WhyDatasetGroupsComponent />
    },
    {
      type: 'component',
      title: 'ER diagram',
      icon: bookIcon,
      component: <TheDatasetLandingPageComponent/>
    },
    {
      type: 'component',
      title: 'Cardinality in data modeling',
      icon: bookIcon,
      component: <CardinalityComponent/>
    },
    {
      type: 'component',
      title: 'Creating a new Dataset Group',
      icon: bookIcon,
      component: <NewGroupComponent/>
    },
    // {
    //   type: 'component',
    //   title: 'Q & A ',
    //   icon: questionIcon,
    //   component: <QandAComponent />
    // },
  ];

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      window.player = new window.YT.Player('video-placeholder', {
        height: '500',
        width: '100%',
        videoId: '',
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };
  }, []);

  const loadComponent = (title, component, index) => {
    setCurrentSection('component');
    setVideoData({ videoId: '', title, description: '' });
    setCurrentStatusId('');
    setCurrentComponent(component);
    setCurrentVideoIndex(index);
    setActiveTab(index);
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const toggleSection = (index) => {
    setExpandedSections(prevExpandedSections =>
      prevExpandedSections.includes(index)
        ? prevExpandedSections.filter(i => i !== index)
        : [...prevExpandedSections, index]
    );
  };

  const toggleCourseContent = () => {
    setIsCourseContentVisible(!isCourseContentVisible);
  };

  return (
    <Layout>
      <div className={`unique-container ${isCourseContentVisible ? '' : 'collapsed'}`}>
        {isCourseContentVisible && (
          <div className="unique-course-content">
            <h2>Course Content</h2>
            {courseContents.map((content, index) => (
              <div key={index} className="unique-section">
                <div className={`unique-section-header ${activeTab === index ? 'active-tab' : ''}`} onClick={() => loadComponent(content.title, content.component, index)}>
                  <img src={content.icon} alt="" className="content-icon" /> {content.title}
                  {content.subsections && (
                    <FontAwesomeIcon icon={expandedSections.includes(index) ? faCaretDown : faCaretRight} className="expand-icon" />
                  )}
                </div>
                {content.subsections && expandedSections.includes(index) && (
                  <div className="unique-section-content">
                    {content.subsections.map((subcontent, subindex) => (
                      <div key={`${index}-${subindex}`} className="unique-subsection">
                        <div className={`unique-section-header ${activeTab === `${index}-${subindex}` ? 'active-tab' : ''}`} onClick={() => loadComponent(subcontent.title, subcontent.component, `${index}-${subindex}`)}>
                          <img src={subcontent.icon} alt="" className="content-icon" /> {subcontent.title}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <div className={`unique-video-section ${isCourseContentVisible ? '' : 'full-width'}`}>
          <h1 className="unique-video-title"></h1>
          {currentSection === 'component' && (
            <div className="content-section">
              {currentComponent}
            </div>
          )}
          <div className="navigation-buttons">
            <button onClick={() => loadComponent('Previous Component', null, currentVideoIndex - 1)} disabled={currentVideoIndex === 0}>
              Previous
            </button>
            <button onClick={() => loadComponent('Next Component', null, currentVideoIndex + 1)} disabled={currentVideoIndex === courseContents.length - 1}>
              Next
            </button>
          </div>
        </div>
        <div
          className="menu-toggle-btn"
          onClick={toggleCourseContent}
          style={{ left: isCourseContentVisible ? '255px' : '10px' }} // Adjust left value based on course content visibility
        >
          <FontAwesomeIcon icon={isCourseContentVisible ? faChevronLeft : faChevronRight} />
        </div>
      </div>
    </Layout>
  );
};

export default VideoPlayerComponent;
