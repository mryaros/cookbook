import React from 'react';
import ReactDOM from 'react-dom';

export default class Request {
    constructor(){
        this.session = null;
        // this.requestGet = this.requestGet.bind(this);
    }

     static requestGet (url, method) {
        return( new Promise((resolve, reject) => (
        fetch("http://localhost:8080/cookbook_war_exploded/server/"+url, {
            method:method,
            mode:'no-cors',
            headers: {'Session' : '',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }        })
            .then((response, a, s, d, f) => {
                console.log(response);
                if(response.ok) {
                    // resolve(response.json());
                    console.log(response.body);
                    // resolve(response.body);
                    response.json().then(data => {
                        resolve(data);
                    });
                } else {
                    reject('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
                    console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
                }
            }))));
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