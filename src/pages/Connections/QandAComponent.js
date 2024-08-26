import React, { useState } from 'react';
import './QandAComponent.css';

const QandAComponent = () => {
  const questions = [
    {
      question: 'What is the primary purpose of Datasets in the data platform?',
      options: [
        'To store and manage data',
        'To provide data that is ready for use in various data-driven activities',
        'To perform data analysis and visualization',
        'To secure data access and permissions'
      ],
      correctAnswer: 'To provide data that is ready for use in various data-driven activities'
    },
    {
      question: 'Which of the following is a key feature of Datasets?',
      options: [
        'Data Ingestion',
        'Data storage',
        'Machine learning model training',
        'A and C'
      ],
      correctAnswer: 'Data Ingestion'
    },
    {
      question: 'What is the first step in uploading a new Dataset?',
      options: [
        'Provide the dataset details',
        'Test the dataset connection',
        'Navigate to the "Data Hub" section',
        'Select the file to be uploaded'
      ],
      correctAnswer: 'Navigate to the "Data Hub" section'
    },
    {
      question: 'Which of the following is a typical step in enriching a Dataset?',
      options: [
        'Generate descriptions and tags for dataset columns',
        'Perform data analysis and visualization',
        'Manage user permissions and access control',
        'A and C'
      ],
      correctAnswer: 'Generate descriptions and tags for dataset columns'
    },
    {
      question: 'What is the purpose of the "Resample" feature in Datasets?',
      options: [
        'To run the dataset ingestion automatically',
        'To monitor the dataset updates',
        'To troubleshoot any issues that may arise',
        'To generate a new sample of the dataset\'s data'
      ],
      correctAnswer: 'To generate a new sample of the dataset\'s data'
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);

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
      setFeedback('Congratulations! You have completed all the questions.');
      setIsCorrect(true);
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="question-answer-container">
      {currentQuestion ? (
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
            {isLastQuestion ? 'Finish' : 'Next'}
          </button>
          {feedback && (
            <p className={isCorrect ? 'feedback-correct' : 'feedback-incorrect'}>{feedback}</p>
          )}
        </>
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default QandAComponent;
