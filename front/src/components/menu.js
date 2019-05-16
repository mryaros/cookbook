import React from 'react';
import ReactDOM from 'react-dom';

  import {styles} from './styles/stylesForMenu.js'

export default class Menu extends React.Component {
    render() {
        return(
            <ul style={styles.ulStyle}>
                <li style={styles.liStyle}>Мой аккаунт</li>
                <li style={styles.liStyle}>Мои рецепты</li>
                <li style={styles.liStyle}>Все рецепты</li>
                <li style={styles.liStyle}>Поиск</li>
            </ul>
        );
    }
}