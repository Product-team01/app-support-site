import React from 'react';
import './CourseCard.css';

const CourseCard = ({ image = '', title = 'Untitled', organization = 'Unknown', level = 'N/A', type = 'Course', href = '#' }) => {
  return (
    <div className="unique-card">
      <a href={href} style={{ textDecoration: 'none' }}>
        <div className="unique-card-header" style={{ backgroundImage: `url(${image})` }}>
          <h4 className="unique-card-header--title">{title}</h4>
        </div>
        <div className="unique-card-body">
          <p className="unique-date">{level}</p>
          <h2 className="unique-body-content">{title}</h2>
          <p className="unique-body-content">{organization}</p>
          <p className="unique-body-content">{type.toUpperCase()}</p>
          <button className="unique-button unique-button-primary">
            <i className="fa fa-chevron-right" /> Start Course
          </button>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
