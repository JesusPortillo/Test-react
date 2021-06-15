import React from 'react'
import './CSS/ButtonPages.css'

function ButtonPages(props) {

    
    const HandleChange = (button) =>{
        if (button === 1) {
            props.setStep(1)
        }
        if (button === 2) {
            props.setStep(2)
        }
        if (button === 3) {
            props.setStep(3)
        }
        if (button === 4) {
            props.setStep(4)
        }
        if (button === 5) {
            props.setStep(5)
        }
        if (button === 6) {
            props.setStep(6)
        }
        if (button === 7) {
            props.setStep(7)
        }
        if (button === 8) {
            props.setStep(8)
        }
        if (button === 9) {
            props.setStep(9)
        }
        if (button === 10) {
            props.setStep(10)
        }
    }

    const buttons = [1,2,3,4,5,6,7,8,9,10]
   


    return (
        <div className = "cuadro">
            {buttons.map((button, index) => (
                <span className = {index === 0 && props.correctAnswer1 !== 0 ? "right"
                :index === 0 && props.clickedAnswer1 !== 0 ? "wrong"
                :index === 1 && props.correctAnswer2 !== 0 ? "right"
                :index === 1 && props.clickedAnswer2 !== 0 ? "wrong"
                :index === 2 && props.correctAnswer3 !== 0 ? "right"
                :index === 2 && props.clickedAnswer3 !== 0 ? "wrong"
                :index === 3 && props.correctAnswer4 !== 0 ? "right"
                :index === 3 && props.clickedAnswer4 !== 0 ? "wrong"
                :index === 4 && props.correctAnswer5 !== 0 ? "right"
                :index === 4 && props.clickedAnswer5 !== 0 ? "wrong"
                :index === 5 && props.correctAnswer6 !== 0 ? "right"
                :index === 5 && props.clickedAnswer6 !== 0 ? "wrong"
                :index === 6 && props.correctAnswer7 !== 0 ? "right"
                :index === 6 && props.clickedAnswer7 !== 0 ? "wrong"
                :index === 7 && props.correctAnswer8 !== 0 ? "right"
                :index === 7 && props.clickedAnswer8 !== 0 ? "wrong"
                :index === 8 && props.correctAnswer9 !== 0 ? "right"
                :index === 8 && props.clickedAnswer9 !== 0 ? "wrong"
                :index === 9 && props.correctAnswer10 !== 0 ? "right"
                :index === 9 && props.clickedAnswer10 !== 0 ? "wrong"
                :""} key = {index} onClick = {() => {HandleChange(button)} }>{buttons[index]}</span>
            ))}
        </div>
    )
}

export default ButtonPages
