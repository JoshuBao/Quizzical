import React from "react";
export default function Question(props){
    return(
        <section>
        <h2>HELLO {props.questionData}</h2>
        {/* <input
        type="radio"
        id=""
        //id = props. the answer
        name="employment"
        value="part-time"
        checked={formData.employment === "part-time"}
        //props handleChange to React.state thing?
        onChange={handleChange}
         />
        */}
        </section>
    )
}