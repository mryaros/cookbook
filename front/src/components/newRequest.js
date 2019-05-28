import React from 'react';
import ReactDOM from 'react-dom';

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
                        console.log(this.responseText);
                        // получить результат из this.responseText или this.responseXML
                    }
        }
        ))
        // .then(
        //     (result) => {
        //         this.setState({
        //             isLoaded: true,
        //             items: result.items
        //         });
        //     },
        //     // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        //     // чтобы не перехватывать исключения из ошибок в самих компонентах.
        //     (error) => {
        //         this.setState({
        //             isLoaded: true,
        //             error
        //         });
        //     }
        // )
    }
}