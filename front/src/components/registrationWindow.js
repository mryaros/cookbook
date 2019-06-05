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
                    {/*<div>Повторите пароль*: <input type={"password"}/></div>*/}
                    <Link to="/authorization" className="button7" onClick={() => {
                        let promise = Request.requestPost("persons/registration", this.body);
                        promise.then(result => {
                            console.log(result);
                            if(result.status == "FAIL")
                                window.location.href = '/error?mes='+result.message;
                        }, error =>{ console.log(error)});
                    }}>зарегистрироваться</Link>
                </div>
            </div>
        );
    }
}