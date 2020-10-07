import React, {useState, useEffect} from 'react';
import Card from './components/card/Card';
import Score from './components/score/Score';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [data, setData] = useState(['red', 'blue', 'green', 'yellow', 'purple']);

  useEffect(() => {
    setData((data) => {
      for(let i = data.length - 1; i > 0 ; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }
      return data;
    })
  }, [score])

  const handleClick = (event) => {
    const className = event.target.className;
    if (answer.includes(className)) {
      setAnswer([]);
      setScore(0);
    }
    else {
      setScore(previous => previous + 1);
      if (score >= bestScore) {
        setBestScore(score + 1);
      }
      setAnswer(previous => previous.concat(className));
    }
  }


  return (
    <main>
      <Score scoreData = {score} bestScoreData = {bestScore} />
      {data.map((item, index) => 
        <Card data = {item} key = {index} onClick = {handleClick}/>
      )}
    </main>

  )


} 
