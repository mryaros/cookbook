import React from 'react';
import ReactDOM from 'react-dom';


export default class ErrorMessage extends React.Component{
    render(){
        return(
            <div>
                <p>Упс.. Ошибка!</p><br/>
                <p>{window.location.search.replace('?mes=', '').replace(/%20/g, ' ')}</p><br/>
                <a href="/authorization" className="button7">авторизоваться</a>
            </div>
        )
    }
}