// // import React, { useState } from 'react';
// // import './QandAComponent.css';
// // import FinishComponent from './FinishComponent'; // Import the FinishComponent

// // const QandAComponent = () => {
// //   const questions = [
// //     {
// //       question: 'What are the mandatory metadata required for a product to be processed?',
// //       options: [
// //         'Product ID/SKU',
// //         'Gender',
// //         'Category',
// //         'All of the above'
// //       ],
// //       correctAnswer: 'All of the above'
// //     },
// //     {
// //       question: 'Which Image view is mandatory for a product?',
// //       options: [
// //         'Front',
// //         'Back',
// //         'Side 45',
// //         'Side 90'
// //       ],
// //       correctAnswer: 'Front'
// //     },
// //     {
// //       question: 'Which technology is used for Image Generation?',
// //       options: [
// //         'TensorFlow',
// //         'Generative Adversarial Network',
// //         'JAX',
// //         'LightGBM'
// //       ],
// //       correctAnswer: 'Generative Adversarial Network'
// //     },
// //     {
// //       question: 'When does a product go to the ‘Rework’ section?',
// //       options: [
// //         'When three comments are given for the generated image.',
// //         'When two comments are given for two generated images.',
// //         'When at least one comment is given for the generated image',
// //         'When no comments are given for the generated image'
// //       ],
// //       correctAnswer: 'When at least one comment is given for the generated image'
// //     },
// //     {
// //       question: 'When does a product go to the ‘Approved’ section?',
// //       options: [
// //         'When at least one generated image is approved',
// //         'When two generated images are approved',
// //         'When three generated images are approved',
// //         'When all the generated images are approved'
// //       ],
// //       correctAnswer: 'When all the generated images are approved'
// //     },
// //     {
// //       question: 'How many models can you select for the primary product?',
// //       options: [
// //         '1',
// //         '2',
// //         '3',
// //         '4'
// //       ],
// //       correctAnswer: '1'
// //     }
// //   ];

// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedOption, setSelectedOption] = useState('');
// //   const [feedback, setFeedback] = useState('');
// //   const [isCorrect, setIsCorrect] = useState(true);
// //   const [isQuizCompleted, setIsQuizCompleted] = useState(false);

// //   const handleOptionChange = (event) => {
// //     setSelectedOption(event.target.value);
// //   };

// //   const handleNextQuestion = () => {
// //     if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
// //       setFeedback('Correct!');
// //       setIsCorrect(true);
// //     } else {
// //       setFeedback('Incorrect, please try again.');
// //       setIsCorrect(false);
// //       return;
// //     }

// //     setSelectedOption('');
// //     setFeedback('');
// //     if (currentQuestionIndex + 1 < questions.length) {
// //       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
// //     } else {
// //       setIsQuizCompleted(true);
// //     }
// //   };

// //   const currentQuestion = questions[currentQuestionIndex];

// //   return (
// //     <div className="question-answer-container">
// //       {isQuizCompleted ? (
// //         <FinishComponent />
// //       ) : (
// //         <>
// //           <h1>{`Question ${currentQuestionIndex + 1}`}</h1>
// //           <p>{currentQuestion.question}</p>
// //           <div className="input-fields">
// //             {currentQuestion.options.map((option, index) => (
// //               <label key={index} className="option-label">
// //                 <input
// //                   type="radio"
// //                   name="option"
// //                   value={option}
// //                   checked={selectedOption === option}
// //                   onChange={handleOptionChange}
// //                 />
// //                 {option}
// //               </label>
// //             ))}
// //           </div>
// //           <button
// //             className="next-button"
// //             onClick={handleNextQuestion}
// //           >
// //             {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
// //           </button>
// //           {feedback && (
// //             <p className={isCorrect ? 'feedback-correct' : 'feedback-incorrect'}>{feedback}</p>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default QandAComponent;

// import React, { useState } from 'react';
// import './QandAComponent.css';

// const QandAComponent = ({ onComplete }) => {
//   const questions = [
//     {
//       question: 'What are the mandatory metadata required for a product to be processed?',
//       options: [
//         'Product ID/SKU',
//         'Gender',
//         'Category',
//         'All of the above'
//       ],
//       correctAnswer: 'All of the above'
//     },
//     {
//       question: 'Which Image view is mandatory for a product?',
//       options: [
//         'Front',
//         'Back',
//         'Side 45',
//         'Side 90'
//       ],
//       correctAnswer: 'Front'
//     },
//     {
//       question: 'Which technology is used for Image Generation?',
//       options: [
//         'TensorFlow',
//         'Generative Adversarial Network',
//         'JAX',
//         'LightGBM'
//       ],
//       correctAnswer: 'Generative Adversarial Network'
//     },
//     {
//       question: 'When does a product go to the ‘Rework’ section?',
//       options: [
//         'When three comments are given for the generated image.',
//         'When two comments are given for two generated images.',
//         'When at least one comment is given for the generated image',
//         'When no comments are given for the generated image'
//       ],
//       correctAnswer: 'When at least one comment is given for the generated image'
//     },
//     {
//       question: 'When does a product go to the ‘Approved’ section?',
//       options: [
//         'When at least one generated image is approved',
//         'When two generated images are approved',
//         'When three generated images are approved',
//         'When all the generated images are approved'
//       ],
//       correctAnswer: 'When all the generated images are approved'
//     },
//     {
//       question: 'How many models can you select for the primary product?',
//       options: [
//         '1',
//         '2',
//         '3',
//         '4'
//       ],
//       correctAnswer: '1'
//     }
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [isCorrect, setIsCorrect] = useState(true);
//   const [isQuizCompleted, setIsQuizCompleted] = useState(false);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleNextQuestion = () => {
//     if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
//       setFeedback('Correct!');
//       setIsCorrect(true);
//     } else {
//       setFeedback('Incorrect, please try again.');
//       setIsCorrect(false);
//       return;
//     }

//     setSelectedOption('');
//     setFeedback('');
//     if (currentQuestionIndex + 1 < questions.length) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setIsQuizCompleted(true);
//       onComplete(); // Notify the parent component that the quiz is completed
//     }
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="question-answer-container">
//       {isQuizCompleted ? (
//         <p>Congratulations! You have completed the Q&A.</p>
//       ) : (
//         <>
//           <h1>{`Question ${currentQuestionIndex + 1}`}</h1>
//           <p>{currentQuestion.question}</p>
//           <div className="input-fields">
//             {currentQuestion.options.map((option, index) => (
//               <label key={index} className="option-label">
//                 <input
//                   type="radio"
//                   name="option"
//                   value={option}
//                   checked={selectedOption === option}
//                   onChange={handleOptionChange}
//                 />
//                 {option}
//               </label>
//             ))}
//           </div>
//           <button
//             className="next-button"
//             onClick={handleNextQuestion}
//           >
//             {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//           {feedback && (
//             <p className={isCorrect ? 'feedback-correct' : 'feedback-incorrect'}>{feedback}</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default QandAComponent;


import React, { useState } from 'react';
import './QandAComponent.css';

const QandAComponent = ({ onComplete }) => {
  const questions = [
    {
      question: 'What are the mandatory metadata required for a product to be processed?',
      options: [
        'Product ID/SKU',
        'Gender',
        'Category',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      question: 'Which Image view is mandatory for a product?',
      options: [
        'Front',
        'Back',
        'Side 45',
        'Side 90'
      ],
      correctAnswer: 'Front'
    },
    {
      question: 'Which technology is used for Image Generation?',
      options: [
        'TensorFlow',
        'Generative Adversarial Network',
        'JAX',
        'LightGBM'
      ],
      correctAnswer: 'Generative Adversarial Network'
    },
    {
      question: 'When does a product go to the ‘Rework’ section?',
      options: [
        'When three comments are given for the generated image.',
        'When two comments are given for two generated images.',
        'When at least one comment is given for the generated image',
        'When no comments are given for the generated image'
      ],
      correctAnswer: 'When at least one comment is given for the generated image'
    },
    {
      question: 'When does a product go to the ‘Approved’ section?',
      options: [
        'When at least one generated image is approved',
        'When two generated images are approved',
        'When three generated images are approved',
        'When all the generated images are approved'
      ],
      correctAnswer: 'When all the generated images are approved'
    },
    {
      question: 'How many models can you select for the primary product?',
      options: [
        '1',
        '2',
        '3',
        '4'
      ],
      correctAnswer: '1'
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setFeedback('Correct!');
      setIsCorrect(true);
    } else {
      setFeedback('Incorrect, please try again.');
      setIsCorrect(false);
      return;
    }

    setSelectedOption('');
    setFeedback('');
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
      onComplete(); // Notify the parent component that the quiz is completed
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="question-answer-container">
      {isQuizCompleted ? (
        <p> You have completed the Q&A.</p>
      ) : (
        <>
          <h1>{`Question ${currentQuestionIndex + 1}`}</h1>
          <p>{currentQuestion.question}</p>
          <div className="input-fields">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            ))}
          </div>
          <button
            className="next-button"
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
          {feedback && (
            <p className={isCorrect ? 'feedback-correct' : 'feedback-incorrect'}>{feedback}</p>
          )}
        </>
      )}
    </div>
  );
};

export default QandAComponent;
