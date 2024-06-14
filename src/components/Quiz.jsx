import {useState} from 'react';
import questions from '../../questions.js';

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <div id="quiz">
      <p>currently active question</p>
    </div>
  );
}
