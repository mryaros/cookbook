import React from 'react';
import ReactDOM from 'react-dom';
import User from './singletonUser'

export default class Request {
    constructor(){
        this.session = null;
        // this.requestGet = this.requestGet.bind(this);
    }

    static requestGet (url, method) {
        return (
            new Promise((resolve, reject) => {
                    var xhr = new XMLHttpRequest();

                    xhr.open(method, "http://localhost:8080/cookbook_war_exploded/server/"+url, true);

                    // xhr.setRequestHeader('Session', User.getInstance().session);
                    xhr.setRequestHeader('Session', localStorage.getItem("session"));

                    xhr.send();

                    xhr.onreadystatechange = function() {
                        if (this.readyState != 4) return;

                        // по окончании запроса доступны:
                        // status, statusText
                        // responseText, responseXML (при content-type: text/xml)

                        if (this.status != 200) {
                            // обработать ошибку
                            reject('fail');
                            alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                            return;
                        }
                        resolve(JSON.parse(this.responseText));
                        // получить результат из this.responseText или this.responseXML
                    }
                }
            ))

    }
    static requestFirstPost (url, method, body) {
        return (
            new Promise((resolve, reject) => {
                    var xhr = new XMLHttpRequest();

                    xhr.open(method, "http://localhost:8080/cookbook_war_exploded/server/"+url, true);
                    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                body.role = "USER";

                    xhr.send(JSON.stringify(body));

                    xhr.onreadystatechange = function() {
                        if (this.readyState != 4) return;

                        // по окончании запроса доступны:
                        // status, statusText
                        // responseText, responseXML (при content-type: text/xml)

                        if (this.status != 200) {
                            // обработать ошибку
                            reject('fail');
                            alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                            return;
                        }
                        resolve(JSON.parse(this.responseText));
                        // получить результат из this.responseText или this.responseXML
                    }
                }
            ))

    }
    static requestPost (url, method, body) {
        return (
            new Promise((resolve, reject) => {
                    var xhr = new XMLHttpRequest();

                    xhr.open(method, "http://localhost:8080/cookbook_war_exploded/server/"+url, true);
                    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    // xhr.setRequestHeader('Session', User.getInstance().session);
                    xhr.setRequestHeader('Session', localStorage.getItem("session"));
                    body.role = "USER";

                    xhr.send(JSON.stringify(body));

                    xhr.onreadystatechange = function() {
                        if (this.readyState != 4) return;

                        // по окончании запроса доступны:
                        // status, statusText
                        // responseText, responseXML (при content-type: text/xml)

                        if (this.status != 200) {
                            // обработать ошибку
                            reject('fail');
                            alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                            return;
                        }
                        resolve(JSON.parse(this.responseText));
                        // получить результат из this.responseText или this.responseXML
                    }
                }
            ))
    }
    static requestPostRecipe (url, method, body) {
        return (
            new Promise((resolve, reject) => {
                    var xhr = new XMLHttpRequest();

                    xhr.open(method, "http://localhost:8080/cookbook_war_exploded/server/"+url, true);
                    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    // xhr.setRequestHeader('Session', User.getInstance().session);
                    xhr.setRequestHeader('Session', localStorage.getItem("session"));
                    xhr.send(JSON.stringify(body));

                    xhr.onreadystatechange = function() {
                        if (this.readyState != 4) return;

                        // по окончании запроса доступны:
                        // status, statusText
                        // responseText, responseXML (при content-type: text/xml)

                        if (this.status != 200) {
                            // обработать ошибку
                            reject('fail');
                            alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                            return;
                        }
                        resolve(JSON.parse(this.responseText));
                        // получить результат из this.responseText или this.responseXML
                    }
                }
            ))
    }
}