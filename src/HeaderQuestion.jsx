import React from 'react'
import './CSS/QuestionBoxStyle.css'

function HeaderQuestion(props) {
    return (
        <React.Fragment>
            <div className='question-text'><h4><strong>{props.questionText}</strong></h4></div>
        </React.Fragment>
    )
}

export default HeaderQuestion
