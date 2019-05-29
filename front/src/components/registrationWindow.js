import React from 'react';
import './styles/stylesForAuthorization.css'
import {Link} from "react-router-dom";
import Request from "./newRequest";

export default class AuthorizationWindow extends React.Component {
    constructor(props){
        super(props);
        this.body = {
            name:"",
            surname:"",
            login:"",
            password:"",
            role:""
        };
    }
    render(){
        return(
            <div className={"divStyle"}>
                <div className={"authorization"}>
                    <h1>Регистрация</h1>
                    <div>Имя*: <input type={"text"} onChange={(e)=>{this.body.name = e.target.value}}/></div>
                    <div>Фамилия*: <input type={"text"} onChange={(e)=>{this.body.surname = e.target.value}}/></div>
                    <div>Логин*: <input type={"text"} onChange={(e)=>{this.body.login = e.target.value}}/></div>
                    <div>Пароль*: <input type={"password"} onChange={(e)=>{this.body.password = e.target.value}}/></div>
                    <div>Повторите пароль*: <input type={"password"}/></div>
                    {/*<div>Имя*: <input type={"text"} id = {"nameReg"}/></div>*/}
                    {/*<div>Фамилия*: <input type={"text"} id={"surnameReg"}/></div>*/}
                    {/*<div>Логин*: <input type={"text"} id={"loginReg"}/></div>*/}
                    {/*<div>Пароль*: <input type={"password"} id={"passwordReg"}/></div>*/}
                    {/*<div>Повторите пароль*: <input type={"password"}/></div>*/}
                    {/*<Link to="/authorization" className="button7" onClick={() => {*/}
                    <button className="button7" onClick={() => {
                        // let body = {
                        //     name:"",
                        //     surname:"",
                        //     login:"",
                        //     password:"",
                        //     role:""
                        // };
                        // body.name = document.getElementById("nameReg").value;
                        // body.surname = document.getElementById("surnameReg").value;
                        // body.login = document.getElementById("login").value;
                        // body.password = document.getElementById("password").value;
                        // body.role = "USER";
                        let promise = Request.requestPost("persons/registration", 'Post', this.body);
                        promise.then(result => {
                            console.log(result);
                        }, error =>{ console.log(error)});
                    }}>зарегистрироваться</button>
                </div>
            </div>
        );
    }
}