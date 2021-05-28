import React, { useState } from 'react'
import './CSS/TestStyle.css'
import ButtonPages from './ButtonPages'
import Questions from './Questions'

function Test(props) {
    //i'm trying to send the questions to Buttonpages
    const[questions,setQuestions] = useState([])



    return (
        <div>
             <div className="test-Page">
                <nav className="nav-bar">
                    <ul className="nombres">
                        <li>Nombre completo: {props.name} {props.lastName}</li>
                    </ul>
                </nav>
                    <ButtonPages/>
                    <Questions/>
            </div>
        </div>
    )
}

export default Test
