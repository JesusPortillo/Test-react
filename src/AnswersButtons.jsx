import React from 'react'
import './CSS/QuestionBoxStyle.css'


function AnswersButtons(props) {

    let answer = Object.keys(props.answerText).map((qAnswer, i) => (
        <button key = {qAnswer} className = {props.correctAnswer1 === qAnswer ? "correct" : 
        props.correctAnswer2 === qAnswer? "correct": props.correctAnswer3 === qAnswer ? "correct" : 
        props.correctAnswer4 === qAnswer? "correct": props.correctAnswer5 === qAnswer ? "correct" : 
        props.correctAnswer6 === qAnswer? "correct": props.correctAnswer7 === qAnswer ? "correct" : 
        props.correctAnswer8 === qAnswer? "correct": props.correctAnswer9 === qAnswer ? "correct" : 
        props.correctAnswer10 === qAnswer? "correct" : props.clickedAnswer1  === qAnswer ? "incorrect" :
        props.clickedAnswer2  === qAnswer ? "incorrect" :props.clickedAnswer3  === qAnswer ? "incorrect" :
        props.clickedAnswer4  === qAnswer ? "incorrect" : props.clickedAnswer5  === qAnswer ? "incorrect" :
        props.clickedAnswer6  === qAnswer ? "incorrect" : props.clickedAnswer7  === qAnswer ? "incorrect" :
        props.clickedAnswer8  === qAnswer ? "incorrect" : props.clickedAnswer9  === qAnswer ? "incorrect" :
        props.clickedAnswer10  === qAnswer ? "incorrect":""
    }  
        onClick = {() => {props.checkAnswer(qAnswer)}} >{props.answerText[qAnswer]}</button>
    ))

    return (
        <React.Fragment>
            {answer}
        </React.Fragment>
    )
}

export default AnswersButtons
