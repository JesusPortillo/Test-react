import './CSS/TestStyle.css'
import Questions from './Questions'

function Test(props) {

    return (
        <div>
             <div className="test-Page">
                <nav className="nav-bar">
                    <ul className="nombres">
                        <li>Nombre completo: {props.name} {props.lastName}</li>
                    </ul>
                </nav>
                    
                    <Questions/>
            </div>
        </div>
    )
}

export default Test
