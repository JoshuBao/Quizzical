import React from "react";
import axios from "axios";


import Question from "./Question";


export default function App() {
  const [trivia, setTrivia] = React.useState([]);
  const [tally, setTally] = React.useState(0)
  React.useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => setTrivia(data.results))
  }, [])


  function handleClick(){
    console.log(tally)
  }
  const questions = trivia.map(q => <Question questionData={q} setTally={setTally} />)
  return (
    <div>
      <div className="questionPage">
        <h2>hi</h2>
        {questions}
        <button onClick={handleClick}>Submit</button>
        <h2>hi</h2>
      </div>
      <div>

      </div>
    </div>


  )
}


