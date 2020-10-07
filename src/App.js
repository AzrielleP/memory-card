import React, {useState, useEffect} from 'react';
import Card from './components/card/Card';
import Score from './components/score/Score';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [data, setData] = useState(['red', 'blue', 'green']);


  return (
    <main>
      <Score scoreData = {score} bestScoreData = {bestScore} />
    </main>

  )


} 
