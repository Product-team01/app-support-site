import React, { useState } from 'react';
import './QuestionAnswer1Component.css';

const QuestionAnswer3Component = () => {
  const questions = [
    {
      question: 'What is the data type that you would choose for extracting a name without needing to do any transformation?',
      options: ['Free-form text', 'Alphanumeric', 'Name', 'Any of the above'],
      correctAnswer: 'Any of the above',
    },
    {
      question: 'When annotating a new attribute, would you draw the box around:',
      options: ['The attribute name', 'The attribute value', 'Both'],
      correctAnswer: 'The attribute value',
    },
    {
      question: 'Which base document type would you choose to register a Sale Deed of a property?',
      options: ['Unstructured', 'Structured', 'Semi-structured', 'Any of the above'],
      correctAnswer: 'Semi-structured',
    },
    {
      question: 'Zero shot learning results in:',
      options: ['Only sections where both the name and the value of the attribute can be identified', 'Only sections where the name alone can be identified', 'All sections where attributes can be identified'],
      correctAnswer: 'All sections where attributes can be identified',
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

export default QuestionAnswer3Component;
