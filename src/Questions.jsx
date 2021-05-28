import React, { useRef, useState } from 'react';
import ButtonsAnswers from './ButtonsAnswers'
import './CSS/QuestionBoxStyle.css'

function Questions() {

    const questions = [
		{
			questionText: '¿Qué se entiende por HTML?',
			answerOptions: [

				
				{ answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
				{ answerText: 'Home Tool Markup Language', isCorrect: false },
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Cascading Styles Sheets', isCorrect: false },
			],
		},
		{
			id:2,
			questionText: '¿Cuantas etiquetas HTML para titulos hay?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '6', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: '¿Qué se entiende por CSS?',
			answerOptions: [
				{ answerText: 'Computer Style Sheets', isCorrect: false },
				{ answerText: 'Cascading Style Sheets', isCorrect: true },
				{ answerText: 'Creative Style Sheets', isCorrect: false },
				{ answerText: 'Colorful Style Sheets', isCorrect: false },
			],
		},
		{
			questionText: '¿Como mostrar Hyperlinks sin subrayado?',
			answerOptions: [
				{ answerText: 'decoration:no-underline;', isCorrect: false },
				{ answerText: 'underline:none;', isCorrect: false },
				{ answerText: 'text-decoration:none;', isCorrect: true },
				{ answerText: 'text-decoration:no-underline;', isCorrect: false },
			],
		},
		{
			questionText: '¿Como crear una función en JS?',
			answerOptions: [
				{ answerText: 'function myFunction()', isCorrect: true },
				{ answerText: 'function:myFunction()', isCorrect: false },
				{ answerText: 'function=myFunction()', isCorrect: false },
				{ answerText: 'function==myFunction()', isCorrect: false },
			],
		},
		{
			questionText: '¿Cual de los siguientes es un software de control de versiones?',
			answerOptions: [
				{ answerText: 'Git', isCorrect: true },
				{ answerText: 'Rust', isCorrect: false },
				{ answerText: 'SQL', isCorrect: false },
				{ answerText: 'Adobe', isCorrect: false },
			],
		},
		{
			questionText: '¿Cual es la etiqueta para definir una lista no ordenada?',
			answerOptions: [
				{ answerText: 'ol', isCorrect: false },
				{ answerText: 'al', isCorrect: false },
				{ answerText: 'l', isCorrect: false },
				{ answerText: 'ul', isCorrect: true },
			],
		},
		{
			questionText: '¿Que se entiendo por SEO?',
			answerOptions: [
				{ answerText: 'Software Entire Object', isCorrect: false },
				{ answerText: 'Software Enable Out', isCorrect: false },
				{ answerText: 'Search Engine Optimization', isCorrect: true },
				{ answerText: 'Search Engine Oriented', isCorrect: false },
			],
		},
		{
			questionText: ' ¿Cual de estos es una biblioteca de javascript?',
			answerOptions: [
				{ answerText: 'React', isCorrect: true },
				{ answerText: 'Tailwind', isCorrect: false },
				{ answerText: 'bootstrapp', isCorrect: false },
				{ answerText: 'DOM', isCorrect: false },
			],
		},
		{
			questionText: '¿Que se entiende por POO',
			answerOptions: [
				{ answerText: 'Programación oportuna de objetos', isCorrect: false },
				{ answerText: 'Programación orientada a objetos', isCorrect: true },
				{ answerText: 'Objeto', isCorrect: false },
				{ answerText: 'Forma de configurar un servidor', isCorrect: false },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [hiddenButtonNext, setHiddenButtonNext] = useState(false)
	const [hiddenButtonPrevious, sethiddenButtonPrev] = useState(true)
	const [color, setColor] = useState(null)

    const HandleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 0.5);
			setColor({backgroundColor:"green"})
		}
		
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}

		if (nextQuestion >0) {
			sethiddenButtonPrev(false)
		}
		
		if (nextQuestion >= 9) {
			setHiddenButtonNext(true)
		}

	};


	
	const HandleNext = () =>{
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
		if (nextQuestion >=1) {
			sethiddenButtonPrev(false)
		}
		if (nextQuestion >8) {
			setHiddenButtonNext(true)
		}
	}

	const HandlePrevious = () =>{
		const nextQuestion = currentQuestion - 1;
		if (nextQuestion >= 0) {
			setCurrentQuestion(nextQuestion);
		}
		if (currentQuestion <= 1) {
			sethiddenButtonPrev(true)
		}
		if(nextQuestion < 9 ){
			setHiddenButtonNext(false)
		}
		
	}

	

	const buttonNext = <button  hidden={hiddenButtonNext} onClick = {HandleNext}>Siguiente</button>
	const buttonPrevious = <button hidden={hiddenButtonPrevious} onClick = {HandlePrevious}>Anterior</button>

    return (
        <div className="qa_box">
			<div className="qa_header">
				Tu puntaje es {score} de 5
			</div>
			<div className="qa_set">
				<div className='question-text'><h4><strong>{questions[currentQuestion].questionText}</strong></h4></div>
				<div className='qa_ans'>
					{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className={answerOption.isCorrect?"correct":"incorrect"} key={answerOption.id} onClick={() => HandleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
					))}
				</div>
				<span>Pregunta {currentQuestion + 1}</span>/{questions.length}
				<div className='question-count'>
					{buttonNext}
					{buttonPrevious}		
				</div>
			</div>
		</div>
    )
}

export default Questions
