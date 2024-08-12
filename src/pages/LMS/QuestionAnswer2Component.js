import React, { useState } from 'react';
import './QuestionAnswer1Component.css';

const QuestionAnswer2Component = () => {
  const questions = [
    {
      question: 'What is the data type that you would choose for extracting an address?',
      options: ['Free-form text', 'Alphanumeric', 'Numeric'],
      correctAnswer: 'Free-form text',
    },
    {
      question: 'When extracting a zip code from an address, what data type would you choose?',
      options: ['Free-form text', 'Alphanumeric', 'Numeric'],
      correctAnswer: 'Numeric',
    },
    {
      question: 'If the downstream use case is to verify that both first and last names are present, which output format would you choose for extracting a name?',
      options: ['Full Name', 'Last Name, First Name', 'Initials. Last Name', 'Any of the above', 'Option 1 or option 2'],
      correctAnswer: 'Option 1 or option 2',
    },
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
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="question-answer-container">
        <h1>Congratulations!</h1>
        <p>You have completed all the questions.</p>
      </div>
    );
  }

  return (
    <div className="question-answer-container">
      <h1>{`Question ${currentQuestionIndex + 1}`}</h1>
      <p>{questions[currentQuestionIndex].question}</p>
      <div className="input-fields">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              name={`option-${currentQuestionIndex}`}
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
        <p className={isCorrect ? 'feedback-correct' : 'feedback-incorrect'}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default QuestionAnswer2Component;
