import React from 'react'

function ButtonsAnswers(props) {
    return (
        <React.Fragment>
            <button style={props.style} key={props.key} onClick={props.onClick}>{props.val}</button>
        </React.Fragment>
    )
}

export default ButtonsAnswers
