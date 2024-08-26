import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import './UniqueVideoPlayerComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

// Import your components here
import TextComponent from './TextComponent';
import ConnectionManagerDestinationInstructions from './ConnectionManagerDestinationInstructions';
import WhatAreDatasetsComponent from './WhatAreDatasetsComponent';
import WhyDatasetGroupsComponent from './WhyDatasetGroups';
import ConnectionManagerInstructions from './ConnectionManagerInstructions';
import NewGroupComponent from './newgroupdataset';
import ConnectionManagerOverview from './ConnectionManagerOverview';
import CreateConnectionInstructions from './CreateConnectionInstructions';
import DatasetGroupsComponent from './DatasetGroups';
import CardinalityComponent from './Cardinality';
import TheDatasetLandingPageComponent from './ERdiagrams';
import CreatingDatasetGroupComponent from './CreatingDatasetGroup';
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
import FAQL from './FAQ';
import ProductStylingComponent from './ProductStylingComponent';
import FinishComponent from './FinishComponent'; // Import FinishComponent

// Import local icons
import bookIcon from './icons/book.png';
import questionIcon from './icons/message-question.png';
import videoIcon from './icons/video-square.png';
import resourcesIcon from './icons/resources.png';

const VideoPlayerComponent = () => {
  const [currentSection, setCurrentSection] = useState('component');
  const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
  const [currentComponent, setCurrentComponent] = useState(<ModelGenManagerComponent />);
  const [activeTab, setActiveTab] = useState('0');
  const [expandedSections, setExpandedSections] = useState([]);
  const [isQandACompleted, setIsQandACompleted] = useState(false); // State to track Q&A completion

  const courseContents = [
    {
      type: 'component',
      title: 'Module Overview',
      icon: bookIcon,
      component: <ModelGenManagerComponent />
    },
    {
      type: 'component',
      title: 'Introduction to On-Model Imagery',
      icon: bookIcon,
      component: <OnModelImageryComponent />,
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
          component: <CatalogComponent />,
        },
        {
          type: 'component',
          title: 'Creating a catalog',
          icon: bookIcon,
          component: <CreatingCatalogComponent />,
        },
        {
          type: 'component',
          title: 'Catalog Landing and Feeds Listing',
          icon: bookIcon,
          component: <CatalogHomeComponent />,
        },
        {
          type: 'component',
          title: 'Product Listing',
          icon: bookIcon,
          component: <CatalogListingComponent />,
        },
      ],
    },
    {
      type: 'component',
      title: 'Adding a new product',
      icon: bookIcon,
      component: <AddProductComponent />,
    },
    {
      type: 'component',
      title: 'Styling a product',
      icon: bookIcon,
      component: <ProductStylingComponent />,
    },
    {
      type: 'component',
      title: 'Generation and Review',
      icon: bookIcon,
      component: <GenerationProcessComponent />,
    },
    {
      type: 'component',
      title: 'Export',
      icon: bookIcon,
      component: <ExportProcessComponent />,
    },
    {
      type: 'component',
      title: 'Collections',
      icon: bookIcon,
      component: <CollectionsComponent />,
    },
    {
      type: 'component',
      title: 'Q & A',
      icon: questionIcon,
      component: <QandAComponent onComplete={() => setIsQandACompleted(true)} />, // Pass onComplete callback
    },
    {
      type: 'component',
      title: 'Resources',
      icon: resourcesIcon,
      component: null,
      subsections: [
        {
          type: 'component',
          title: 'FAQ',
          icon: bookIcon,
          component: <FAQL />,
        },
      ],
    },
  ];

  // Conditionally add the Finish Module after Q&A is completed
  if (isQandACompleted) {
    courseContents.push({
      type: 'component',
      title: 'Finish Module',
      icon: bookIcon,
      component: <FinishComponent />,
    });
  }

  const loadComponent = (title, component, tabId) => {
    setCurrentSection('component');
    setCurrentComponent(component);
    setActiveTab(tabId);
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
