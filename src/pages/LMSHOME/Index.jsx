// import React, { useState } from 'react';
// import Layout from '@theme/Layout';
// import Title from './Title';
// import FilterBar from './FilterBar';
// import CourseCard from './CourseCard';

// const CoursesData = [
//   {
//     image: 'https://d1r1e7xjkfj7nz.cloudfront.net/type2.png',
//     title: 'Document Types',
//     organization: 'MSD',
//     level: 'Beginner',
//     type: 'Course',
//     href: '/LMS',
//     category: 'Document'
//   },
//   {
//     image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
//     title: 'Datasets',
//     organization: 'Document',
//     level: 'Beginner',
//     type: 'Specialization',
//     href: '/LMS-2',
//     category: 'Document'
//   },
//   {
//     image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
//     title: 'Dataset Groups',
//     organization: 'Document',
//     level: 'Intermediate',
//     type: 'Course',
//     href: '/LMS-3',
//     category: 'Document'
//   },
//   {
//     image: 'https://d1r1e7xjkfj7nz.cloudfront.net/connect5b.png',
//     title: 'Connections',
//     organization: 'Document',
//     level: 'Advanced',
//     type: 'Course',
//     href: '/LMS-4',
//     category: 'Document'
//   },
//   {
//     image: 'https://d1r1e7xjkfj7nz.cloudfront.net/connect5b.png',
//     title: 'Model Gen',
//     organization: 'Document',
//     level: 'Advanced',
//     type: 'Course',
//     href: '/LMS-7',
//     category: 'Model Gen'
//   }
// ];

// const Main = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
  
//   const categories = ['All', 'Document','Model Gen'];
  
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredCourses = selectedCategory === 'All'
//     ? CoursesData
//     : CoursesData.filter(course => course.category === selectedCategory);

//   return (
//     <Layout>
//       <header className="unique-app-header" />
//       <Title />  {/* Title Component */}
//       <FilterBar 
//         categories={categories} 
//         selectedCategory={selectedCategory} 
//         onCategoryChange={handleCategoryChange}  
//       />
//       <div className="course-grid">
//         {filteredCourses.map((course, index) => (
//           <CourseCard key={index} {...course} />
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default Main;

import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Title from './Title';
import FilterBar from './FilterBar';
import CourseCard from './CourseCard';

const CoursesData = [
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/imagebgl.png',
    title: 'Document Types',
    
    level: 'Beginner',
    type: 'Module',
    href: '/Document-Types',
    category: 'Document',
    description: 'Introduction to Document Types, what they are, and how to create new document types'
  },
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/imagebgl.png',
    title: 'Datasets',
  
    level: 'Beginner',
    type: 'Module',
    href: '/Datasets',
    category: 'Document',
    description: 'Introduction to Datasets, what they are, operations that are possible and how to use them'
  },
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/imagebgl.png',
    title: 'Dataset Groups',
  
    level: 'Intermediate',
    type: 'Module',
    href: '/Dataset-Groups',
    category: 'Document',
    description: 'Introduction to Dataset Groups, what they can be used for and how to use them'
  },
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/imagebgl.png',
    title: 'Connections',
  
    level: 'Intermediate',
    type: 'Module',
    href: '/Connections',
    category: 'Document',
    description: 'Introduction to Connections, what they are, and how to create new Sources, Destinations and Connections'
  },
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/imagebgl.png',
    title: 'Model Gen Manager',
  
    level: 'Intermediate',
    type: 'Module',
    href: '/Model-Gen-Manager',
    category: 'Model Gen',
    description: 'Introduction to Vue’s Model Gen Manager, what it is capable of and how to use it'
  },
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/imagebgl.png',
    title: 'Workflows ',
   
    level: 'Advanced',
    type: 'Module',
    href: '/Workflows',
    category: 'Workflow',
    description: 'Introduction to Workflows, what the basics are and how to create them'
  }
];

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Document','Model Gen', 'Workflow'];
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = selectedCategory === 'All'
    ? CoursesData
    : CoursesData.filter(course => course.category === selectedCategory);

  return (
    <Layout>
      <header className="unique-app-header" />
      <Title />  {/* Title Component */}
      <FilterBar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange}  
      />
      <div className="course-grid">
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </Layout>
  );
};

export default Main;
