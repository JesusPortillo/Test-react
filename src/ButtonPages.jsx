import React from 'react'
import './CSS/TestStyle.css'

function ButtonPages() {

    const HandleChange = () =>{

        
    }

    const buttons = [1,2,3,4,5,6,7,8,9,10]
    const listButtons = buttons.map((button) => <span key={button} onClick = {HandleChange}>{button}</span>)


    return (
        <React.Fragment>
            <div className = "cuadro">
                {listButtons}
            </div>
        </React.Fragment>
                
        
    )
}

export default ButtonPages
