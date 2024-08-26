// // ZeroShotLearningComponent.js

// import React from 'react';

// const ZeroShotLearningComponent = () => {
//   return (
//     <div className="zero-shot-learning-container">
//       <h1>Zero-shot Learning</h1>
//       <p>
//         Zero-shot learning in Intelligent Document Processing (IDP) refers to the ability of Vue’s Machine Learning model to accurately process and extract information from documents it has never seen before, without any prior training on those specific document types or formats. This approach leverages general understanding, universal classifiers, and understanding derived from a broad range of training data to handle new and unseen documents.
//       </p>
//       <p>
//         In the platform, Zero Shot Learning is triggered when a new Document Type is being registered. When a user uploads a new document, the ML engines first identify and extract all possible data from the input document. Then, this data is grouped into sets of attributes and values. This is now ready for the user to annotate.
//       </p>

//       <img src="https://d1r1e7xjkfj7nz.cloudfront.net/zerolearn.gif" alt="Tax Details" />
//     </div>
    
//   );
// };

// export default ZeroShotLearningComponent;


import React from 'react';
import './zeroShotLearning.css';

const ZeroShotLearningComponent = () => {
  return (
    <div className="zero-shot-learning-container">
      <h1>Zero-shot Learning</h1>
      <p>
        Zero-shot learning in Intelligent Document Processing (IDP) refers to the ability of Vue’s Machine Learning model to accurately process and extract information from documents it has never seen before, without any prior training on those specific document types or formats. This approach leverages general understanding, universal classifiers, and understanding derived from a broad range of training data to handle new and unseen documents.
      </p>
      <p>
        In the platform, Zero Shot Learning is triggered when a new Document Type is being registered. When a user uploads a new document, the ML engines first identify and extract all possible data from the input document. Then, this data is grouped into sets of attributes and values. This is now ready for the user to annotate.
      </p>
      <div className="gif-container" >
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/zerolearn.gif" alt="Tax Details" />
      </div>
    </div>
  );
};

export default ZeroShotLearningComponent;
