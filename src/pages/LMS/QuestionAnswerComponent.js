import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import certificateTemplate from './certificate-template.png';
import './QuestionAnswerComponent.css';

const QuestionAnswerComponent = ({ questions = [] }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerChange = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (!name || !email || !company) {
      alert('Please fill in all the required fields: Name, Email, and Company.');
      return;
    }

    if (questions[currentQuestion]?.correctAnswer === selectedAnswers[currentQuestion]) {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsCorrect(true);
        generateCertificate(name, email, company);
      }
    } else {
      alert('Incorrect answer. Please try again.');
    }
  };

  const generateCertificate = (recipientName, email, company) => {
    const input = document.getElementById('certificate-container');
    input.style.display = 'block'; // Show the certificate container
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust the width and height as per your certificate template
      pdf.save('certificate.pdf');
      input.style.display = 'none'; // Hide the certificate container again
    });
  };

  const progress = questions.length ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <div className="question-answer-container">
      <h1>Question and Answer Section</h1>
      <div className="input-progress-container">
        <div className="input-fields">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div className="progress-bar">
          <div style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {questions.length > 0 && (
        <div className="question-block">
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, optionIndex) => (
            <label key={optionIndex} className="option-label">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={selectedAnswers[currentQuestion] === option}
                onChange={(e) => handleAnswerChange(e.target.value)}
                required
              />
              {option}
            </label>
          ))}
        </div>
      )}

      <button
        onClick={handleNext}
        className={currentQuestion + 1 < questions.length ? 'next-button' : 'submit-button'}
      >
        {currentQuestion + 1 < questions.length ? 'Next' : 'Submit'}
      </button>
      {isCorrect && <p>Congratulations! You answered all questions correctly.</p>}
      <div id="certificate-container" style={{ position: 'relative', width: '800px', height: '600px', margin: '0 auto', display: 'none' }}>
        <img src={certificateTemplate} alt="Certificate" style={{ width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', top: '200px', left: '50%', transform: 'translateX(-50%)', fontSize: '24px' }}>{name}</div>
        <div style={{ position: 'absolute', top: '250px', left: '50%', transform: 'translateX(-50%)', fontSize: '24px' }}>{company}</div>
        <div style={{ position: 'absolute', top: '300px', left: '50%', transform: 'translateX(-50%)', fontSize: '24px' }}>{new Date().toLocaleDateString()}</div>
        <div style={{ position: 'absolute', top: '350px', left: '50%', transform: 'translateX(-50%)', fontSize: '24px' }}>Signature</div>
      </div>
    </div>
  );
};

export default QuestionAnswerComponent;
