import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import './UniqueVideoPlayerComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import SourceDescription from './introductionsource';
import DestinationDescription from './Destinationintro'
// Import your components here
import TextComponent from './TextComponent';
import ConnectionManagerDestinationInstructions from './ConnectionManagerDestinationInstructions';
import WhatAreDatasetsComponent from './WhatAreDatasetsComponent';
import WhyDatasetGroupsComponent from './WhyDatasetGroups';
import ConnectionManagerInstructions from './ConnectionManagerInstructions';
import NewGroupComponent from './newgroupdataset';
import ModuleOverview from './ModuleOverview';
import ConnectionManagerOverview from './ConnectionManagerOverview';
import CreateConnectionInstructions from './CreateConnectionInstructions';
import DatasetGroupsComponent from './DatasetGroups';
import CardinalityComponent from './Cardinality';
import TheDatasetLandingPageComponent from './ERdiagrams';
import CreatingDatasetGroupComponent from './CreatingDatasetGroup';
import QandAComponent from './QandAComponent';
import DataAndMetadataComponent from './DatasetGroups';
import CreatingConnectionComponent from "./CreatingConnectionComponent";

// Import local icons
import bookIcon from './icons/book.png';
import questionIcon from './icons/message-question.png';
import resourcesIcon from './icons/resources.png';

const VideoPlayerComponent = () => {
  const [currentSection, setCurrentSection] = useState('component');
  const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
  const [videoData, setVideoData] = useState({
    title: 'Module Overview',
    description: 'This is the overview of the module. Here you will learn about the structure and contents of the course.',
    videoId: '',
  });
  const [currentComponent, setCurrentComponent] = useState(<ModuleOverview />);
  const [activeTab, setActiveTab] = useState('0');
  const [expandedSections, setExpandedSections] = useState([]);

  const courseContents = [
    {
      type: 'component',
      title: 'Module Overview',
      icon: bookIcon,
      component: <ModuleOverview />
    },
    {
      type: 'component',
      title: 'Introduction to Connection Manager',
      icon: bookIcon,
      component: <ConnectionManagerOverview />
    },
    {
      type: 'component',
      title: 'Sources',
      icon: bookIcon,
      component: null,
      subsections: [
        {
          type: 'component',
          title: 'Introduction',
          icon: bookIcon,
          component: <SourceDescription />
        },
        {
          type: 'component',
          title: 'How to create a Source?',
          icon: bookIcon,
          component: <ConnectionManagerInstructions />
        },
      ]
    },
    {
      type: 'component',
      title: 'Destination',
      icon: bookIcon,
      component: null,
      subsections: [
        {
          type: 'component',
          title: 'Introduction',
          icon: bookIcon,
          component: <DestinationDescription/>
        },
        {
          type: 'component',
          title: 'How to create a Destination?',
          icon: bookIcon,
          component: <ConnectionManagerDestinationInstructions />
        },
      ]
    },
    {
      type: 'component',
      title: 'Connections',
      icon: bookIcon,
      component: <CreateConnectionInstructions />
    },
    {
      type: 'component',
      title: 'How to create Connections',
      icon: bookIcon,
      component: <CreatingConnectionComponent />
    },
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

  const loadComponent = (title, component, tabId) => {
    setCurrentSection('component');
    setVideoData({ videoId: '', title, description: '' });
    setCurrentComponent(component);
    setActiveTab(tabId);
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
                <div
                  className={`unique-section-header ${activeTab === `${index}` ? 'active-tab' : ''}`}
                  onClick={() => {
                    if (!content.subsections) {
                      loadComponent(content.title, content.component, `${index}`);
                    } else {
                      toggleSection(index);
                    }
                  }}
                >
                  <img src={content.icon} alt="" className="content-icon" /> {content.title}
                  {content.subsections && (
                    <FontAwesomeIcon
                      icon={expandedSections.includes(index) ? faCaretDown : faCaretRight}
                      className="expand-icon"
                    />
                  )}
                </div>
                {content.subsections && expandedSections.includes(index) && (
                  <div className="unique-section-content">
                    {content.subsections.map((subcontent, subindex) => (
                      <div
                        key={`${index}-${subindex}`}
                        className={`unique-section-header ${
                          activeTab === `${index}-${subindex}` ? 'active-tab' : ''
                        }`}
                        onClick={() => loadComponent(subcontent.title, subcontent.component, `${index}-${subindex}`)}
                      >
                        <img src={subcontent.icon} alt="" className="content-icon" /> {subcontent.title}
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
          {currentSection === 'component' && <div className="content-section">{currentComponent}</div>}
          <div className="navigation-buttons">
            <button
              onClick={() => loadComponent('Previous Component', null, getPreviousComponentIndex(activeTab))}
              disabled={activeTab === '0'}
            >
              Previous
            </button>
            <button
              onClick={() => loadComponent('Next Component', null, getNextComponentIndex(activeTab))}
              disabled={activeTab === `${courseContents.length - 1}`}
            >
              Next
            </button>
          </div>
        </div>
        <div
          className="menu-toggle-btn"
          onClick={toggleCourseContent}
          style={{ left: isCourseContentVisible ? '255px' : '10px' }}
        >
          <FontAwesomeIcon icon={isCourseContentVisible ? faChevronLeft : faChevronRight} />
        </div>
      </div>
    </Layout>
  );
};

export default VideoPlayerComponent;
