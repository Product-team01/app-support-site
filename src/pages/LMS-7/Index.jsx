import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
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
import './UniqueVideoPlayerComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import DataAndMetadataComponent from './DatasetGroups';
import CreatingConnectionComponent from "./CreatingConnectionComponent";
import QandAComponent from './QandAComponent';
import OverviewComponent from './OverviewComponent';
import AddProductComponent from './AddProductComponent';
import CatalogComponent from './CatalogComponent';
import CatalogHomeComponent from './CatalogHomeComponent';
import CatalogListingComponent from './CatalogListingComponent';
import CollectionsComponent from './CollectionsComponent';
import CreatingCatalogComponent from './CreatingCatalogComponent';
import ExportProcessComponent from './ExportProcessComponent';
import GenerationProcessComponent from './GenerationProcessComponent';
import ModelGenManagerComponent from './ModelGenManagerComponent';
import OnModelImageryComponent from './OnModelImageryComponent';
import ProductStylingComponent from './ProductStylingComponent';
import FAQL from './FAQ';

// Import local icons
import bookIcon from './icons/book.png';
import questionIcon from './icons/message-question.png';
import videoIcon from './icons/video-square.png';
import resourcesIcon from './icons/resources.png'; // Add your resources icon here

const VideoPlayerComponent = () => {
  // Set initial states
  const [currentSection, setCurrentSection] = useState('component');  // Ensure 'component' is the default section
  const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
  const [videoData, setVideoData] = useState({
    title: 'Model Generation Manager',
    description: 'Overview of the Model Generation Manager component.',
    videoId: '',
  });
  const [imageData, setImageData] = useState('');
  const [completedVideos, setCompletedVideos] = useState([false, false, false, false]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentStatusId, setCurrentStatusId] = useState('');
  const [currentComponent, setCurrentComponent] = useState(<ModelGenManagerComponent />);  // Load ModelGenManagerComponent on initial load
  const [activeTab, setActiveTab] = useState(0);  // Set active tab to the first item
  const [expandedSections, setExpandedSections] = useState([]);

  const courseContents = [
    {
      type: 'component',
      title: 'Module Overview',
      icon: bookIcon,  // Use the imported bookIcon
      component: <ModelGenManagerComponent />
    },
    {
      type: 'component',
      title: 'Introduction to On-Model Imagery',
      icon: bookIcon,
      component: <OnModelImageryComponent />
    },
    {
      type: 'component',
      title: 'Catalogs & Feeds',
      icon: bookIcon,
      component: null,
      subsections: [
        {
          type: 'component',
          title: 'Catalogs & Feeds: Overview',
          icon: bookIcon,
          component: <CatalogComponent />
        },
        {
          type: 'component',
          title: 'Creating a catalog',
          icon: bookIcon,
          component: <CreatingCatalogComponent />
        },
        {
          type: 'component',
          title: 'Catalog Landing and Feeds Listing',
          icon: bookIcon,
          component: <CatalogHomeComponent />
        },
        {
          type: 'component',
          title: 'Product Listing',
          icon: bookIcon,
          component: <CatalogListingComponent />
        }
      ]
    },
    {
      type: 'component',
      title: 'Adding a new product',
      icon: bookIcon,
      component: <AddProductComponent />
    },
    {
      type: 'component',
      title: 'Styling a product',
      icon: bookIcon,
      component: <ProductStylingComponent />
    },
    {
      type: 'component',
      title: 'Generation and Review',
      icon: bookIcon,
      component: <GenerationProcessComponent />
    },
    {
      type: 'component',
      title: 'Export',
      icon: bookIcon,
      component: <ExportProcessComponent />
    },
    {
      type: 'component',
      title: 'Collections',
      icon: bookIcon,
      component: <CollectionsComponent />
    },
    {
      type: 'component',
      title: 'Q & A',
      icon: bookIcon,
      component: <QandAComponent />
    },
    {
      type: 'component',
      title: 'Resources',
      icon: bookIcon,
      component: null,
      subsections: [
        {
          type: 'component',
          title: 'FAQ',
          icon: bookIcon,
          component: <FAQL />
        }
      ]
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
