import React, {useState} from 'react'
import AnswersButtons from './AnswersButtons'
import './CSS/Results.css'
import HeaderQuestion from './HeaderQuestion'

function Results(props) {

    const [ShowScore, setShowScore] = useState(false)    

    const HandleShowResults = () =>{
        setShowScore(true)
        
    }

    const r1= <p>La respuesta correcta es: HyperText Markup Language</p>
    const r2= <p>La respuesta correcta es: 6</p>
    const r3= <p>La respuesta correcta es: Cascading Style Sheets</p>
    const r4= <p>La respuesta correcta es: text-decoration:none;</p>
    const r5= <p>La respuesta correcta es: function myFunction()</p>
    const r6= <p>La respuesta correcta es: Git</p>
    const r7= <p>La respuesta correcta es: ul</p>
    const r8= <p>La respuesta correcta es: Search Engine Optimization</p>
    const r9= <p>La respuesta correcta es: React</p>
    const r10= <p>La respuesta correcta es: Programación orientada a objetos</p>
    return (
        <div>
            {ShowScore?
            <div className = "resButtons" disabled = {true}>
                <HeaderQuestion questionText = {props.questionText[1]}/>
                <AnswersButtons answerText = {props.answerText[1]} correctAnswer1 = {props.correctAnswer1} clickedAnswer1 = {props.clickedAnswer1}/>
                {props.correctAnswer1 === 0 ? r1:"" }
                &nbsp;
                <HeaderQuestion questionText = {props.questionText[2]}/>
                <AnswersButtons answerText = {props.answerText[2]} correctAnswer2 = {props.correctAnswer2} clickedAnswer2 = {props.clickedAnswer2}/>
                {props.correctAnswer2 === 0 ? r2:"" }
                &nbsp;
                <HeaderQuestion questionText = {props.questionText[3]}/>
                <AnswersButtons answerText = {props.answerText[3]} correctAnswer3 = {props.correctAnswer3} clickedAnswer3 = {props.clickedAnswer3}/>
                {props.correctAnswer3 === 0 ? r3:"" }
                &nbsp;
                <HeaderQuestion questionText = {props.questionText[4]}/>
                <AnswersButtons answerText = {props.answerText[4]} correctAnswer4 = {props.correctAnswer4} clickedAnswer4 = {props.clickedAnswer4}/>
                {props.correctAnswer4 === 0 ? r4:"" }
                &nbsp;
                <HeaderQuestion questionText = {props.questionText[5]}/>
                <AnswersButtons answerText = {props.answerText[5]} correctAnswer5 = {props.correctAnswer5} clickedAnswer5 = {props.clickedAnswer5}/>
                {props.correctAnswer5 === 0 ? r5:"" }
                &nbsp;
                <HeaderQuestion questionText = {props.questionText[6]}/>
                <AnswersButtons answerText = {props.answerText[6]} correctAnswer6 = {props.correctAnswer6} clickedAnswer6 = {props.clickedAnswer6}/>
                {props.correctAnswer6 === 0 ? r6:"" }
                &nbsp;
                <HeaderQuestion questionText = {props.questionText[7]}/>
                <AnswersButtons answerText = {props.answerText[7]} correctAnswer7 = {props.correctAnswer7} clickedAnswer7 = {props.clickedAnswer7}/>
                {props.correctAnswer7 === 0 ? r7:"" }
                &nbsp;
                <HeaderQuestion questionText = {props.questionText[8]}/>
                <AnswersButtons answerText = {props.answerText[8]} correctAnswer8 = {props.correctAnswer8} clickedAnswer8 = {props.clickedAnswer8}/>
                {props.correctAnswer8 === 0 ? r8:"" }
                &nbsp;
                <HeaderQuestion questionText = {props.questionText[9]}/>
                <AnswersButtons answerText = {props.answerText[9]} correctAnswer9 = {props.correctAnswer9} clickedAnswer9 = {props.clickedAnswer9}/>
                {props.correctAnswer9 === 0 ? r9:"" }
                &nbsp;
                <HeaderQuestion questionText = {props.questionText[10]}/>
                <AnswersButtons answerText = {props.answerText[10]} correctAnswer10 = {props.correctAnswer10} clickedAnswer10 = {props.clickedAnswer10}/>
                {props.correctAnswer10 === 0 ? r10:"" }
            </div>
            :
            <div>
                <h4>Tu nota es: {props.score} de 5</h4>
                <button className = "btnAns" onClick = {HandleShowResults}>Ver respuestas</button>
                
            </div>
            }
        </div>
    )
}

export default Results
