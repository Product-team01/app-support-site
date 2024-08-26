import React, { useState } from 'react';
import './QandAComponent.css';

const QandAComponent = () => {
  const questions = [
    {
      question: 'What is the primary function of the Workflow Builder on the Vue.ai Platform?',
      options: [
        'To design and automate workflows using a simple drag-and-drop interface',
        'To manually input and process data',
        'To exclusively perform SQL operations',
        'To generate static reports'
      ],
      correctAnswer: 'To design and automate workflows using a simple drag-and-drop interface'
    },
    {
      question: 'Which of the following is NOT a type of node available in the Vue.ai Workflow Builder?',
      options: [
        'Compute Node',
        'Dataset Node',
        'Custom Node',
        'User Management Node'
      ],
      correctAnswer: 'User Management Node'
    },
    {
      question: 'What feature of the Vue.ai Workflow Builder allows users to write their own code and create custom processes?',
      options: [
        'HITL Nodes',
        'Model Nodes',
        'Custom Nodes',
        'Transform Nodes'
      ],
      correctAnswer: 'Custom Nodes'
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
