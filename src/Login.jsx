import React, { useState } from 'react'
import './CSS/LoginStyle.css'
import Test from './Test'

function Login({setData}) {

    const[user, setUser] = useState({
        FirstName:'',
        LastName:''
    })

    const [registered, setRegistered] = useState(false)

    const HandleInputChange = (event) =>{
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }

    const SendData = (event) =>{
        event.preventDefault();
        let name = user.FirstName
        let lastName = user.LastName
      //setData({name, lastName})
        name && lastName !== null?setRegistered(true):setRegistered(false)
    }
    
    return (
        <div>
            {registered?
            <Test name = {user.FirstName} lastName = {user.LastName}/>:
            <div id="login-page">
                <div className="headForm">
                    <i className="fas fa-user"></i>
                    <h1>Ingrese sus datos</h1>
                </div>
                <div className="form">
                    <form className="login-form" onSubmit = {SendData}>
                        <input type="text" placeholder="Nombre" name="FirstName" onChange = {HandleInputChange}/>
                        <input type="text" placeholder="Apellido" name="LastName" onChange = {HandleInputChange}/>
                        <input type="submit" value="Ingresar" id="hide" />
                    </form>
                </div>
            </div>}
        </div>
    )
}

export default Login
