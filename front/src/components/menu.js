import React from 'react';
import ReactDOM from 'react-dom';
export default class Menu extends React.Component {
    render() {
        return(
            <ul>
                <li>Мой аккаунт</li>
                <li>Мои рецепты</li>
                <li>Все рецепты</li>
                <li>Поиск</li>
            </ul>
        );
    }
}