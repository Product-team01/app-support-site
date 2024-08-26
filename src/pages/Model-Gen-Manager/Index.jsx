import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './UniqueVideoPlayerComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

// Import your components here
import WorkflowBuilderOverview from './WorkflowBuilderOverview';
import WorkflowBuilderDetails from './WorkflowBuilderDetails';
import NewGroupComponent from './WorkflowBuilderUI';
import QandAComponent from './QandAComponent';
import TransformNodeDetails from './TransformNodeDetails';
import NodeTypesPage from './NodeTypesPage';
import CodeServerGuide from './CodeServerGuide';
import CodeNodeDeploymentGuide from './CodeNodeDeploymentGuide';
import PolycloudUsageGuide from './PolycloudUsageGuide';

// Import local icons
import bookIcon from './icons/book.png';

const VideoPlayerComponent = () => {
  const [currentSection, setCurrentSection] = useState('component');
  const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
  const [currentComponent, setCurrentComponent] = useState(<WorkflowBuilderOverview />);
  const [activeTab, setActiveTab] = useState('0'); // Default to the first item
  const [expandedSections, setExpandedSections] = useState([]);

  const courseContents = [
    {
      type: 'component',
      title: 'Module Overview',
      icon: bookIcon,
      component: <WorkflowBuilderOverview />,
    },
    {
      type: 'component',
      title: 'Getting Started with Workflows',
      icon: bookIcon,
      component: <WorkflowBuilderDetails />,
    },
    {
      type: 'component',
      title: 'Understanding the UI of Workflows',
      icon: bookIcon,
      component: <NewGroupComponent />,
    },
  
    {
      type: 'component',
      title: 'Nodes',
      icon: bookIcon,
      component: null,
      subsections: [
        {
          type: 'component',
          title: 'Transform Nodes',
          icon: bookIcon,
          component: <TransformNodeDetails />,
        },
      ],
    },
    {
      type: 'component',
      title: 'Code Nodes',
      icon: bookIcon,
      component: null,
      subsections: [
        {
          type: 'component',
          title: 'Node Types',
          icon: bookIcon,
          component: <NodeTypesPage />,
        },
        {
          type: 'component',
          title: 'Code Server Guide',
          icon: bookIcon,
          component: <CodeServerGuide />,
        },
        {
          type: 'component',
          title: 'How to create a Destination?',
          icon: bookIcon,
          component: <CodeNodeDeploymentGuide />,
        },
        {
          type: 'component',
          title: 'Polycloud Usage Guide',
          icon: bookIcon,
          component: <PolycloudUsageGuide />,
        },
      ],
    },
  ];

  const loadComponent = (title, component, tabId) => {
    setCurrentSection('component');
    setCurrentComponent(component);
    setActiveTab(tabId);
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const toggleSection = (index) => {
    setExpandedSections((prevExpandedSections) =>
      prevExpandedSections.includes(index)
        ? prevExpandedSections.filter((i) => i !== index)
        : [...prevExpandedSections, index]
    );
  };

  const toggleCourseContent = () => {
    setIsCourseContentVisible(!isCourseContentVisible);
  };

  const getNextComponentIndex = (currentIndex) => {
    if (currentIndex === `${courseContents.length - 1}`) return currentIndex;
    return `${parseInt(currentIndex) + 1}`;
  };

  const getPreviousComponentIndex = (currentIndex) => {
    if (currentIndex === '0') return currentIndex;
    return `${parseInt(currentIndex) - 1}`;
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
