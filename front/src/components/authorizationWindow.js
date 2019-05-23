import React from 'react';
import './styles/stylesForAuthorization.css'
import {Link} from "react-router-dom";

export default class AuthorizationWindow extends React.Component {
    render(){
        return(
        <div className={"divStyle"}>
            <div className={"authorization"}>
                <h1>Добро пожаловать! <br/> Пожалуйста авторизуйтесь: </h1>
                <div>Логин: <input type={"text"}/></div>
                <div>Пароль: <input type={"password"}/></div>
                    <Link to="/" className="button7">войти</Link>
                    <Link to="registration" className="button7">зарегистрироваться</Link>
            </div>
        </div>
        );
    }
}