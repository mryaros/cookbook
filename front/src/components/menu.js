import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesForMenu.css'
import {Link} from "react-router-dom";


export default class Menu extends React.Component {
    render() {
        return(

            <ul className={"ulStyle"}>
                <li className={"liStyle"}><Link to="person" className={"menu"}>Мой аккаунт</Link></li>
                <li className={"liStyle"}><Link to="/" className={"menu"}>Мои рецепты</Link></li>
                <li className={"liStyle"}><a href={"#"} className={"menu"}>Все рецепты</a></li>
                <li className={"liStyle"}><a href={"#"} className={"menu"}>Поиск</a></li>
            </ul>
        );
    }
}