import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component{
    render() {
        if (localStorage.getItem('session')){
            window.location.href = '/myrecipes';
        } else {
            window.location.href = '/authorization';
        }
        return(<div></div>);
    }
}