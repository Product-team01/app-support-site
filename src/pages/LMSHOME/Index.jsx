// import React, { useEffect, useRef } from 'react';
// import Layout from '@theme/Layout';
// import CourseCard from './CourseCard';
// import './Homepage.css';
// import MyComponent from './gradient'
// import { NeatConfig, NeatGradient } from "@firecms/neat";


// const Homepage = () => {
//   const courses = [
//     {
//       image: 'https://d1r1e7xjkfj7nz.cloudfront.net/type2.png',
//       title: 'Document Type',
//       organization: 'MSD',
//       level: 'Beginner',
//       type: 'Course',
//       href: '/LMS'
//     },
//     {
//       image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
//       title: 'Datasets',
//       organization: 'Document',
//       level: 'Beginner',
//       type: 'Specialization',
//       href: '/LMS-2'
//     },
//     {
//       image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
//       title: 'Dataset Groups',
//       organization: 'Document',
//       level: 'Intermediate',
//       type: 'Course',
//       href: '/LMS-3'
//     },
//     {
//       image: 'https://d1r1e7xjkfj7nz.cloudfront.net/connect5b.png ',
//       title: 'Connections',
//       organization: 'Document',
//       level: 'Advanced',
//       type: 'Course',
//       href: '/LMS-4'
//     },
   
//     // Add more courses as needed
//   ];
  
//   return (
//     <Layout>
      
//       <MyComponent/>
//         <h1>Welcome to VueLearn!</h1>
//         <div className="course-grid">
        
//           {courses.map((course, index) => (
//             <CourseCard
//               key={index}
//               {...course}
//             />
//           ))}
//         </div>
      
//     </Layout>
//   );
// };

// export default Homepage;

// Homepage.js
// import React from 'react';
// import Layout from '@theme/Layout';
// import CourseCard from './CourseCard';
// import './Homepage.css';
// import MyComponent from './gradient';

// const Homepage = () => {
//   const courses = [
//     {
//       image: 'https://d1r1e7xjkfj7nz.cloudfront.net/type2.png',
//       title: 'Document Type',
//       organization: 'MSD',
//       level: 'Beginner',
//       type: 'Course',
//       href: '/LMS'
//     },
//     {
//       image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
//       title: 'Datasets',
//       organization: 'Document',
//       level: 'Beginner',
//       type: 'Specialization',
//       href: '/LMS-2'
//     },
//     {
//       image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
//       title: 'Dataset Groups',
//       organization: 'Document',
//       level: 'Intermediate',
//       type: 'Course',
//       href: '/LMS-3'
//     },
//     {
//       image: 'https://d1r1e7xjkfj7nz.cloudfront.net/connect5b.png ',
//       title: 'Connections',
//       organization: 'Document',
//       level: 'Advanced',
//       type: 'Course',
//       href: '/LMS-4'
//     },
//     // Add more courses as needed
//   ];

//   return (
//     <Layout>
//       <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
//         <MyComponent />
//         <div style={{ position: 'relative', zIndex: 1 }}>
//           <h1>Welcome to VueLearn!</h1>
//           <div className="course-grid">
//             {courses.map((course, index) => (
//               <CourseCard
//                 key={index}
//                 {...course}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Homepage;

// import React, { Component } from 'react';
// import './App.css';
// import Layout from '@theme/Layout';
// import CourseCard from './CourseCard';
// import './reveal.css'

// const CoursesData = [
//   {
//     image: 'https://d1r1e7xjkfj7nz.cloudfront.net/type2.png',
//     title: 'Document Type',
//     organization: 'MSD',
//     level: 'Beginner',
//     type: 'Course',
//     href: '/LMS'
//   },
//   {
//     image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
//     title: 'Datasets',
//     organization: 'Document',
//     level: 'Beginner',
//     type: 'Specialization',
//     href: '/LMS-2'
//   },
//   {
//     image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
//     title: 'Dataset Groups',
//     organization: 'Document',
//     level: 'Intermediate',
//     type: 'Course',
//     href: '/LMS-3'
//   },
//   {
//     image: 'https://d1r1e7xjkfj7nz.cloudfront.net/connect5b.png',
//     title: 'Connections',
//     organization: 'Document',
//     level: 'Advanced',
//     type: 'Course',
//     href: '/LMS-4'
//   }
// ];

// class Main extends Component {
//   constructor() {
//     super();
//     this.state = { courses: CoursesData };
//   }

//   render() {
//     return (
//       <div>
//         <header className="unique-app-header" />
//         <Title />
//         <div className="unique-app-card-list" id="unique-app-card-list">
//           {this.state.courses.map((course, index) => (
//             <CourseCard key={index} {...course} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// class Title extends Component {
//   render() {
//     return (
//       <div class="reveal-text">
//       Welcome to VueLearn
   
      
//       <section className="unique-app-title">
     
//         <div className="unique-app-title-content">
//           <h1>Latest Courses</h1>
//           <p>Discover our latest offerings</p>
//         </div>
//       </section>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <Layout>
//       <Main />
//     </Layout>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import Layout from '@theme/Layout';
import CourseCard from './CourseCard';
import Title from './Title';

const CoursesData = [
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/type2.png',
    title: 'Document Types',
    organization: 'MSD',
    level: 'Beginner',
    type: 'Course',
    href: '/LMS'
  },
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
    title: 'Datasets',
    organization: 'Document',
    level: 'Beginner',
    type: 'Specialization',
    href: '/LMS-2'
  },
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
    title: 'Dataset Groups',
    organization: 'Document',
    level: 'Intermediate',
    type: 'Course',
    href: '/LMS-3'
  },
  {
    image: 'https://d1r1e7xjkfj7nz.cloudfront.net/connect5b.png',
    title: 'Connections',
    organization: 'Document',
    level: 'Advanced',
    type: 'Course',
    href: '/LMS-4'
  }
];

class Main extends Component {
  constructor() {
    super();
    this.state = { courses: CoursesData };
  }

  render() {
    return (
      <div>
        <header className="unique-app-header" />
        <Title />
        <div className="unique-app-card-list" id="unique-app-card-list">
          {this.state.courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default App;

