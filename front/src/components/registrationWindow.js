import React from 'react';
import './styles/stylesForAuthorization.css'
import {Link} from "react-router-dom";

export default class AuthorizationWindow extends React.Component {
    render(){
        return(
            <div className={"divStyle"}>
                <div className={"authorization"}>
                    <h1>Регистрация</h1>
                    <div>Имя*: <input type={"text"}/></div>
                    <div>Фамилия*: <input type={"text"}/></div>
                    <div>Логин*: <input type={"text"}/></div>
                    <div>Пароль*: <input type={"password"}/></div>
                    <div>Повторите пароль*: <input type={"password"}/></div>
                    <Link to="/authorization" className="button7">зарегистрироваться</Link>
                </div>
            </div>
        );
    }
}