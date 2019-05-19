import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMenu.css'


export default class Menu extends React.Component {
    render() {
        return(

            <ul className={"ulStyle"}>
                <li className={"liStyle"}><a href={"#"} className={"menu"}>Мой аккаунт</a></li>
                <li className={"liStyle"}><a href={"#"} className={"menu"}>Мои рецепты</a></li>
                <li className={"liStyle"}><a href={"#"} className={"menu"}>Все рецепты</a></li>
                <li className={"liStyle"}><a href={"#"} className={"menu"}>Поиск</a></li>
            </ul>
        );
    }
}