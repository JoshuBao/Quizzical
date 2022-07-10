import React from "react";
export default function Question(props) {

    function handleChange(event) {
        console.log("Changed")
        console.log(event.target.value)
        props.setTally(prevTally => prevTally + 1)
        console.log("changed2")
    }
    const qData = props.questionData
    const allAnswerChoices = [...qData.incorrect_answers, qData.correct_answer]


    //make a shuffle function to shuffle allAnswerChoices
    const answerChoices = allAnswerChoices.map(
        a => <label className="temp">
            <input
                type="radio"
                name="radio"
                onChange={handleChange}
                value={a}
            //checked={handleChanged === }
            />
            {a}
        </label>
    )
    //gonna have state in parent, a tally, then set it in here w props??... 
    //    on form submit... if props.data.correct answer == checked thing in the form... 
    //    add 1 to tally??.. set the state, then display the score at the end
    return (
        <section>
            <fieldset>
                <h2>{props.questionData.question}</h2>
                {answerChoices}

            </fieldset>

        </section>
    )
}