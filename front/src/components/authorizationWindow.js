import React from 'react';
import './styles/stylesForAuthorization.css'
import {Link} from "react-router-dom";
import User from './singletonUser';
import Request from './newRequest'

export default class AuthorizationWindow extends React.Component {
    constructor(props){
        super(props);
        this.login = "";
        this.password = "";
        // this.getSession = this.getSession.bind(this);
    }
    getSession(login, password){
        let person = {
            login: this.login,
            password: this.password
        }
        let promise = Request.requestFirstPost("persons/authorization", 'POST', person);
        promise.then(result => {
            console.log(result);

            const w = User.getInstance(result.data.id, result.data.header);
            console.log(w);
            const wq = User.getInstance("1qfdvsda", "qevf");
            console.log(wq);
        }, error => {console.log(error)});
    }
    render(){
        return(
        <div className={"divStyle"}>
            <div className={"authorization"}>
                <h1>Добро пожаловать! <br/> Пожалуйста авторизуйтесь: </h1>
                <div>Логин: <input type={"text"} onChange={(e) => {this.login = e.target.value}}/></div>
                <div>Пароль: <input type={"password"} onChange={(e) => {this.password = e.target.value}}/></div>
                    <Link to="/search" className="button7" onClick={()=>{this.getSession(this.login, this.password)}}>войти</Link>
                    <Link to="registration" className="button7">зарегистрироваться</Link>
            </div>
        </div>
        );
    }
}