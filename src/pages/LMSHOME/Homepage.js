import React from 'react';
import Layout from '@theme/Layout';
import CourseCard from './CourseCard';
import './Homepage.css';

const Homepage = () => {
  const courses = [
    {
      image: 'https://d1r1e7xjkfj7nz.cloudfront.net/type2.png',
      title: 'Document Type',
      organization: 'MSD',
      level: 'Beginner',
      type: 'Course',
      href: '/LMS'
    },
    {
      image: 'https://example.com/image2.jpg',
      title: 'Python for Everybody',
      organization: 'University of Michigan',
      level: 'Beginner',
      type: 'Specialization',
      href: '/LMS-2'
    },
    {
      image: 'https://example.com/image3.jpg',
      title: 'Machine Learning',
      organization: 'Stanford University',
      level: 'Intermediate',
      type: 'Course',
      href: '/another-path'
    },
    {
      image: 'https://example.com/image4.jpg',
      title: 'Introduction to Algorithms',
      organization: 'MIT',
      level: 'Advanced',
      type: 'Course',
      href: '/another-path'
    },
    {
      image: 'https://example.com/image5.jpg',
      title: 'Web Development Bootcamp',
      organization: 'Udemy',
      level: 'Beginner',
      type: 'Course',
      href: '/another-path'
    },
    {
      image: 'https://example.com/image6.jpg',
      title: 'Data Science',
      organization: 'Harvard University',
      level: 'Advanced',
      type: 'Specialization',
      href: '/another-path'
    },
    // Add more courses as needed
  ];

  return (
    <Layout>
      <div className="homepage">
        <h1>Welcome to VueLearn!</h1>
        <div className="course-grid">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
