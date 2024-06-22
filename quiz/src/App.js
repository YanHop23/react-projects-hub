import { useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import './index.scss';
import { questions } from './state';

function App() {
  const [step, setStep] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const selectAnswer= (index) => {
    console.log(index, questions[step].correct)
    setStep(step+1)
    if (index == questions[step].correct) {
        setCorrectAnswer(correctAnswer + 1)
    } 
  }
  const refresh = () => {
    setStep(0);
    setCorrectAnswer(0)
  }
  return (
    <div className="App">
      {step !== questions.length ? 
        <Game questions={questions} step={step} selectAnswer={selectAnswer}/>
      :  
        <Result correctAnswer={correctAnswer} questions={questions} refresh={refresh}/>
      }
    </div>
  );
}

export default App;