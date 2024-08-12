import React, { useState } from 'react';
import './QuestionAnswer1Component.css';

const QuestionAnswer1Component = () => {
  const questions = [
    {
      question: 'Which document type would you use for registering an invoice that has a table and some other text data?',
      options: ['Unstructured', 'Semi-structured', 'Structured'],
      correctAnswer: 'Semi-structured',
    },
    {
      question: 'Which document type would you use if you would want to extract details from a House Rent Agreement?',
      options: ['Unstructured', 'Semi-structured', 'Structured'],
      correctAnswer: 'Unstructured',
    },
    {
      question: 'A passport can be registered as:',
      options: ['Unstructured', 'ID card', 'Structured', 'Structured or ID card'],
      correctAnswer: 'Structured or ID card',
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

export default QuestionAnswer1Component;
 