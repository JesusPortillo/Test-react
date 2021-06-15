import './CSS/QuestionBoxStyle.css'
import React, { Component } from 'react'
import HeaderQuestion from './HeaderQuestion'
import AnswersButtons from './AnswersButtons';
import Results from './Results';
import ButtonPages from './ButtonPages';

export class Questions extends Component {

	state = {
		questionText:{
			1: "¿Qué se entiende por HTML?",
			2: "¿Cuantas etiquetas HTML para titulos hay?",
			3: "¿Qué se entiende por CSS?",
			4: "¿Como mostrar Hyperlinks sin subrayado?",
			5: "¿Como crear una función en JS?",
			6: "¿Cual de los siguientes es un software de control de versiones?",
			7: "¿Cual es la etiqueta para definir una lista no ordenada?",
			8: "¿Que se entiendo por SEO?",
			9: "¿Cual de estos es una biblioteca de javascript?",
			10: "¿Que se entiende por POO?"
		},
		answerText:{
			1:{
				1: "Hyperlinks and Text Markup Language",
				2: "Home tool Markup Language",
				3: "Hyper Text Markup Language",
				4: "Cascading Styles Sheets"
			},
			2:{
				5: "1",
				6: "6",
				7: "3",
				8: "4"
			},
			3:{
				9: "Computer Style Sheets",
				10: "Cascading Style Sheets",
				11: "Creative Style Sheets",
				12: "Colorful Style Sheets"
			},
			4:{
				13: "decoration:no-underline;",
				14: "underline:none;",
				15: "text-decoration:none;",
				16: "text-decoration:no-underline;"
			},
			5:{
				17: "function myFunction()",
				18: "function:myFunction()",
				19: "function=myFunction()",
				20: "function==myFunction()"
			},
			6:{
				21: "Git",
				22: "Rust",
				23: "SQL",
				24: "Adobe"
			},
			7:{
				25: "ol",
				26: "al",
				27: "lo",
				28: "ul"
			},
			8:{
				29: "Software Entire Object",
				30: "server Enable out",
				31: "Search Engine Optimization",
				32: "Search Engine Oriented"
			},
			9:{
				33: "React",
				34: "Tailwind",
				35: "Bootstrap",
				36: "DOM"
			},
			10:{
				37: "Programación oportuna de objetos",
				38: "Programación orientada a objetos",
				39: "Objeto",
				40: "Forma de configurar un servidor"
			}
		},
		correctAnswers: {
			1: "3",
			2: "6",
			3: "10",
			4: "15",
			5: "17",
			6: "21",
			7: "28",
			8: "31",
			9: "33",
			10: "38"
		},
		correctAnswer1:0,
		correctAnswer2:0,
		correctAnswer3:0,
		correctAnswer4:0,
		correctAnswer5:0,
		correctAnswer6:0,
		correctAnswer7:0,
		correctAnswer8:0,
		correctAnswer9:0,
		correctAnswer10:0,
		clickedAnswer1:0,
		clickedAnswer2:0,
		clickedAnswer3:0,
		clickedAnswer4:0,
		clickedAnswer5:0,
		clickedAnswer6:0,
		clickedAnswer7:0,
		clickedAnswer8:0,
		clickedAnswer9:0,
		clickedAnswer10:0,
		blocked:false,
		step:1,
		score:0
	}

	checkAnswer = answer =>{
		const { correctAnswers, step, score } = this.state
		if (answer === correctAnswers[step] && step === 1) {
			this.setState({
				score: score + 0.5,
				correctAnswer1: correctAnswers[step],
				clickedAnswer1: answer				
			})
		}else if(answer === correctAnswers[step] && step === 2){
				this.setState({
					score: score + 0.5,
					correctAnswer2: correctAnswers[step],
					clickedAnswer2: answer
				
			})
		}else if(answer === correctAnswers[step] && step === 3){
				this.setState({
					score: score + 0.5,
					correctAnswer3: correctAnswers[step],
					clickedAnswer3: answer
				
			})
		}else if(answer === correctAnswers[step] && step === 4){
				this.setState({
					score: score + 0.5,
					correctAnswer4: correctAnswers[step],
					clickedAnswer4: answer
				
			})
		}else if(answer === correctAnswers[step] && step === 5){
				this.setState({
					score: score + 0.5,
					correctAnswer5: correctAnswers[step],
					clickedAnswer5: answer
				
			})
		}else if(answer === correctAnswers[step] && step === 6){
				this.setState({
					score: score + 0.5,
					correctAnswer6: correctAnswers[step],
					clickedAnswer6: answer
				
			})
		}else if(answer === correctAnswers[step] && step === 7){
				this.setState({
					score: score + 0.5,
					correctAnswer7: correctAnswers[step],
					clickedAnswer7: answer
				
			})
		}else if(answer === correctAnswers[step] && step === 8){
				this.setState({
					score: score + 0.5,
					correctAnswer8: correctAnswers[step],
					clickedAnswer8: answer
				
			})
		}else if(answer === correctAnswers[step] && step === 9){
				this.setState({
					score: score + 0.5,
					correctAnswer9: correctAnswers[step],
					clickedAnswer9: answer
				
			})
		}else if(answer === correctAnswers[step] && step === 10){
				this.setState({
					score: score + 0.5,
					correctAnswer10: correctAnswers[step],
					clickedAnswer10: answer
				
			})
		}else if(answer !== correctAnswers[step] && step === 1) {
			this.setState({
					correctAnswer1:0,
					clickedAnswer1:answer				
			})
		}else if(answer !== correctAnswers[step] && step === 2){
				this.setState({
					correctAnswer2:0,
					clickedAnswer2:answer
				
			})
		}else if(answer !== correctAnswers[step] && step === 3){
				this.setState({
					correctAnswer3:0,
					clickedAnswer3:answer
				
			})
		}else if(answer !== correctAnswers[step] && step === 4){
				this.setState({
					correctAnswer4:0,
					clickedAnswer4:answer
				
			})
		}else if(answer !== correctAnswers[step] && step === 5){
				this.setState({
					correctAnswer5:0,
					clickedAnswer5:answer
				
			})
		}else if(answer !== correctAnswers[step] && step === 6){
				this.setState({
					correctAnswer6:0,
					clickedAnswer6:answer
				
			})
		}else if(answer !== correctAnswers[step] && step === 7){
				this.setState({
					correctAnswer7:0,
					clickedAnswer7:answer
				
			})
		}else if(answer !== correctAnswers[step] && step === 8){
				this.setState({
					correctAnswer8:0,
					clickedAnswer8:answer
				
			})
		}else if(answer !== correctAnswers[step] && step === 9){
				this.setState({
					correctAnswer9:0,
					clickedAnswer9:answer
				
			})
		}else if(answer !== correctAnswers[step] && step === 10){
				this.setState({
					correctAnswer10:0,
					clickedAnswer10:answer,
			})

		}
		
		setTimeout(() => {
			this.next(step)
		}, 400);
	}

	next = step =>{
		this.setState({
			step: step + 1,
			blocked: false

		})
	}

	nextStep = step =>{

		if (this.state.clickedAnswer1 === 0 || this.state.clickedAnswer2 === 0 ||this.state.clickedAnswer3 === 0 ||
			this.state.clickedAnswer4 === 0 ||this.state.clickedAnswer5 === 0 ||this.state.clickedAnswer6 === 0 ||
			this.state.clickedAnswer7 === 0 ||this.state.clickedAnswer8 === 0 ||this.state.clickedAnswer9 === 0 ||
			this.state.clickedAnswer10 ===  0) {
				this.setState({blocked: false})
		}else{
			this.setState({blocked: true})
		}
		this.setState({step: step + 1})
	}

	previousStep = step =>{
		this.setState({step: step - 1})
		if (this.state.clickedAnswer1 || this.state.clickedAnswer2 === 0 || this.state.clickedAnswer3 === 0 ||
			this.state.clickedAnswer4 || this.state.clickedAnswer5 === 0 || this.state.clickedAnswer6 === 0 ||
			this.state.clickedAnswer7 || this.state.clickedAnswer8 === 0 || this.state.clickedAnswer9 === 0 ||
			this.state.clickedAnswer10 ) {
				this.setState({blocked: true})
		}else{
			this.setState({blocked: false})
		}
		
	}

	setStep = step => {
		this.setState({
			step:step
		})
	}
	

	render() {
		let { questionText, answerText, correctAnswers, correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5, 
			correctAnswer6, correctAnswer7, correctAnswer8, correctAnswer9, 
			correctAnswer10, clickedAnswer1, clickedAnswer2, clickedAnswer3, clickedAnswer4, clickedAnswer5,
			clickedAnswer6, clickedAnswer7, clickedAnswer8, clickedAnswer9, clickedAnswer10, blocked,
			step, score } = this.state;
		return (
			<div>
				<ButtonPages questionText = {questionText} answerText = {answerText} step = {step} checkAnswer = {this.checkAnswer}
				 correctAnswer1 = {correctAnswer1} correctAnswer2 = {correctAnswer2} correctAnswer3 = {correctAnswer3} 
				 correctAnswer4 = {correctAnswer4} correctAnswer5 = {correctAnswer5} correctAnswer6 = {correctAnswer6} 
				 correctAnswer7 = {correctAnswer7} correctAnswer8 = {correctAnswer8} correctAnswer9 = {correctAnswer9} 
				 correctAnswer10 = {correctAnswer10} clickedAnswer1 = {clickedAnswer1} clickedAnswer2 = {clickedAnswer2}
				 clickedAnswer3 = {clickedAnswer3} clickedAnswer4 = {clickedAnswer4} clickedAnswer5 = {clickedAnswer5}
				 clickedAnswer6 = {clickedAnswer6} clickedAnswer7 = {clickedAnswer7} clickedAnswer8 = {clickedAnswer8}
				 clickedAnswer9 = {clickedAnswer9} clickedAnswer10 = {clickedAnswer10} setStep = {this.setStep}/>
			<div className="qa_box">
				<div className="qa_header">
					Tu puntaje es {score} de 5
				</div>{step > 10 ? <Results score
				 = {score}  questionText = {questionText} answerText = {answerText} step = {step} checkAnswer = {this.checkAnswer}
				 correctAnswer1 = {correctAnswer1} correctAnswer2 = {correctAnswer2} correctAnswer3 = {correctAnswer3} 
				 correctAnswer4 = {correctAnswer4} correctAnswer5 = {correctAnswer5} correctAnswer6 = {correctAnswer6} 
				 correctAnswer7 = {correctAnswer7} correctAnswer8 = {correctAnswer8} correctAnswer9 = {correctAnswer9} 
				 correctAnswer10 = {correctAnswer10} clickedAnswer1 = {clickedAnswer1} clickedAnswer2 = {clickedAnswer2}
				 clickedAnswer3 = {clickedAnswer3} clickedAnswer4 = {clickedAnswer4} clickedAnswer5 = {clickedAnswer5}
				 clickedAnswer6 = {clickedAnswer6} clickedAnswer7 = {clickedAnswer7} clickedAnswer8 = {clickedAnswer8}
				 clickedAnswer9 = {clickedAnswer9} clickedAnswer10 = {clickedAnswer10} />:

				<div className="qa_set">
					<HeaderQuestion questionText = {questionText[step]}/>
					<div disabled = {blocked && correctAnswer1 ? true : blocked && correctAnswer2 ? true :
					blocked && correctAnswer3 ? true : blocked && correctAnswer4 ? true : 
					blocked && correctAnswer5 ? true : blocked && correctAnswer6 ? true :
					blocked && correctAnswer7 ? true : blocked && correctAnswer8 ? true :
					blocked && correctAnswer9 ? true : blocked && correctAnswer10 ? true : false
					} className='qa_ans'>
						<AnswersButtons answerText = {answerText[step]} step = {step} checkAnswer = {this.checkAnswer} 
						correctAnswers = {correctAnswers}
						correctAnswer1 = {correctAnswer1} correctAnswer2 = {correctAnswer2} correctAnswer3 = {correctAnswer3} 
						correctAnswer4 = {correctAnswer4} correctAnswer5 = {correctAnswer5} correctAnswer6 = {correctAnswer6} 
						correctAnswer7 = {correctAnswer7} correctAnswer8 = {correctAnswer8} correctAnswer9 = {correctAnswer9} 
						correctAnswer10 = {correctAnswer10} clickedAnswer1 = {clickedAnswer1} clickedAnswer2 = {clickedAnswer2}
						clickedAnswer3 = {clickedAnswer3} clickedAnswer4 = {clickedAnswer4} clickedAnswer5 = {clickedAnswer5}
						clickedAnswer6 = {clickedAnswer6} clickedAnswer7 = {clickedAnswer7} clickedAnswer8 = {clickedAnswer8}
						clickedAnswer9 = {clickedAnswer9} clickedAnswer10 = {clickedAnswer10} 
						/>
					</div>
					<span>Pregunta {step} de 10
					</span>
					<div className='question-count'>
						<button hidden = {step === 10 ? true : false} onClick = {() => this.nextStep(step)}>Siguiente</button>
						<button hidden = {step === 1 ? true : false} onClick = {() => this.previousStep(step)}>Anterior</button>
					</div>
				</div>}
		</div>
		</div>
		)
	}
}

export default Questions
