import React from "react";
import axios from "axios";


import Question from "./Question";


function App() {
  const [trivia, setTrivia] = React.useState([]);
  React.useEffect(function () {
    console.log("Effect ran")
    fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
      .then(data => setTrivia(data.results))
  }, [])
  let questions = trivia.map((q)=>{
    let opt = q.incorrect_answers
    opt.push(q.correct_answer)
    return {
      question: q.question,
      correctAns: q.correct_answer,
      options: this.shuffle(opt)
    }
  })

  console.log(trivia)
  return (
    <div>
      <div className="questionPage">
        <h2>hi</h2>
        <Question questionData={questions} />
        <h2>hi</h2>
      </div>
      <div>

      </div>
    </div>


  )
}

export default App;
