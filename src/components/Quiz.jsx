import {useState} from 'react';
import QUESTIONS from '../questions.js';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const currentQuestion = QUESTIONS[activeQuestionIndex];

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{currentQuestion.text}</h2>
        <ul id="answers">
          {currentQuestion.answers.map((answer) => (
            <li className="answer" key={answer}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
